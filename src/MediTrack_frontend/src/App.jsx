import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import DoctorDashboard from './DoctorDashboard';
import PatientDashboard from './PatientDashboard';
import PharmacyDashboard from './PharmacyDashboard';
import DoctorRegistration from './DoctorRegistration';
import PatientRegistration from './PatientRegistration';
import PharmacistRegistration from './PharmacistRegistration';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/pharmacy" element={<PharmacyDashboard />} />
          <Route path="/register/doctor" element={<DoctorRegistration />} />
          <Route path="/register/patient" element={<PatientRegistration />} />
          <Route path="/register/pharmacist" element={<PharmacistRegistration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;