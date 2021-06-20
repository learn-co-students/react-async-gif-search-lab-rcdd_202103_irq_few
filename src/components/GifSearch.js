import React, { Component } from 'react'

class GifSearch extends Component {

  constructor() {
    super()
    this.state = {
      query: ''
    }
  }
  return (
    <form onSubmit={e => {
        e.preventDefault()
        this.props.searchGifs(this.state.query)
      }}>
      <input
        type='text'
        onChange={(e) => {
          this.setState({query: e.target.value})
        }}
      />
    <input type='submit' />
    </form>
  )
}

export default GifSearch