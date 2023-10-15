import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaWhatsapp, FaTwitter, FaTwitch, FaCalendar } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    // {googleProviderLogin} collection from authInfo of AuthProvider.js
    const { googleProviderLogin } = useContext(AuthContext)
    // const provider = new GoogleAuthProvider();>1
    const Provider = new GoogleAuthProvider();
    const haaandleGoogleSignin = () => {
        googleProviderLogin(Provider)
            // .then & .catch collection from >5
            .then((result) => {

                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={haaandleGoogleSignin} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Log in with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>  Log in with Github</Button>
            </ButtonGroup>
            <h6 className='mt-3'>Find us any time</h6>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-secondary"><FaWhatsapp></FaWhatsapp>  Log in with Whatsapp</Button>
                <Button className='mb-2' variant="outline-secondary"><FaTwitch></FaTwitch> Log in with Twitch</Button>
                <Button className='mb-2' variant="outline-secondary"><FaTwitter></FaTwitter> Log in with Twitter</Button>
                <Button className='mb-2' variant="outline-secondary"><FaCalendar></FaCalendar> Log in with Calendar</Button>
            </ButtonGroup>
            <h6 className='mb-3'>Top news:- </h6>
            <div className='mt-5'>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>

    );
};

export default RightSideNav;