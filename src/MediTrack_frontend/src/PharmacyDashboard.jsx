import { useState } from 'react';
import { motion } from 'framer-motion';
import './PharmacyDashboard.css';
import { MediTrack_backend } from '../../declarations/MediTrack_backend';
import { getGlobalPrincipal } from './Global';
import { Principal } from '@dfinity/principal';

const PharmacyDashboard = () => {
  const [prescription, setPrescription] = useState([]);
  const [principall, setPrincipall] = useState("");

  const getPrescriptionfun = async (event) => {
    event.preventDefault();
    try {
      const answer = await MediTrack_backend.getPresecriptions(
        Principal.fromText(principall)
      );
      console.log("answer", answer);

      if (!answer || answer.length === 0) {
        alert("You have no prescriptions");
        console.log("answer, if:", answer);
      } else {
        // Transform the answer to exclude unnecessary fields
        const transformedAnswer = answer.map((prescription) => ({
          additional_notes: prescription.additional_notes || "",
          date: prescription.date || "",
          diagnosis: prescription.diagnosis || "",
          doc_nm: prescription.doc_nm || "",
          medicines: prescription.medicines || "",
        }));

        console.log("answer, else (transformed):", transformedAnswer);
        setPrescription(transformedAnswer);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="pharmacy-dashboard container">
      <h1>Pharmacy Dashboard</h1>
      <motion.div 
        className="search-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
      <form onSubmit={getPrescriptionfun}>
        {/* <label htmlFor="principal">Enter Principal ID:</label> */}
        <input
            type="text"
            placeholder="Enter Patient ID"
            value={principall}
            id="principal"
            onChange={(e) => setPrincipall(e.target.value)}
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

      <div className="prescriptions-list">
        {prescription && prescription.length > 0 ? (
          prescription.map((item, index) => (
            <motion.div
              className="prescription-details"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="prescription-card">
                <h2>Prescription Details</h2>
                <p>
                  <strong>Notes:</strong> {item.additional_notes}
                </p>
                <p>
                  <strong>Date:</strong> {item.date}
                </p>
                <p>
                  <strong>Diagnosis:</strong> {item.diagnosis}
                </p>
                <p>
                  <strong>Doctor:</strong> {item.doc_nm}
                </p>
                <div className="medicines-list">
                  <h3>Medicines</h3>
                  <ul>
                    {item.medicines.split("\n").map((medicine, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        {medicine}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p>No prescriptions available.</p>
        )}
      </div>
    </div>
  );
};

export default PharmacyDashboard;
