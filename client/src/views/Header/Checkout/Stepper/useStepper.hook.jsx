import React from 'react'

// UTILS
import instance from '../../../../utils/axiosconfig';

const steps = ["Shipping", "Delivery", "Payment",];

export default function useStepper() {
  const [regiondata,setRegionData] = React.useState([])
  React.useEffect(()=>{
      const fetchAllRegData = async() =>{
          await instance.get('/checkout/allReg')
          .then((res)=>{
              setRegionData(res.data)
          })
          .catch((err)=>{
              console.log(err);
          })
      }
      fetchAllRegData()
  },[])

  return{
    steps,
    regiondata,
  }
}
