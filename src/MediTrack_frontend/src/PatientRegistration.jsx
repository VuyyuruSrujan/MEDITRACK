import { useState } from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from './RegistrationForm';
import './Registration.css';

function PatientRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    bloodGroup: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Patient registration:', formData);
  };

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
    { name: 'bloodGroup', label: 'Blood Group', type: 'text' },
    { name: 'address', label: 'Address', type: 'textarea' }
  ];

  return (
    <div className="registration-page container">
      <motion.h1 
        className="neon-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Patient Registration
      </motion.h1>
      <RegistrationForm 
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        userType="patient"
      />
    </div>
  );
}

export default PatientRegistration;