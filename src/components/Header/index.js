import './index.css'

const Header = props => {
  const {score} = props
  return (
    <div className="header-bg-container ">
      <div className="header-container">
        <div>
          <h1 className="header-item">
            ROCK <br />
            PAPER <br />
            SCISSORS
          </h1>
        </div>
        <div className="score-card-container">
          <div>
            <p className="score-text">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
