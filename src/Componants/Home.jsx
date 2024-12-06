import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Link to='/'> home</Link>
    <br />
    <Link to='/product'> product</Link>
    </>
  )
}

export default Home