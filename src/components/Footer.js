import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = (props) => {
    return(
        <Navbar className="" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="https://ppqita.com">{props.copyright}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {props.desk}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Footer;