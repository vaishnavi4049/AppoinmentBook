import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function UserDashboard() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-teal-700 text-center">Your Appointments</h1>

        {/* Appointments List */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4 text-center">Upcoming Appointments</h2>
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
                  <p className={`text-sm mt-2 ${appt.status === 'confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>
                    <strong>Status:</strong> {appt.status === 'confirmed' ? 'Confirmed' : 'Waiting for Doctor Confirmation'}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={() => navigate('/Dashboard')}
          className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;
