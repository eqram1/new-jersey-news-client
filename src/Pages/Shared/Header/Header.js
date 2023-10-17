import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            // collect from firebase google last logout
            .then(() => {

            })
            .catch((error) => {

            });
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-3">
            <Container>
                <Navbar.Brand><Link to='/'>dragonNews-1</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Brand><Link to='/'>dragonNews-2</Link></Navbar.Brand>
                        <Navbar.Brand><Link to='/'>dragonNews-3</Link></Navbar.Brand>
                        <Navbar.Brand><Link to='/'>dragonNews-4</Link></Navbar.Brand>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span className='me-3'>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='me-3'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }

                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {/* {
                                <Image style={{ height: '30px' }} roundedCircle
                                    src={user?.photoURL}></Image>
                            } */}
                            {user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle
                                    src={user?.photoURL}></Image>
                                :
                                <FaUser></FaUser>

                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;