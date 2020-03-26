import StatCard from './StatCard'
import { toPercentage } from '../utils/toPercentage'
import moment from 'moment'
moment.locale('es')

const WorldStats = ({ data }) => {
  // Traer la data
  return (
    <>
      <h2 className="title">Datos mundiales</h2>
      <section className="content">
        <StatCard title="Confirmados (100%)" value={data.confirmed.value} />
        <StatCard 
          title={`Recuperados (${toPercentage(data.recovered.value, data.confirmed.value)})`}
          value={data.recovered.value} 
        />
        <StatCard 
          title={`Muertes (${toPercentage(data.deaths.value, data.confirmed.value)})`}
          value={data.deaths.value} 
        />
      </section>
      
      <div className="text">
        <span>Última actualización: </span>
        {data.lastUpdate && (
          <>
            <span>{moment(data.lastUpdate).format('DD MMMM - YYYY @ h:mm a')} </span>
            <span>({moment().startOf('hour').fromNow()})</span>
          </>
        )}
      </div>
      <style jsx>{`
        .text {
          color: #ffffff;
          text-align: center;
          font-size: .75rem;
          margin-top: 30px;
        }
        .title {
          color: #ffffff;
          font-size: 1.5rem;
        }
        .content {
          display: grid;
          grid-template-columns: repeat(3, 240px);
          grid-template-rows: 100px;
          justify-content: space-between;
          align-items: center;
        }
        @media screen and (max-width: 768px) {
          .content {
            grid-template-columns: 33.3% 33.3% 33.3%;
          }
          .text {            
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </>
  )
}

export default WorldStats