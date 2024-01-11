import {Row, Col, Container, Image} from 'react-bootstrap';
import logoAlt from '@/assets/logo_alt.png';
import {ReactElement} from "react";


// interface LandingItem {
//   title: string;
//   description: string;
//   image: string;
// }
//
// const landingItems: LandingItem[] = [
//   {
//     title: "Appraisals",
//     description: "Experts in all things Mass Appraisal",
//     image: ""
//   },
//   {
//     title: "Analytics",
//     description: "Let us help you make sense of your data",
//     image: ""
//   },
//   {
//     title: "GIS",
//     description: "We can help you get the most out of your GIS",
//     image: ""
//   }
// ];
//
// const ItemBox = (item: LandingItem, index: number) => <Col key={index} className="border border-light p-3">
//   <h3>{item.title}</h3>
//   <br/>
//   <p>{item.description}</p>
// </Col>
// const ItemBoxes = (props: { items: LandingItem[] }) => <Row className="bg-dark text-light">
//   {props.items.map(ItemBox)}
// </Row>

// const Landing=()=><Row>
//   <Col className="mt-3">
//     <Container>
//       <ItemBoxes items={landingItems}/>
//     </Container>
//   </Col>
// </Row>
const Section = (props: { children: ReactElement }) => <Row className="bg-dark text-light p-0">
  {props.children}
</Row>
const SectionHeader = (props: { title: string, description: string }) => <Row>
  <Col>
    <h3>{props.title}</h3>
    <br/>
    <p>{props.description}</p>
  </Col>
</Row>
const Appraisals = () => <>
  <Col xs={6} className="text-center my-auto">
    <SectionHeader title="Appraisals" description="Experts in all things Mass Appraisal"/>
  </Col>
  <Col xs={6} className="text-center p-0">
    <Image className="landing-img" src="/assets/site-visits/inspection.jpg"/>
  </Col>
</>
const Analytics = () => <>
  <Col xs={6} className="text-center p-0">
    <Image className="landing-img" src="/assets/analytics.jpg"/>
  </Col>
  <Col xs={6} className="text-center my-auto">
    <SectionHeader title="Analytics" description="Let us help you make sense of your data"/>
  </Col>
</>

const GIS= () => <>
  <Col xs={6} className="text-center my-auto">
    <SectionHeader title="GIS" description="We can help you get the most out of your GIS"/>
  </Col>
  <Col xs={6} className="text-center p-0">
    <Image className="landing-img" src="/assets/gis.jpg"/>
  </Col>
</>



const Landing = () => <Container fluid className="p-0">
  <Image src={logoAlt} className="logo-backdrop"/>
  <Section>
    <Appraisals/>
  </Section>
  <Section>
    <Analytics/>
  </Section>
  <Section>
    <GIS/>
  </Section>
</Container>

export default Landing;