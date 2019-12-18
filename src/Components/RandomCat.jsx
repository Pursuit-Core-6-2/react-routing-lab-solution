import React, { Component } from 'react'
import axios from 'axios'

class RandomCat extends Component {
  constructor() {
    super()
    this.state = {
      cats: []
    }
  }

  async componentDidMount() {
    this.getCats();
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps)
    console.log('props', this.props);
    if (prevProps.match.params !== this.props.match.params) {
      this.getCats();
      console.log('---- UPDATED -----')
    }
  }

  getCats = async () => {
    const numOfCats = this.props.match.params.num;
    let catApiUrl = "https://api.thecatapi.com/v1/images/search"

    if (numOfCats) {
      catApiUrl += `?limit=${numOfCats}`
    }

    try {
      let { data } = await axios.get(catApiUrl)
      this.setState({
        cats: data
      })
    } catch (err) {
      console.log('Error =>', err)
    }
  }



  render() {
    return (
      <div>
        <h1>Random Cat</h1>
        {
          this.state.cats.map(cat => {
            return (
              <div className="img-container" >
                <img src={cat.url} alt='cat' key={cat.url} />
              </div>
            )
          })
        }
      </div >
    )
  }
}
export default RandomCat;
