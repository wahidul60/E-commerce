import React from 'react'
import Container from '../Component/Container'
import { useSelector } from 'react-redux'

const About = () => {
  const data1 = useSelector((state)=>state.counter.value)
  return (
    <Container>
      <div>
      <p>this is : {data1}</p>    
    </div>
    </Container>
  )
}

export default About
About