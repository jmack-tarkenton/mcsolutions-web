import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import { Row, Col, Container } from 'react-bootstrap'
import reactLogo from './assets1/react.svg'
import McCormickLogo from './assets/logo.png'
import viteLogo from '/vite.svg'
import './styles/App.scss'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container fluid>
      <Row>
        <NavigationBar />
      </Row>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={McCormickLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={McCormickLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Container>
  )
}

export default App
