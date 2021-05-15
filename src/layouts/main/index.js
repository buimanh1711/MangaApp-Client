import Footer from "./Footer"
import Header from "./Header"

const MainLayout = ({ children }) => {
  return (
    <div id='main-layout'>
      <Header />
      <div className='main-content'>
        <div className='main-content-container'>
          { children }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout