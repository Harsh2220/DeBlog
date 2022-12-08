import Sidebar from '../components/Sidebar'
import React from 'react'
import { Container } from '@chakra-ui/react'

function dashboard() {
  return (
  <Container maxW='container.xl'>
     <Sidebar />
  </Container>
  )
}

export default dashboard