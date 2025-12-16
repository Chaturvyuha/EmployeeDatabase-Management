# Employee Database Management System

A full-stack web application for managing employee records with a modern React frontend and Node.js backend. 

## 📋 Overview

This Employee Database Management System provides a comprehensive solution for tracking and managing employee information.  Built with modern web technologies, it offers a clean and intuitive interface for CRUD operations on employee data.

## 🛠️ Tech Stack

### Frontend
- **React** - UI library for building interactive user interfaces
- **Vite** - Fast build tool and development server
- **ESLint** - Code quality and consistency

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - Database for storing employee records

## 📁 Project Structure

```
EmployeeDatabase-Management/
├── front-end/          # React frontend application
│   ├── src/           # Source files
│   ├── public/        # Static assets
│   ├── package.json   # Frontend dependencies
│   └── vite.config.js # Vite configuration
│
└── server1/           # Node.js backend server
    ├── models/        # Database models
    ├── routes/        # API routes
    ├── index.js       # Server entry point
    └── package. json   # Backend dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chaturvyuha/EmployeeDatabase-Management.git
   cd EmployeeDatabase-Management
   ```

2. **Setup Backend**
   ```bash
   cd server1
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../front-end
   npm install
   ```

### Configuration

Create a `.env` file in the `server1` directory with your configuration:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd server1
   npm start
   ```
   The server will run on `http://localhost:5000` (or your configured port)

2. **Start the Frontend Development Server**
   ```bash
   cd front-end
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📝 Features

- ✅ Create new employee records
- ✅ View employee information
- ✅ Update employee details
- ✅ Delete employee records
- ✅ Search and filter employees
- ✅ Responsive user interface

## 🔧 Development

### Frontend Development
```bash
cd front-end
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

### Backend Development
```bash
cd server1
npm start          # Start server
```

## 📄 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get employee by ID |
| POST | `/api/employees` | Create new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@Chaturvyuha](https://github.com/Chaturvyuha)

Project Link: [https://github.com/Chaturvyuha/EmployeeDatabase-Management](https://github.com/Chaturvyuha/EmployeeDatabase-Management)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
