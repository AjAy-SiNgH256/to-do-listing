import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './header.module.css';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className={`${styles.example} navbar-container`}>
                <Navbar.Brand Link="/" className={`${styles.logo}`}>TO-DO APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Link to="/" className={`${styles.navbar_link}`}><Nav>Home</Nav></Link>
                    <Link to="/summary" className={`${styles.navbar_link}`}><Nav>Summary</Nav></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}