import "./App.css";
import { LandingPage } from "./components/LandingPage";
import Page from "./components/Page";
const landingPage = false;
function App() {
  return <>{landingPage ? <LandingPage /> : <Page />}</>;
}

export default App;
