import Header from '../../components/Header'
import RestaurantList from '../../containers/RestaurantList'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <RestaurantList />
      </div>
      <Footer />
    </>
  )
}

export default Home
