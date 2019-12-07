import React from 'react';

class DonationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      caption: '',
      amount: '5'
    }
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleCaption = (event) => {
    this.setState({
      caption: event.target.value
    })
  }

  handleAmount = (event) => {
    this.setState({
      amount: event.target.value
    })
  }

  // handleName, handleCaption & handleAmount can be replaced by (abstracted)
  // handleInput. We will just need to use handleInput as the OnChange event
  // listener for all our inputs.
  // This is possible thanks to the fact that the inputs have a 
  // name attribute that matches the state property name which we then use as
  // a computed property name to set the state. 

  // handleInput = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  render() {
    const { name, caption, amount } = this.state;
    return (
      <div className='donation-form section'>
        <form>
          <label htmlFor='name'>Name: </label>
          <input
            id='name'
            name='name'
            type='text'
            onChange={this.handleName}
            value={name}
          />

          <label htmlFor='caption'>Caption: </label>
          <input
            id='caption'
            name='caption'
            type='text'
            onChange={this.handleCaption}
            value={caption}
          />

          <label htmlFor='amount'>Amount: </label>
          <input
            id='amount'
            name='amount'
            type='range'
            min="0"
            max="1000"
            onChange={this.handleAmount}
            value={amount}
          />
          <span>{amount}</span>

          <button>Donate</button>
        </form>
      </div>
    )
  }
}
export default DonationForm;
