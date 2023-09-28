import { AppContainer, AppHeader, AppLogo, Calculators } from './App.style'
import logo from './logo.svg'
import { CalculatorV1 } from './v1'

export const App = () => (
  <AppContainer>
    <AppHeader>
      <AppLogo src={logo} className="App-logo" alt="logo" />
    </AppHeader>
    <Calculators>
      <CalculatorV1 />
    </Calculators>
  </AppContainer>
);
