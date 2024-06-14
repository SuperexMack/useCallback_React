import {useMemo , useState , useEffect, useCallback, memo} from 'react';

import './App.css';

function App() {
  
  const [jobIncome , setJobIncome] = useState({income:0});
  const [freelancingIncome , setFreelancing] = useState({gig:0});
  const [totalData , setTotalData] = useState({revenue:0});

  console.log("re-render")

  useEffect(()=>{
    setJobIncome({income:100})
 
},[])

  useEffect(()=>{
    setFreelancing({gig:100})
},[])


 useEffect(()=>{setInterval(()=>{
  setTotalData({revenue:900})
 },7000)
 },[])




 const change = useMemo(()=>{
   console.log("first")
   return totalData.revenue
 },[totalData])

 const cryptoChange = useCallback(()=>{
  return freelancingIncome.gig + jobIncome.income
 },[freelancingIncome,jobIncome])
 
  const incomeTax = (jobIncome.income + freelancingIncome.gig)*0.3

 return(
  <>
   <h1>Your total income is {incomeTax}</h1>
   <h1>So my whole data is  : {change}</h1>
   <div>
    <Mycrypto cryptoChange={cryptoChange}></Mycrypto>
   </div>
  </>
 )
}


const Mycrypto = memo(({cryptoChange})=>{
  console.log("changes inside function")
  return(
    <>
    <h1>your returns are : {cryptoChange}</h1>
    </>
  )
})


export default App;
