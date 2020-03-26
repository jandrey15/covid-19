const Footer = () => {
  return (
    <footer>
      <span className='powered'>Powered by <a href="https://github.com/mathdroid/covid-19-api" target="_blank"> COVID-19 API</a></span>
      <span className='line'> | </span>
      <span className='credits'>Hecho por <a href="https://johnserrano.co/">John Serrano</a></span>
      <style jsx>{`
        footer {
          text-align: center;
          font-size: .75rem;
          color: #ffffff;
          margin-top: 10px;         
        }
        a {
          text-decoration: none;          
          color: #ffffff;
        }
        @media screen and (max-width: 768px) {
          .line { display: none; }
          footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .powered {
            margin-bottom: 10px;
          }
          a {
            text-decoration: underline;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer