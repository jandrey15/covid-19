import fetch from 'node-fetch'
import { config } from '../config'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WorldStats from '../components/WorldStats'
// import CountryStats from '../components/CountryStats';
import dynamic from 'next/dynamic'

const CountryStats  = dynamic(
  () => import('../components/CountryStats'),
  { ssr: false, loading: () => <p className='loading__map'>Cargando...</p> },
)

const Home = ({ data }) => {
  // const value = posts.confirmed.value.toLocaleString()
  return (
    <section id='Home'>
      <Header />
      <CountryStats />
      <WorldStats data={data} />
      <Footer />
    </section>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  const url = config.apiUrl
  // Call an external API endpoint to get posts
  const res = await fetch(url)
  const data = await res.json()
  // console.log(data)

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}

export default Home