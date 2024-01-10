import NavigationBar from './components/NavigationBar'
import Footer from "./components/Footer.tsx";
import {Row, Container} from 'react-bootstrap'


import './styles/App.scss'


function App() {

  return (
    <Container fluid>
      <Row>
        <NavigationBar/>
      </Row>
      <Footer/>
    </Container>
  )
}

export default App
