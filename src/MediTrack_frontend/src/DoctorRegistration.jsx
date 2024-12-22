import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from './RegistrationForm';
import './Registration.css';
import { MediTrack_backend } from '../../declarations/MediTrack_backend';
import { getGlobalPrincipal } from './Global';
import { Principal } from '@dfinity/principal';
import { useNavigate } from 'react-router-dom';

function DoctorRegistration() {
    var navigate = useNavigate();
   const principall = getGlobalPrincipal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    licenseNumber: '',
    specialization: '',
    experience: ''
  });

  useEffect(() =>{
    async function checkingFun() {
        try {
          var verification = await MediTrack_backend.getDoctordet(Principal.fromText(principall));
          console.log("verification", verification);
    
          if (verification && verification.length > 0) {
            console.log("Verification passed, navigating to /doctor");
            navigate('/doctor');
          } else {
            console.log("Verification failed, staying on current page");
          }
        } catch (error) {
          console.error("Error in checkingFun:", error);
        }
      }
      checkingFun();
  } ,[])

 async function handleSubmit(){
    event.preventDefault();
    console.log('Doctor registration:', formData);
    try {
        var  DoctorRegistration = {
            name:formData.name,
            email:formData.email,
            medical_license_number:formData.licenseNumber,
            specialization:formData.specialization,
            years_of_experience:BigInt(formData.experience),
            role:BigInt(1),
            prin:Principal.fromText(principall)
          };
          console.log("DoctorRegistration , before pushing",DoctorRegistration);
          var answer = await MediTrack_backend.SetDoctor(DoctorRegistration);
          console.log("after pushing", answer);
          if(answer == "OK"){
            navigate('/doctor',{ replace: true });
          }
        
    } catch (error) {
        console.log("error :",error);
    };

    try {
      var UserRole = {
        user_Prin:Principal.fromText(principall),
        role:BigInt(1)
      };
      console.log("user Roel before pushing:",UserRole);
      var pushing = await MediTrack_backend.GetUserRole(UserRole);
      console.log("after pushing",pushing);
    } catch (error) {
      console.log("error :",error);
    }
   
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