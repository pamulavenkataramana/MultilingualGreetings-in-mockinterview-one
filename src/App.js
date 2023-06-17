import './App.css'
import {Component} from 'react'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    image: languageGreetingsList[0].imageUrl,
    altText: languageGreetingsList[0].imageAltText,
    id: languageGreetingsList[0].id,
  }

  onClickButton = (image, altText, id) => {
    this.setState({image, altText, id})
  }

  classNameChange = () => {
    const {id} = this.state

    switch (id) {
      case languageGreetingsList[0].id:
        return 'css-english'

      case languageGreetingsList[1].id:
        return 'css-tamil'

      case languageGreetingsList[2].id:
        return 'css-telugu'

      default:
        return null
    }
  }

  render() {
    const {image, altText, id} = this.state
    const returnClass = this.classNameChange()
    console.log(returnClass)
    return (
      <div className="css-bg-container">
        <h1>Multilingual Greetings</h1>
        <ul className="css-ul-container">
          {languageGreetingsList.map(eachItem => (
            <li key={eachItem.id}>
              <button
                type="button"
                onClick={() =>
                  this.onClickButton(
                    eachItem.imageUrl,
                    eachItem.imageAltText,
                    eachItem.id,
                  )
                }
                className={`${
                  eachItem.id === id ? 'css-Active' : ''
                } css-button-itself`}
              >
                {eachItem.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <div className="css-image-container">
          <img src={image} alt={altText} className="css-image-itself" />
        </div>
      </div>
    )
  }
}

export default App
