import './index.css'

const GetHistory = props => {
  const {historyData, onDelete} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = historyData
  const onRemove = () => {
    onDelete(id)
  }
  return (
    <li className="history-tab-elements">
      <div className="history-details-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="app-logo" alt="domain logo" />
        <p>{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          onClick={onRemove}
        />
      </button>
    </li>
  )
}

export default GetHistory
