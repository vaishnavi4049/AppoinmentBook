// // Example Express route
// const express = require('express');
// const router = express.Router();
// const Appointment = require('../models/Appointment');

// router.post('/appointments', async (req, res) => {
//   try {
//     const { userId, doctorId, diseaseName, date, time } = req.body;

//     // Validate required fields
//     if (!userId || !doctorId || !diseaseName || !date || !time) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     const newAppointment = new Appointment({
//       userId,
//       doctorId,
//       diseaseName,
//       date,
//       time,
//       status: 'pending',
//     });

//     await newAppointment.save();
//     res.status(201).json(newAppointment);
//   } catch (err) {
//     console.error('Appointment error:', err);
//     res.status(500).json({ message: 'Server error while creating appointment' });
//   }
// });
import express from 'express';
import mongoose from 'mongoose';
import Appointment from '../models/Appointment.js';

const router = express.Router();

// 🆕 Book appointment
router.post('/http://localhost:5000/api/appointments', async (req, res) => {
  try {
    const { userId, doctorId, date, time, reason } = req.body;

    const newAppointment = new Appointment({
      userId,
      doctorId: mongoose.Types.ObjectId(doctorId),
      date,
      time,
      reason,
      confirmed: false // default status
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
  } catch (err) {
    console.error('Error booking appointment:', err);
    res.status(500).json({ message: 'Server error while booking appointment' });
  }
});

// ✅ Get appointments by doctor
// Example in routes/doctor.js or wherever it's defined
router.get('/doctor/:doctorId/appointments', async (req, res) => {
  const { doctorId } = req.params;

  try {
    const appointments = await Appointment.find({ doctorId });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});


// ✔️ Confirm appointment
router.put('/confirm/:id', async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { confirmed: true },
      { new: true }
    );
    res.json(updatedAppointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

