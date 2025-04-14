import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AppointmentConfirmation() {
  const [appointments, setAppointments] = useState([]);
  const [userId] = useState('123'); // Replace with actual user ID logic
  const navigate=useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/appointments/${userId}`);
        setAppointments(res.data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };
    fetchAppointments();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-10">
      <h1 className="text-3xl font-bold text-teal-700 text-center">
              Appointment Confirmed!
            </h1>


        {/* Appointments List */}
        <div>
        <p className="text-xl text-gray-700">Your appointment has been confirmed. Here are the details:</p>
          {appointments.length === 0 ? (
            <p className="text-center text-gray-500">No appointments yet.</p>
          ) : (
            <ul className="space-y-4">
              {appointments.map((appt) => (
                <li
                  key={appt._id}
                  className="border rounded-xl p-4 shadow-sm bg-gray-50"
                >
                  <p className="text-gray-700"><strong>Doctor ID:</strong> {appt.doctorId}</p>
                  <p className="text-gray-700"><strong>Disease:</strong> {appt.diseaseName}</p>
                  <p className="text-gray-700"><strong>Date:</strong> {appt.date}</p>
                  <p className="text-gray-700"><strong>Time:</strong> {appt.time}</p>
                  
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-4">
      {/* Go back (browser history) */}
      <button
        onClick={() => navigate('/DoctorDashboard')}
        className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
      >
        Go Back
      </button>

      {/* Go to Dashboard */}
      <button
        onClick={() => navigate('/Docter')}
        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
      >
        Go to Dashboard
      </button>
    </div>
      </div>
    </div>
  );
}

export default AppointmentConfirmation;
