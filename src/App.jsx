import Navbar from './components/Navbar'
import HeroText from './components/HeroText'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <div className='flex flex-col justify-between object-contain bg-no-repeat h-screen w-full px-10 py-5'>
        <Navbar/>
        <HeroText/>

      </div>

      <div className='bg-green-600 h-screen w-full bg-[url(https://images.unsplash.com/vector-1759412736247-427d9a325079?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1760)] bg-cover bg-position-[center_top_-13rem]'></div>
      <Footer/>
    </div>
  )
}

export default App