import React from 'react'
import { useTransform } from 'framer-motion'

import { useWrapperScroll } from '../Model'

import { Container, Header, Logo, Burger, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />

        <a>Consultoria Online</a>
        <a>Diferencial</a>
        <a>Método</a>
        <a>Planos</a>
        <a>Fale Conosco</a>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with 💜</a>
          </li>
          <li>
            <a href="#">by Guilherme Rodz</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay
