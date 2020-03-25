
const StatCard = ({ value, title = 'Hola mundo' }) =>{
  return (
    <div className='StatCard'>
      <h1 className="value">{value.toLocaleString() || '--' }</h1>
      <h2 className="title">{ title }</h2>
      <style jsx>{`
        .StatCard {
          border-radius: 14px;
          background: #576574;
          box-shadow: inset 17px 17px 10px #505d6b, 
                      inset -17px -17px 10px #5e6d7d;
        }
        .value {
          color: #ffffff;
        }
      `}</style>
    </div>
  )
}

export default StatCard