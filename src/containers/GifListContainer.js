import React, { Component } from 'react'

class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
    }
  }

  searchGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.slice(0, 3)
        })
      })
  }

  return (
    <div>
      <GifList gifs={this.state.gifs} />
      <GifSearch submitHandler={this.state.searchGifs} />
    </div>
  )
}

export default GifListContainer