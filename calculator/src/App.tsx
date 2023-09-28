import { AppContainer, AppHeader, AppLogo } from './App.style'
import logo from './logo.svg'

export const App = () => (
  <AppContainer>
    <AppHeader>
      <AppLogo src={logo} className="App-logo" alt="logo" />
    </AppHeader>
  </AppContainer>
);
