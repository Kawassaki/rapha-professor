import React from 'react'
import { useTransform } from 'framer-motion'

import { useWrapperScroll } from '../Model'

import { Container, Header, Burger, Footer } from './styles'
import logo from '../../assets/RaphaLogo.png'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <img src={logo} />
        <div>
          <a>Menu 1</a>
          <a>Menu 2</a>
          <a>Menu 3</a>
          <a>Menu 4</a>
        </div>
      </Header>

      <Footer style={{ opacity }}></Footer>
    </Container>
  )
}

export default UniqueOverlay
