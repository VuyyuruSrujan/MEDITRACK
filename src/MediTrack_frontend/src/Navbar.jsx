import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUserMd, FaUser, FaPills } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/">HealthConnect</Link>
        </motion.div>
        <ul className="nav-links">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/"><FaHome /> Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/doctor"><FaUserMd /> Doctor</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/patient"><FaUser /> Patient</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/pharmacy"><FaPills /> Pharmacy</Link>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;