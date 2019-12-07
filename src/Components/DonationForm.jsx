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
  // handleInput thanks to the fact that the inputs have a name attribute that
  // matches the state property name which we use here as a computed property
  // name

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

        </form>
      </div>
    )
  }
}
export default DonationForm;
