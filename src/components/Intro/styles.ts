import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  background: url('https://fulldisclosurefitness.com/wp-content/uploads/2019/07/dumbbells-at-a-gym.jpg');
  background-repeat: no-repeat;
  background-size: 100% 60%;
  position: relative;
  width: 100%;
  margin-top: 4.2em;
`

export const Heading = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: row-reverse;

  div {
    margin: 6em;
    background-color: ${props => props.theme.colors.graphite};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    transition: all 0.2s ease-out;
    transform: translateY(0px);

    aside {
      width: 20em;
      > h1 {
        font-size: 26px;
      }
      > p {
        font-size: 16px;
      }
    }
    img {
      width: 20em;
    }

    &:hover {
      box-shadow: 0px 4px 8px ${props => props.theme.colors.blueSky};
      transform: translateY(-10px);
    }
    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: -16px;
      right: -16px;
      /* background: ${props => props.theme.colors.blueSky}; */
      height: 32px;
      width: 32px;
      border-radius: 32px;
      transform: scale(2);
      transform-origin: 50% 50%;
      transition: transform 0.15s ease-out;
    }

    &:hover:before {
      transform: scale(2.15);
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 130px;

  > button {
    background: #1a1720;
    color: #fff;
    opacity: 0.8;

    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 13px 40px;
    border-radius: 20px;
    border: none;
    outline: 0;
    cursor: pointer;

    &.white {
      background: #fff;
      color: #1a1720;
      opacity: 0.65;
    }

    & + button {
      margin: 10px 0 0;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 90px;

    > button + button {
      margin: 0 0 0 10px;
    }
  }
`
