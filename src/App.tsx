import './App.css';
import './components/Login.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Welcome from './components/BusinessHome';
import Login from './components/Login';
import Activity from './components/Activity';
import Newcard from './components/Newcard';
import Reports from './components/Reports';
import Cardunload from './components/Cardunload';
import Businessloadtransfer from './components/Businessloadtransfer';
import Policymanagement from './components/Policymanagement';
import Administration from './components/Administration';
import Administration1 from './components/Administration1';
import Svndetails from './components/Svndetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/svndetails' element={<Svndetails />} />
        <Route path='/Administration1' element={<Administration1 />} />
        <Route path='/Administration' element={<Administration />} />
        <Route path='/Policymanagement' element={<Policymanagement />} />
        <Route path='/Businessloadtransfer' element={<Businessloadtransfer />} />
        <Route path="/external-transfer" element={<Businessloadtransfer />} />
        <Route path="/B2B" element={<Businessloadtransfer />} />
        <Route path="/ViewTransfer" element={<Businessloadtransfer />} />
        <Route path='/Cardunload' element={<Cardunload />} />
        <Route path='/Reports' element={<Reports />} />
        <Route path='/Newcard' element={<Newcard />} />
        <Route path='/' element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>

    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}