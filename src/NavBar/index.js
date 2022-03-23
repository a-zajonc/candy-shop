import styles from './NavBar.module.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

export function NavigationBar() {
    return <div className={styles.navigation}>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={styles.options}>Sklep</Nav.Link>
                    <Nav.Link href="#features" className={styles.options}>O nas</Nav.Link>
                    <Nav.Link href="#pricing" className={styles.options}>Kontakt</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
}