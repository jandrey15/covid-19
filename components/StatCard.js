
const StatCard = ({ title = '', value = '0' }) => {
  return (
    <div className='StatCard'>
      <h1 className="value">{value.toLocaleString() || '--' }</h1>
      <h2 className="title">{ title }</h2>
      <style jsx>{`
        .StatCard {
          border-radius: 10px;
          box-shadow: 0px 0px 0px hsla(0,0%,100%,0.05),0px 0px 0px rgba(0,0,0,0.5),inset -5px -5px 10px hsla(0,0%,100%,0.05),inset 5px 5px 15px rgba(0,0,0,0.5);
          padding: 1rem;
        }
        .value {
          color: #ffffff;
        }
        h1, h2 {
          margin: 0;
        }
        h2 {
          font-size: 1rem;
          color #10ac84;
          text-transform: uppercase;
        }
        h1 {
          font-size: 1.8rem;
        }
        @media screen and (max-width: 768px) {
          h1 {
            font-size: inherit;
          }
          h2 {
            font-size: .65rem;
          }
        }
      `}</style>
    </div>
  )
}

export default StatCard