import React, { useEffect } from 'react'
import Carosel from './Carosel'
import ProductList from './ProductList'
import Comment from './Comment'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    const username = localStorage.getItem('username')
    if(!username){
       navigate('/login')
    }
  },[])
  return (
    <>
    <Carosel/>
    <ProductList/>
    <Comment/>
    </>
  )
}

export default Home