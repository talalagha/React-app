import AlertManager from "./components/alert/AlertManager";
import AlertExample from "./components/alert/AlertExample";
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  return (
    <div className="App">
      <AlertManager />

      <div style={{textAlign: 'center'}}>
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Reusable Alert</h1>

        <AlertExample />

      </div>
    </div>
  )
}

export default App
