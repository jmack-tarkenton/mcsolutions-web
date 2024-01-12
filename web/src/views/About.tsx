import {Row,Col,Container} from "react-bootstrap";
import LeafletMap from "@/components/LeafletMap.tsx";

const counties = {
  active: [
    'Dawson',
    'Gwinnett',
    'Dade',
    'Greene',
    'Walker',
    'Lumpkin',
    'Franklin',
    'Habersham',

  ],
  inActive: [],
}

const mapLayers=[
  {
    url:"http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/counties_politics_poverty/FeatureServer/0",
    definitionExpression: `STATE='GA' AND COUNTY in (${counties.active.map(county=>`'${county}'`).join(",")})`,
  }
]
const About = () => <Container fluid className="min-vh-100"> <Row>
  <Col>
    <LeafletMap layers={mapLayers}/>
  </Col>
</Row>
</Container>

export default About;