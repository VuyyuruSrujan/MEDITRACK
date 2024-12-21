import { useState } from 'react';
import { motion } from 'framer-motion';
import './PharmacyDashboard.css';

function PharmacyDashboard() {
  const [patientId, setPatientId] = useState('');
  const [prescription, setPrescription] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Mock prescription fetch
    setPrescription({
      patientName: 'John Doe',
      date: '2024-03-15',
      doctor: 'Dr. Smith',
      medicines: [
        'Paracetamol 500mg - 10 tablets',
        'Vitamin C 1000mg - 5 tablets'
      ]
    });
  };

  return (
    <div className="pharmacy-dashboard container">
      <motion.h1 
        className="neon-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Pharmacy Dashboard
      </motion.h1>

      <motion.div 
        className="search-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
          <motion.button 
            type="submit"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search Prescription
          </motion.button>
        </form>
      </motion.div>

      {prescription && (
        <motion.div 
          className="prescription-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="prescription-card">
            <h2>Prescription Details</h2>
            <p><strong>Patient:</strong> {prescription.patientName}</p>
            <p><strong>Date:</strong> {prescription.date}</p>
            <p><strong>Doctor:</strong> {prescription.doctor}</p>
            <div className="medicines-list">
              <h3>Medicines</h3>
              <ul>
                {prescription.medicines.map((medicine, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {medicine}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default PharmacyDashboard;