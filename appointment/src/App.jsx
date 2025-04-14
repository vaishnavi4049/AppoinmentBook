import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppointmentBook from './components/AppointmentBook';
import Dashboard from './components/Dashboard'; 
import Personalinfo from './components/PersonalInfo';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import DoctorDashboard from './components/DocterDashboard';
import UserDashboard from './components/UserDashboard';
import DoctorLogin from './components/DocterLogin';
import DoctorRegister from './components/DocterRegister';
import AppointmentConfirmation from './components/AppointmentConfirmation'
import CancellationPage from './components/CancellationPage';
import DocDash from './components/DocDash';
import Docter from './components/Docter';
export default function App() {
  const [formData, setFormData] = useState({})

  const handleSubmit = (data) => {
    console.log("Final Submitted Data:", data)
    // You can add validation or save to backend here
  }

  const doctorId = "123456";

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
        <Route path="/docterlogin" element={<DoctorLogin />} />
        <Route path="/docterreg" element={<DoctorRegister />} />
          <Route path="/AppointmentBook" element={<AppointmentBook />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/AppointmentConfirmation" element={<AppointmentConfirmation />} />
          <Route path="/CancellationPage" element={<CancellationPage />} />
          <Route path="/docter" element={<Docter />} />
          <Route path="/DocDash" element={<DocDash />} />


          <Route
            path="/PersonalInfo"
            element={
              <Personalinfo
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
