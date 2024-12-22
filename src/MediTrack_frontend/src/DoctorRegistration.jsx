import { useState } from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from './RegistrationForm';
import './Registration.css';

function DoctorRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    licenseNumber: '',
    specialization: '',
    experience: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Doctor registration:', formData);
  };

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'licenseNumber', label: 'Medical License Number', type: 'text' },
    { name: 'specialization', label: 'Specialization', type: 'text' },
    { name: 'experience', label: 'Years of Experience', type: 'number' }
  ];

  return (
    <div className="registration-page container">
      <motion.h1 
        className="neon-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Doctor Registration
      </motion.h1>
      <RegistrationForm 
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        userType="doctor"
      />
    </div>
  );
}

export default DoctorRegistration;