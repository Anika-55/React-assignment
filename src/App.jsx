import { Suspense } from 'react'
import './App.css'
import CountBox from './components/CountBox/CountBox'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

const fetchIssues = async () => {
  const res = await fetch("/data.json");
  return res.json();

}

function App({selectedTicket}) {
  const fetchPromise = fetchIssues();
  // const [selectedTicket, setSelectedTicket] = useState(Issues);
  // console.log(Issues)


  
  return (
    <>
       <Navbar></Navbar>
      <CountBox selectedTicket={selectedTicket}></CountBox>
      
      <Suspense fallback={<h3>Loading....</h3>}>
    <CustomerTickets   fetchPromise={fetchPromise} ></CustomerTickets>
      </Suspense>
       
      <Footer></Footer>
   
    </>
  )
}

export default App
