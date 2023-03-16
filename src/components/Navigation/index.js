import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 

export const NavigationBar = () =>{


    return(
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" href="/">TravelHopes</Link>
          <Nav className="me-auto">
            <Link 
            to="/search"
            className={window.location.pathname === "/search"
            ? "nav-link active" 
            : "nav-link"
            }
            >Search</Link>
            <Link 
            to="/info"
            className={window.location.pathname === "/info"
            ? "nav-link active"
            :"nav-link"
            }
            >Info</Link>
            <Link 
            to="/saved"
            className={window.location.pathname === "/saved" 
            ? "nav-link active"
            : "nav-link"}
            >Saved</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
      
    )
}