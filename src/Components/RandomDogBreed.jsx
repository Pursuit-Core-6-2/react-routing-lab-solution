import React, { Component } from 'react'
import axios from 'axios'

class RandomDogBreed extends Component {
  constructor() {
    super()
    this.state = {
      url: ''
    }
  }

  async componentDidMount() {
    const { breed } = this.props.match.params;
    const dogApiUrl = `https://dog.ceo/api/breed/${breed}/images/random`
    try {
      let { data } = await axios.get(dogApiUrl)
      this.setState({
        url: data.message
      })
    } catch (err) {
      console.log('Error =>', err)
    }
  }

  render() {
    return (
      <div>
        <h1>Random Dog by Breed</h1>
        <img src={this.state.url} alt='dog' />
      </div >
    )
  }
}
export default RandomDogBreed;
