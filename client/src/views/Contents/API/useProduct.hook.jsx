import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import instance from "../../../utils/axiosconfig";
export const useProducts = () =>{
    const [categoryData,setCategoryData] = useState([])
    React.useEffect(()=>{
        const fetchAllData = async() =>{
            await axios.get('http://localhost:8000/api/allData')
            .then((res)=>{
                setCategoryData(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        fetchAllData()
    },[])

    return{
        categoryData,
    }
}
