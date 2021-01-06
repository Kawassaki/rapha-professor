import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container, Spacer } from '../styles/pages/Home'
import { ModelSection, ModelsWrapper } from '../components/Model'
import Intro from '../components/Intro'
import UniqueOverlay from '../components/UniqueOverlay'

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
            overlayNode={<div />}
          />
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Home
