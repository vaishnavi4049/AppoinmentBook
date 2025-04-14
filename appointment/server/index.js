// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';

// const app = express();
// const port = 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// }));

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/hospital', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Mongoose Schemas and Models
// const appointmentSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   doctorId: { type: mongoose.Schema.Types.ObjectId, required: true },
//   diseaseName: { type: String, required: true },
//   date: { type: String, required: true },
//   time: { type: String, required: true },
//   confirmed: { type: Boolean, default: false },
// });

// const Appointment = mongoose.model('Appointment', appointmentSchema);

// const doctorSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const Doctor = mongoose.model('Doctor', doctorSchema);

// // ROUTES

// // 👉 Register a new doctor
// app.post('/api/doctor/register', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const existingDoctor = await Doctor.findOne({ username });
//     if (existingDoctor) {
//       return res.status(400).json({ message: 'Username already taken' });
//     }

//     const newDoctor = new Doctor({ username, password });
//     await newDoctor.save();
//     res.status(201).json({ message: 'Doctor registered successfully' });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ message: 'Error registering doctor', error: error.message });
//   }
// });

// // 👉 Doctor login
// app.post('/api/doctor/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const doctor = await Doctor.findOne({ username });
//     if (!doctor) {
//       return res.status(404).json({ message: 'Doctor not found' });
//     }

//     if (doctor.password !== password) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful', doctorId: doctor._id });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Error logging in', error: error.message });
//   }
// });

// // 👉 Book a new appointment
// app.post('/api/appointments', async (req, res) => {
//   const { userId, doctorId, diseaseName, date, time } = req.body;

//   try {
//     const newAppointment = new Appointment({
//       userId,
//       doctorId: mongoose.Types.ObjectId(doctorId),
//       diseaseName,
//       date,
//       time,
//     });

//     await newAppointment.save();
//     res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
//   } catch (error) {
//     console.error('Error booking appointment:', error);
//     res.status(500).json({ message: 'Error booking appointment' });
//   }
// });

// // 👉 Get all appointments for a specific user
// app.get('/api/appointments/:userId', async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const appointments = await Appointment.find({ userId });
//     res.status(200).json(appointments);
//   } catch (error) {
//     console.error('Error fetching appointments:', error);
//     res.status(500).json({ message: 'Error fetching appointments' });
//   }
// });

// // 👉 Get all unconfirmed appointments for a doctor
// app.get('/api/doctor/:doctorId/appointments', async (req, res) => {
//   const { doctorId } = req.params;

//   try {
//     const appointments = await Appointment.find({ doctorId, confirmed: false });
//     res.status(200).json(appointments);
//   } catch (error) {
//     console.error('Error fetching doctor appointments:', error);
//     res.status(500).json({ message: 'Error fetching doctor appointments' });
//   }
// });

// // ✅ NEW: Get ALL appointments (confirmed + unconfirmed) for a doctor
// app.get('/api/doctor/:doctorId/all-appointments', async (req, res) => {
//   const { doctorId } = req.params;

//   try {
//     const appointments = await Appointment.find({ doctorId });
//     res.status(200).json(appointments);
//   } catch (error) {
//     console.error('Error fetching all doctor appointments:', error);
//     res.status(500).json({ message: 'Error fetching all appointments' });
//   }
// });

// // 👉 Confirm an appointment
// app.put('/api/appointments/:appointmentId/confirm', async (req, res) => {
//   const { appointmentId } = req.params;

//   try {
//     const updated = await Appointment.findByIdAndUpdate(
//       appointmentId,
//       { confirmed: true },
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ message: 'Appointment not found' });
//     }

//     res.status(200).json({ message: 'Appointment confirmed', appointment: updated });
//   } catch (error) {
//     console.error('Error confirming appointment:', error);
//     res.status(500).json({ message: 'Error confirming appointment' });
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';


const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hospital', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mongoose Schemas and Models
const appointmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  doctorId: { type: String, required: true },
  diseaseName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  confirmed: { type: Boolean, default: false },
});
// doctorId: { type: mongoose.Schema.Types.ObjectId, required: true },

const Appointment = mongoose.model('Appointment', appointmentSchema);

const doctorSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

// ROUTES

// 👉 Register a new doctor
app.post('/api/doctor/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingDoctor = await Doctor.findOne({ username });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    const newDoctor = new Doctor({ username, password });
    await newDoctor.save();
    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error registering doctor', error: error.message });
  }
});

// 👉 Doctor login
app.post('/api/doctor/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ username });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    if (doctor.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', doctorId: doctor._id });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

// 👉 Book a new appointment
app.post('/api/appointments', async (req, res) => {
  try {
    const { userId, doctorId, diseaseName, date, time } = req.body;

    // Basic validation
    if (!userId || !doctorId || !diseaseName || !date || !time) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newAppointment = new Appointment({
      userId,
      doctorId,
      diseaseName,
      date,
      time,
      status: 'pending',
    });

    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (err) {
    console.error('Error creating appointment:', err);
    res.status(500).json({ message: 'Server error while creating appointment' });
  }
});


// 👉 Get all appointments for a specific user
app.get('/api/appointments/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const appointments = await Appointment.find({ userId });
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});

// 👉 Get all unconfirmed appointments for a doctor
app.get('/api/doctor/:doctorId/appointments', async (req, res) => {
  const { doctorId } = req.params;

  try {
    const appointments = await Appointment.find({ doctorId, confirmed: false });
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching doctor appointments:', error);
    res.status(500).json({ message: 'Error fetching doctor appointments' });
  }
});

// ✅ NEW: Get ALL appointments (confirmed + unconfirmed) for a doctor
app.get('/api/doctor/:doctorId/all-appointments', async (req, res) => {
  const { doctorId } = req.params;

  try {
    const appointments = await Appointment.find({ doctorId });
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching all doctor appointments:', error);
    res.status(500).json({ message: 'Error fetching all appointments' });
  }
});

// 👉 Confirm an appointment
app.put('/api/appointments/:appointmentId/confirm', async (req, res) => {
  const { appointmentId } = req.params;

  try {
    const updated = await Appointment.findByIdAndUpdate(
      appointmentId,
      { confirmed: true },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment confirmed', appointment: updated });
  } catch (error) {
    console.error('Error confirming appointment:', error);
    res.status(500).json({ message: 'Error confirming appointment' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

