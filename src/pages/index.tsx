import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container, Spacer } from '../styles/pages/Home'
import { ModelSection, ModelsWrapper } from '../components/Model'
import Intro from '../components/Intro'
import UniqueOverlay from '../components/UniqueOverlay'
import Page2 from '../components/Page2'

const Home: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
            key="firstSection"
            className="colored"
            modelName="FirstSection"
            overlayNode={<Intro />}
          />
          <ModelSection
            key="firstSection"
            className="colored"
            modelName="FirstSection"
            overlayNode={<Page2 />}
          />
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Home
