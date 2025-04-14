import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CancellationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  

  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Appointment Cancelled</h1>
        <p className="text-gray-600 mb-6">
          The following appointment has been cancelled successfully:
        </p>

        {/* <div className="text-left bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p><strong>User ID:</strong> {appointment.userId}</p>
          <p><strong>Disease:</strong> {appointment.diseaseName}</p>
          <p><strong>Date:</strong> {appointment.date}</p>
          <p><strong>Time:</strong> {appointment.time}</p>
        </div> */}

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

export default CancellationPage;
