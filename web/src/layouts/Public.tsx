import NavigationBar from '@/components/NavigationBar'
import Footer from "@/components/Footer.tsx";
import {Outlet} from "react-router-dom";
import {Container} from 'react-bootstrap'


// import '@/styles/App.scss'


function PublicLayout() {

  return (<>
      <NavigationBar/>
      <Container fluid>

        <Outlet/>
      </Container>
      <Footer/>
    </>
  )
}

export default PublicLayout;
