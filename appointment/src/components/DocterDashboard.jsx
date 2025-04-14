import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [userId] = useState('123'); // Replace with actual user ID logic
  const navigate = useNavigate();


  const handleConfirm=()=>{
    navigate('/AppointmentConfirmation');

  }
  const handleCancel=()=>{
    navigate('/CancellationPage')
  }
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
        

        {/* Appointments List */}
        {/* <div>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4 text-center">Appointments</h2>
          {appointments.length === 0 ? (
            <p className="text-center text-gray-500">No appointments yet.</p>
          ) : (
            <ul className="space-y-4">
              {appointments.map((appt) => (
                <li key={appt._id} className="border rounded-xl p-4 shadow-sm bg-gray-50">
                  <p className="text-gray-700"><strong>User ID:</strong> {appt.userId}</p>
                  <p className="text-gray-700"><strong>Disease:</strong> {appt.diseaseName}</p>
                  <p className="text-gray-700"><strong>Date:</strong> {appt.date}</p>
                  <p className="text-gray-700"><strong>Time:</strong> {appt.time}</p>
                  <p className="text-gray-700">
                    <strong>Status:</strong> 
                    {appt.confirmed ? (
                      <span className="text-green-600 font-semibold">Confirmed</span>
                    ) : (
                      <span className="text-yellow-600 font-semibold">Pending Confirmation</span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div> */}
         <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
  <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">Upcoming Appointments</h2>

  {appointments.length === 0 ? (
    <p className="text-center text-gray-500 text-lg">You have no appointments at the moment.</p>
  ) : (
    <ul className="space-y-6">
      {appointments.map((appt) => (
        <li
          key={appt._id}
          className="border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="mb-2 flex flex-col md:flex-row md:justify-between">
            <div className="space-y-1 text-sm md:text-base">
              <p><span className="font-semibold text-gray-700">User ID:</span> {appt.userId}</p>
              <p><span className="font-semibold text-gray-700">Disease:</span> {appt.diseaseName}</p>
              <p><span className="font-semibold text-gray-700">Date:</span> {appt.date}</p>
              <p><span className="font-semibold text-gray-700">Time:</span> {appt.time}</p>
            </div>
            <div className="mt-4 md:mt-0 text-sm md:text-base">
              <p className={`font-semibold ${appt.status === 'confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>
                {appt.status === 'confirmed' ? '✅ Confirmed' : '⏳ Pending Confirmation'}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          {appt.status !== 'confirmed' && (
            <div className="mt-4 flex flex-col md:flex-row justify-end gap-4">
              <button
                onClick={() => handleConfirm()}
                className="px-5 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all font-medium"
                
              >
                 Confirm
              </button>
              <button
                onClick={() => handleCancel()}
                className="px-5 py-2 bg-black-200 text-black rounded-xl hover:bg-black-600 transition-all font-medium border-1"
              >
                Cancel
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  )}
</div>
<button
          onClick={() => navigate('/Docter')}
          className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
