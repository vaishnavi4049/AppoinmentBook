// ... same imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AppointmentBook() {
  const [appointments, setAppointments] = useState([]);
  const [doctorId, setDoctorId] = useState('');
  const [diseaseName, setDiseaseName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [userId] = useState('123'); // Replace with actual user ID logic

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

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', {
        userId, doctorId, diseaseName, date, time
      });
      alert('Appointment booked successfully!');

      setDoctorId('');
      setDiseaseName('');
      setDate('');
      setTime('');

      const res = await axios.get(`http://localhost:5000/api/appointments/${userId}`);
      setAppointments(res.data);
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-700 text-center">
          Book Your Appointment
        </h1>

        {/* Booking Form */}
        <form onSubmit={handleBooking} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="doctorId" className="text-gray-700 font-medium">Doctor ID</label>
              <input
                id="doctorId"
                type="text"
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
                placeholder="Enter Doctor ID"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="diseaseName" className="text-gray-700 font-medium">Disease</label>
              <input
                id="diseaseName"
                type="text"
                value={diseaseName}
                onChange={(e) => setDiseaseName(e.target.value)}
                placeholder="e.g. Flu, Fever, Diabetes"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="date" className="text-gray-700 font-medium">Date</label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="time" className="text-gray-700 font-medium">Time</label>
              <input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <Link
              to="/UserDashboard"
              className="text-teal-600 font-medium underline hover:text-teal-800 transition-all"
            >
              View My Appointments
            </Link>

            <button
              type="submit"
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-md transition-all"
            >
              Book Appointment
            </button>
          </div>
        </form>

        {/* Appointments List */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-700 mb-4 text-center">Your Appointments</h2>
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
                  <p className="text-gray-700">
                    <strong>Status:</strong>{' '}
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
        </div>
      </div>
    </div>
  );
}

export default AppointmentBook;
