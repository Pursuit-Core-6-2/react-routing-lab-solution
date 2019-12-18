import React, { Component } from 'react'
import axios from 'axios'

class RandomDog extends Component {
  constructor() {
    super()
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    this.getDogs();
  }

  componentDidUpdate(prevProps) {
    console.log("Component did update")
    console.log('prevProps', prevProps.match)
    console.log('props', this.props.match)
    if (prevProps.match.params.num !== this.props.match.params.num) {
      this.getDogs()
    }
  }


  getDogs = async () => {
    let numOfPics = this.props.match.params.num
    const dogApiUrl = `https://dog.ceo/api/breeds/image/random/${numOfPics}`
    try {
      let { data } = await axios.get(dogApiUrl)
      this.setState({
        urls: data.message
      })
    } catch (err) {
      console.log('Error =>', err)
    }
  }
  render() {
    console.log('render', this.state.urls)
    return (
      <div>
        <h1>Random Dogs</h1>
        {
          this.state.urls.map(url => {
            return <img src={url} alt='dog' key={url} />
          })
        }
      </div >
    )
  }
}
export default RandomDog;
