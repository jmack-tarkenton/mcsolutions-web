
import NavigationBar from './components/NavigationBar'
import {Row,  Container} from 'react-bootstrap'


import './styles/App.scss'


function App() {

  return (
    <Container fluid>
      <Row>
        <NavigationBar/>
      </Row>

    </Container>
  )
}

export default App
