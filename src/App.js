import React from 'react';
import './App.css'

import TopBar from './Components/TopBar'
import RecentDonations from './Components/RecentDonations'
import Progress from './Components/Progress'
import DonationForm from './Components/DonationForm'

function App() {
  return (
    <div className="App">
      <TopBar />
      <RecentDonations />
      <Progress />
      <DonationForm />
    </div>
  );
}

export default App;
