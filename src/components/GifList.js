import React, { Component } from 'react'

class GifList extends Component {

  return (
    <ul>
      {
        this.props.gifs.map(gif => {
          return (
            <li>
              <img src={gif.images.original.url}/>
            </li>
          )
        )}
      }
    </ul>
  )
}

export default GifList