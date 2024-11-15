import {Component} from 'react'
import Header from '../Header'
import UserSelectionButtons from '../UserSelectionButtons'
import ResultView from '../ResultView'
import './index.css'

class RockPaperScissors extends Component {
  state = {
    userChoose: '',
    opponentChoose: '',
    resultMsg: '',
    score: 0,
    showResult: false,
  }

  onOppinentChoose = () => {
    const opponentChooseList = [
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    ]
    const randomIndex = Math.floor(Math.random() * 3)
    this.setState({opponentChoose: opponentChooseList[randomIndex]}, () => {
      this.onValidSelection()
    })
  }

  onUserChoose = id => {
    this.setState({userChoose: id}, () => {
      this.onOppinentChoose()
    })
  }

  onValidSelection = () => {
    const {userChoose, opponentChoose} = this.state
    console.log(userChoose)
    console.log(opponentChoose)
    if (userChoose === opponentChoose) {
      this.setState({resultMsg: 'IT IS DRAW', showResult: true})
    } else if (
      (userChoose === 'ROCK' && opponentChoose === 'SCISSORS') ||
      (userChoose === 'SCISSORS' && opponentChoose === 'PAPER') ||
      (userChoose === 'PAPER' && opponentChoose === 'ROCK')
    ) {
      this.setState(prevState => ({
        resultMsg: 'YOU WON',
        score: prevState.score + 1,
        showResult: true,
      }))
    } else {
      this.setState(prevState => ({
        resultMsg: 'YOU LOSE',
        score: prevState.score - 1,
        showResult: true,
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({showResult: false})
  }

  render() {
    const {
      score,
      showResult,
      userChoose,
      opponentChoose,
      resultMsg,
    } = this.state
    const {choicesList} = this.props
    return (
      <div className="bg-container">
        <Header score={score} />
        {showResult ? (
          <ResultView
            userChoose={userChoose}
            opponentChoose={opponentChoose}
            resultMsg={resultMsg}
            onClickPlayAgain={this.onClickPlayAgain}
          />
        ) : (
          <ul className="user-buttons-container">
            {choicesList.map(eachButton => (
              <UserSelectionButtons
                key={eachButton.id}
                chooseButton={eachButton}
                onUserChoose={this.onUserChoose}
                testId={eachButton.id.toLowerCase()}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default RockPaperScissors
