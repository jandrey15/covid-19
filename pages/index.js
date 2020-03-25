// You can use any data fetching library
import fetch from 'node-fetch'
import { config } from '../config'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StatCard from '../components/StatCard'

const Home = ({ posts }) => {
  // Render posts...
  console.log(posts)
  const value = posts.confirmed.value.toLocaleString()
  return (
    <section id='Home'>
      <Header />
      <h3>Hola blog</h3>
      <p>{value}</p>
      <StatCard value={value} />
      <Footer />
    </section>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  const url = config.apiUrl
  // Call an external API endpoint to get posts
  const res = await fetch(url)
  const posts = await res.json()
  console.log(posts)

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Home