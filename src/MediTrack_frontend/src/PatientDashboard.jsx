import { motion } from 'framer-motion';
import './PatientDashboard.css';

function PatientDashboard() {
  // Mock prescription data
  const prescriptions = [
    {
      id: 1,
      date: '2024-03-15',
      doctor: 'Dr. Smith',
      diagnosis: 'Common Cold',
      medicines: 'Paracetamol 500mg\nVitamin C 1000mg',
      notes: 'Take rest and drink plenty of water'
    },
    // Add more mock prescriptions as needed
  ];

  return (
    <div className="patient-dashboard container">
      <motion.h1 
        className="neon-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Patient Dashboard
      </motion.h1>

      <div className="prescriptions-list">
        {prescriptions.map((prescription, index) => (
          <motion.div 
            key={prescription.id}
            className="prescription-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="prescription-header">
              <h3>{prescription.diagnosis}</h3>
              <span className="date">{prescription.date}</span>
            </div>
            <div className="prescription-details">
              <p><strong>Doctor:</strong> {prescription.doctor}</p>
              <p><strong>Medicines:</strong></p>
              <pre>{prescription.medicines}</pre>
              <p><strong>Notes:</strong></p>
              <p>{prescription.notes}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PatientDashboard;