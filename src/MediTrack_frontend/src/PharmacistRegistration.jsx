import { useState } from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from './RegistrationForm';
import './Registration.css';

function PharmacistRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    licenseNumber: '',
    pharmacyName: '',
    pharmacyAddress: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Pharmacist registration:', formData);
  };

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'licenseNumber', label: 'Pharmacy License Number', type: 'text' },
    { name: 'pharmacyName', label: 'Pharmacy Name', type: 'text' },
    { name: 'pharmacyAddress', label: 'Pharmacy Address', type: 'textarea' }
  ];

  return (
    <div className="registration-page container">
      <motion.h1 
        className="neon-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Pharmacist Registration
      </motion.h1>
      <RegistrationForm 
        fields={fields}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        userType="pharmacist"
      />
    </div>
  );
}

export default PharmacistRegistration;