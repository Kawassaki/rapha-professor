import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  .colored:nth-child(1) {
    background: #121214;
  }
  .colored:nth-child(2) {
    background: #29292d;
  }
  .colored:nth-child(3) {
    background: #393c41;
  }
  .colored:nth-child(4) {
    background: #45484e;
  }
  .colored:nth-child(5) {
    background: #5c5e62;
  }
  .colored:nth-child(6) {
    background: #686b6f;
  }
  .colored:nth-child(7) {
    background: #717579;
  }
`
export const Spacer = styled.div`
  height: 15vh;
  background: #777d86;
`
