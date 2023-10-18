import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdInsightsTable from './components/AdInsightsTable';
import CustomTable from './components/customTable';
import CreateAdForm from './components/CreateAdForm';
import CreateAdsPage from './components/CreateAdsPage';
import AdCreation from  './components/AdCreation';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<AdInsightsTable />} />
          <Route path="/customtable" element={<CustomTable />} />
          <Route path="/create-ads" element={<CreateAdsPage />} />
          <Route path="/ad-creation" element={<AdCreation />} />
          <Route path="/create-ad-form" element={<CreateAdForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
