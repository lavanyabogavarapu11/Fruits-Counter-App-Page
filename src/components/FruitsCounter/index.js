// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onClickEatMangoButton = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onClickEatBananaButton = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="fruits-app-bg-container">
        <div className="fruits-container">
          <h1 className="fruits-heading">
            Bob ate <span className="count-text"> {mangoCount} </span> mangoes
            <span className="count-text"> {bananaCount}</span> bananas
          </h1>
          <div className="fruits-image-counter">
            <div className="fruit-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickEatMangoButton}
              >
                Eat Mango
              </button>
            </div>

            <div className="fruit-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
                className="fruit-image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickEatBananaButton}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
