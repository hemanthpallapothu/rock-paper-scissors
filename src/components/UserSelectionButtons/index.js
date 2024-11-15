import './index.css'

const UserSelectionButtons = props => {
  const {chooseButton, onUserChoose, testId} = props
  const {id, imageUrl} = chooseButton

  const userChoose = () => {
    onUserChoose(imageUrl)
  }

  return (
    <li>
      <button
        data-testid={`${testId}Button`}
        type="button"
        className="button"
        onClick={userChoose}
      >
        <img alt={id} className="button-img" src={imageUrl} />
      </button>
    </li>
  )
}
export default UserSelectionButtons
