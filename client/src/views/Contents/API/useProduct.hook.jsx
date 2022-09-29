import axios from 'axios'
import React from 'react'
import { useState } from 'react'
export const useProducts = () =>{
    const [categoryData,setCategoryData] = React.useState([])
    // React.useEffect(()=>{
    //     const fetchCategories = async() =>{
    //         await axios.get('http://localhost:8000/api/categories')
    //         .then((res)=>{
    //             setCategoryData(res.data)
    //             setIsLoading(false)
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         })
    //     }
    //     fetchCategories()
    // },[])

    return{
        categoryData,
    }
}
