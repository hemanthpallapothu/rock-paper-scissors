import './index.css'

const ResultView = props => {
  const {userChoose, opponentChoose, resultMsg, onClickPlayAgain} = props
  const playAgain = () => {
    onClickPlayAgain()
  }
  return (
    <div className="result-view-alinement">
      <div className="result-view">
        <div className="result-view-container">
          <h1 className="you-opponent">YOU</h1>
          <img alt="your choice" className="choose-img" src={userChoose} />
        </div>
        <div className="result-view-container">
          <h1 className="you-opponent">OPPONENT</h1>
          <img
            alt="opponent choice"
            className="choose-img"
            src={opponentChoose}
          />
        </div>
      </div>
      <div className="alinement-container">
        <p className="result-msg">{resultMsg}</p>
        <button type="button" className="play-again-button" onClick={playAgain}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default ResultView
