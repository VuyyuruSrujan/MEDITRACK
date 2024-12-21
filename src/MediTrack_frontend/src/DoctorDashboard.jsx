import { useState } from 'react';
import { motion } from 'framer-motion';
import './DoctorDashboard.css';

function DoctorDashboard() {
  const [prescription, setPrescription] = useState({
    patientId: '',
    diagnosis: '',
    medicines: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle prescription submission
    console.log(prescription);
  };

  return (
    <div className="doctor-dashboard container">
      <motion.h1 
        className="neon-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Doctor's Dashboard
      </motion.h1>

      <motion.form 
        className="prescription-form"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label>Patient ID</label>
          <input
            type="text"
            value={prescription.patientId}
            onChange={(e) => setPrescription({...prescription, patientId: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Diagnosis</label>
          <textarea
            value={prescription.diagnosis}
            onChange={(e) => setPrescription({...prescription, diagnosis: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Medicines</label>
          <textarea
            value={prescription.medicines}
            onChange={(e) => setPrescription({...prescription, medicines: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Additional Notes</label>
          <textarea
            value={prescription.notes}
            onChange={(e) => setPrescription({...prescription, notes: e.target.value})}
          />
        </div>

        <motion.button 
          type="submit" 
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Prescription
        </motion.button>
      </motion.form>
    </div>
  );
}

export default DoctorDashboard;