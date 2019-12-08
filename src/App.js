import React from 'react';
import './App.css'

import TopBar from './Components/TopBar'
import RecentDonations from './Components/RecentDonations'
import Progress from './Components/Progress'
import DonationForm from './Components/DonationForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      raisedAmount: 0,
      goalAmount: 5000,
      donations: [],
      donationAmount: 5,
      donorName: '',
      donationCaption: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      donationCaption,
      donationAmount,
      donorName,
      donations,
      raisedAmount
    } = this.state

    // Making a copy of the donations array with the 
    // spread operator.
    let newDonationsCopy = [...donations];

    newDonationsCopy.push({
      name: donorName,
      amount: donationAmount,
      caption: donationCaption
    })

    this.setState({
      donations: newDonationsCopy,
      raisedAmount: raisedAmount + parseInt(donationAmount),

      donationAmount: 5,
      donorName: '',
      donationCaption: ''
    })
  }

  handleDonationAmount = (e) => {
    this.setState({
      donationAmount: e.target.value
    })
  }

  handleDonationCaption = (e) => {
    this.setState({
      donationCaption: e.target.value
    })
  }

  handleDonorName = (e) => {
    this.setState({
      donorName: e.target.value
    })
  }

  render() {
    const {
      raisedAmount,
      goalAmount,
      donationAmount,
      donorName,
      donationCaption,
      donations
    } = this.state

    return (
      <div className="App">
        <TopBar />
        <RecentDonations
          donations={donations}
        />
        <Progress
          raisedAmount={raisedAmount}
          goalAmount={goalAmount}
        />
        <DonationForm
          donationAmount={donationAmount}
          handleDonationAmount={this.handleDonationAmount}

          donorName={donorName}
          handleDonorName={this.handleDonorName}

          donationCaption={donationCaption}
          handleDonationCaption={this.handleDonationCaption}

          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }

}
export default App;
