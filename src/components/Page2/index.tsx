import React from 'react'

import { Container, Heading } from './styles'
import RaphaFoto from '../../assets/Rapha2.jpeg'

const Intro: React.FC = () => {
  return (
    <Container>
      <Heading>
        <div>
          <aside>
            <h1>Página 2, aqui pode ter qualquer coisa</h1>
            {/* <p>
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
            </p> */}
          </aside>
          <img src={RaphaFoto} alt="Rapha" />
        </div>
        <div>
          <aside>
            <h1>Página 2, aqui pode ter qualquer coisa</h1>
            {/* <p>
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
            </p> */}
          </aside>
          <img src={RaphaFoto} alt="Rapha" />
        </div>
        <div>
          <aside>
            <h1>Página 2, aqui pode ter qualquer coisa</h1>
            {/* <p>
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
            </p> */}
          </aside>
          <img src={RaphaFoto} alt="Rapha" />
        </div>
      </Heading>
    </Container>
  )
}

export default Intro
