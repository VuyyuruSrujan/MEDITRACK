import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <motion.div 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.h1 
            className="neon-text"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to HealthConnect
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Connecting Doctors, Patients, and Pharmacies for Better Healthcare
          </motion.p>
        </div>
      </motion.div>

      <div className="features container">
        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <img src="/doctor.jpg" alt="Doctor" />
          <h2>For Doctors</h2>
          <p>Manage patient records and prescriptions efficiently</p>
          <Link to="/register/doctor" className="btn">Register as Doctor</Link>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <img src="/patient.jpg" alt="Patient" />
          <h2>For Patients</h2>
          <p>Access your medical history and prescriptions anytime</p>
          <Link to="/register/patient" className="btn">Register as Patient</Link>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <img src="/pharmacy.jpg" alt="Pharmacy" />
          <h2>For Pharmacies</h2>
          <p>View verified prescriptions and serve patients better</p>
          <Link to="/register/pharmacist" className="btn">Register as Pharmacist</Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;