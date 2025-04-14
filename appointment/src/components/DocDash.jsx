import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DocDash = () => {
  const [appointments, setAppointments] = useState([]);
  const doctorId = localStorage.getItem('doctorId');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/doctor/${doctorId}/all-appointments`);
        setAppointments(res.data);
      } catch (err) {
        console.error('Error fetching appointments:', err);
      }
    };

    if (doctorId) {
      fetchAppointments();
    }
  }, [doctorId]);

  const handleConfirm = async (appointmentId) => {
    try {
      await axios.put(`http://localhost:5000/api/appointments/${appointmentId}/confirm`);
      setAppointments((prev) =>
        prev.map((appt) =>
          appt._id === appointmentId ? { ...appt, confirmed: true } : appt
        )
      );
    } catch (err) {
      console.error('Error confirming appointment:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">
        Doctor Dashboard
      </h2>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments yet.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appt) => (
            <li
              key={appt._id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-md"
            >
              <p><strong>Patient ID:</strong> {appt.userId}</p>
              <p><strong>Disease:</strong> {appt.diseaseName}</p>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    appt.confirmed ? 'text-green-600' : 'text-yellow-600'
                  }`}
                >
                  {appt.confirmed ? 'Confirmed' : 'Pending'}
                </span>
              </p>

              {!appt.confirmed && (
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => handleConfirm(appt._id)}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Confirm
                  </button>
                  {/* Add a Cancel button if backend supports canceling */}
                  {/* <button
                    onClick={() => handleCancel(appt._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Cancel
                  </button> */}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DocDash;
