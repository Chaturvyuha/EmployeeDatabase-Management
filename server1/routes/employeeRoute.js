const mongoose = require('mongoose');
const express = require('express');
const Employee = require('../models/employeeModel');
const router = express.Router();


router.post('/add-employee', async (req, res) => {
    try {
        const { empId, fullName, department, salary } = req.body;
        const existing = await Employee.findOne({ empId });
        if (existing) {
            return res.status(409).json({ status: false, message: 'Employee ID already exists.' });
        }

        const employee = new Employee({ empId, fullName, department, salary });
        await employee.save();
        res.json({ status: true, message: "Employee added successfully!" });
    } catch (err) {
        if (err && err.code === 11000) {
            return res.status(409).json({ status: false, message: 'Employee ID must be unique.' });
        }
        console.log(err);
        res.json({ status: false, message: 'Error while inserting record !!' });
    }
});


router.get('/get-employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json({ status: true, message: employees });
    } catch (err) {
        res.json({ status: false, message: 'Error while getting employees !!' });
    }
});

router.get('/get-employee/:empId', async (req, res) => {
    const empId = req.params.empId;
    try {
        const employee = await Employee.findOne({ empId: empId });
        if (employee) res.json({ status: true, message: employee });
        else res.json({ status: false, message: 'Employee not found !!' });
    } catch (err) {
        res.json({ status: false, message: 'Error while getting employee !!' });
    }
});


router.put('/update-employee/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
        if (employee) {
            res.json({ status: true, message: "Employee updated !!" });
        } else {
            res.json({ status: false, message: "Employee not found !!" });
        }
    } catch (error) {
        res.json({ status: false, message: "Error while updating..." });
    }
});


router.delete('/delete-employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (employee) {
            res.json({ status: true, message: "Employee deleted !!" });
        } else {
            res.json({ status: false, message: "Employee not found !!" });
        }
    } catch (err) {
        res.json({ status: false, message: "Internal server error." });
    }
});

module.exports = router;
