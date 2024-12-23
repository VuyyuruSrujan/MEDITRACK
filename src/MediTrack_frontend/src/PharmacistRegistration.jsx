import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from './RegistrationForm';
import './Registration.css';
import { getGlobalPrincipal } from './Global';
import { Principal } from '@dfinity/principal';
import { MediTrack_backend } from '../../declarations/MediTrack_backend';
import { useNavigate } from 'react-router-dom';

function PharmacistRegistration() {
    var navigate = useNavigate();
    const principall = getGlobalPrincipal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    licenseNumber: '',
    pharmacyName: '',
    pharmacyAddress: ''
  });

  useEffect(() => {
    async function verify() {
      try {
        if (!principall) {
          console.error("Principal ID is missing");
          return;
        }
  
        // Fetching patient details from the backend
        const check = await MediTrack_backend.getPharmacistdetails(Principal.fromText(principall));
        console.log("Pharmacy Details:", check);
  
        // Check if the principal exists in the returned array
        const isVerified = check.some(
          (record) => record.prin && record.prin.toText() === principall
        );
  
        if (isVerified) {
          console.log("Verification passed, navigating to /patient");
          navigate('/pharmacy');
        } else {
          console.log("Verification failed, staying on current page");
        }
      } catch (error) {
        console.error("Error in verify:", error);
      }
    }
  
    verify();
  }, [principall]); // Add principall as a dependency if it can change
  

  async function handleSubmit(){
    event.preventDefault();
    console.log('Pharmacist registration:', formData);
    try {
         var PharmacistRegistration = {
            name :formData.name,
            email:formData.email,
            pharmacy_license_number : formData.licenseNumber,
            pharmacy_name:formData.pharmacyName,
            pharmacy_address:formData.pharmacyAddress,
            prin:Principal.fromText(principall)
          };
          console.log("before pushing", PharmacistRegistration);
          var answer = await MediTrack_backend.getPharmacistRegistartion(PharmacistRegistration);
          console.log("after pushing",answer);
          if(answer == "OK"){
            navigate('/pharmacy', {replace:true});
          }
        
    } catch (error) {
        console.log('error:',error);
    }

    try {
        var UserRole = {
          user_Prin:Principal.fromText(principall),
          role:BigInt(3)
        };
        console.log("user Roel before pushing:",UserRole);
        var pushing = await MediTrack_backend.GetUserRole(UserRole);
        conaoel.log("after pushing",pushing);
      } catch (error) {
        console.log("error :",error);
      }
  };

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
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