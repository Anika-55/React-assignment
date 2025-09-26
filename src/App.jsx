import { Suspense, useState } from 'react'
import './App.css'
import CountBox from './components/CountBox/CountBox'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

const fetchIssues = async () => {
  const res = await fetch("/data.json");
  return res.json();

}

function App() {
  const fetchPromise = fetchIssues();
    const [inProgressCount, setInProgressCount] = useState(0);
    const [resolvedCount, setResolvedCount] = useState(0);
  
  return (
    <>
      <Navbar></Navbar>
      <CountBox inProgress={inProgressCount} resolved={resolvedCount}></CountBox>
      
      <Suspense fallback={<h3>loading...</h3>}>
    <CustomerTickets setInProgress={setInProgressCount} setResolved={setResolvedCount}  fetchPromise={fetchPromise} ></CustomerTickets>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
