import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import './styles.css';

export const NavigationBar = () =>{


    return(
      <>
      <Navbar className="navbar"  variant="dark">
        <Container>
          <Link className="navbar-brand" href="/search">Travel Buddy</Link>
          <Nav className="me-auto">
            <Link 
            to="/search"
            className={window.location.pathname === "/search"
            ? "nav-link activated" 
            : "nav-link"
            }
            >Search</Link>
            <Link 
            to="/info"
            className={window.location.pathname === "/info"
            ? "nav-link activated"
            :"nav-link"
            }
            >Info</Link>
            <Link 
            to="/saved"
            className={window.location.pathname === "/saved" 
            ? "nav-link activated"
            : "nav-link"}
            >Saved</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
      
    );
}