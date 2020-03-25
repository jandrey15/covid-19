const Card = ({ title, children }) => {
  return (
    <div className="card">
      {children}
      <h2 className="text">{ title }</h2>
    </div>
  )
}

export default Card