import {Stack, Row, Navbar} from "react-bootstrap";
import {SocialIcon} from "react-social-icons";


const links = ["mailto:terry.mccormick@mccormicksolutions.com", "https://www.facebook.com/McCormick-Solutions-114161913327290/", "https://www.instagram.com/mccormicksolutions/", "https://www.linkedin.com/company/mccormick-solutions/"];
const linkIcon = (link: string, i: number) => <SocialIcon key={i} bgColor={i === 0 ? 'green' : undefined}
                                                          target="_blank"
                                                          className="soci" url={link} style={{height: 40, width: 40}}/>

// const Footer = () => {
//   return (
//     <Row  id="footer" className="bg-light">
//       <Stack direction="horizontal" gap={4}>
//         <div className="ms-auto"/>
//         {links.map(linkIcon)}
//         <div className="ms-auto"/>
//       </Stack>
//     </Row>)
// }

const Footer = () => <Navbar  bg="light" variant="light" sticky="bottom">
  <div className="w-100">
    <Stack direction="horizontal" gap={4}>
      <div className="ms-auto"/>
      {links.map(linkIcon)}
      <div className="ms-auto"/>
    </Stack>
  </div>
</Navbar>

export default Footer;