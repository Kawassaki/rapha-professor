import React from 'react'

import { Container, Heading } from './styles'
import RaphaIntro from '../../assets/RaphaIntro.jpg'

const Intro: React.FC = () => {
  return (
    <Container>
      <Heading>
        <div>
          <aside>
            <h1>Raphael Santos</h1>
            <h2>Person Trainer</h2>
            <p>
              Tenho 26 anos, me formei em 2019 no curso de Educação Física, já
              tenho 5 anos e meio de experiência na área.
            </p>
            <p>
              Fiz iniciação científica na Federal e tenho duas matérias de
              mestrado como ouvinte concluídas.
            </p>
            <p>
              As áreas que mais foco são: emagrecimento, qualidade de vida e
              saúde, usando o melhor do HIIT e da musculação.
            </p>
          </aside>
          <img src={RaphaIntro} alt="Rapha" />
        </div>
      </Heading>
    </Container>
  )
}

export default Intro
