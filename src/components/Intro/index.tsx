import React from 'react'

import { Container, Heading } from './styles'
import RaphaIntro from '../../assets/RaphaIntro.jpg'

const Intro: React.FC = () => {
  return (
    <Container>
      <Heading>
        <div>
          <aside>
            <h1>Rapahel Santos</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
            </p>
          </aside>
          <img src={RaphaIntro} alt="Rapha" />
        </div>
      </Heading>
    </Container>
  )
}

export default Intro
