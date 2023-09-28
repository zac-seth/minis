import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`

export const AppLogo = styled.img`
  height: 12rem;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 20s linear;
  }
`

export const AppHeader = styled.header`
  flex: 0 0 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`

export const Calculators = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
