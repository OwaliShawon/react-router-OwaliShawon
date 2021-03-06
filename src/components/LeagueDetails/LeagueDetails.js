import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import Male from '../../Images/male.png';
import Female from '../../Images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import facebook from '../../Icon/Facebook.png'
import twitter from '../../Icon/Twitter.png'
import youtube from '../../Icon/YouTube.png'
import { faFlag, faFootballBall, faMapPin, faTransgender } from '@fortawesome/free-solid-svg-icons';

const LeagueDetails = () => {
    const { idLeague } = useParams();
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(response => response.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    const { strLeague, strBadge, strBanner, strCountry, intFormedYear, strGender, strSport, strFacebook, strTwitter, strYoutube } = league;

    const imageStyle = {
        width: 'auto',
        height: '60%',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'

    }

    const headerStyle = {
        height: '300px',
        width: 'auto',
        backgroundImage: `url(${strBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'red',
        align: 'center',
        position: 'relative',
        textAlign: 'center'
    }

    let gender;
    if (strGender === 'Male') {
        gender = <img style={{ width: '20rem' }} src={Male} alt="" />

    } else if (strGender === 'Female') {
        gender = <img style={{ width: '20rem' }} src={Female} alt="" />

    }

    return (
        <div>
            <div style={headerStyle}>
                <img style={imageStyle} src={strBadge} alt="" />
            </div>

            <div style={{ backgroundColor: 'orange', paddingTop: '10px' }}>
                <Container>
                    <Row id="league-info">
                        <Col id="str-info">
                            <h3>{strLeague}</h3>
                            <p><FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>  Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>  Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFootballBall}></FontAwesomeIcon>  Sport Type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faTransgender}></FontAwesomeIcon>  Gender: {strGender}</p>
                        </Col>
                        <Col>{gender}</Col>
                    </Row>
                </Container>

                <Container style={{ marginTop: '30px' }}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus magnam soluta, fugit illum nobis ab quia libero et labore ratione aspernatur dicta veniam. Similique est doloribus optio et, veniam laborum.
                        Tempore velit harum quidem possimus asperiores voluptatem blanditiis officia repudiandae inventore repellendus earum assumenda, esse, magnam ad quo excepturi fugiat porro doloribus aliquam reiciendis iure! Officia tempore quam reprehenderit. Animi!
                        Corrupti harum eius possimus doloremque. Quae temporibus quas voluptatibus similique suscipit debitis, eos deserunt incidunt doloremque ab voluptates atque aliquam hic aliquid officia deleniti voluptate totam. Neque quidem impedit repudiandae.
                        Placeat repudiandae laudantium, a, architecto itaque aspernatur alias nihil aperiam, earum ratione nostrum deserunt adipisci illo quidem pariatur. Repellendus excepturi ipsam molestiae molestias possimus voluptatem dicta impedit illum sint est.
                        Sequi aspernatur similique molestiae nihil perspiciatis quae sunt vero deserunt nam quia ea, impedit, debitis reiciendis maxime deleniti sit, quo numquam modi repellat sapiente. Qui labore dignissimos recusandae dolore adipisci.
                        Iusto hic sapiente provident rerum eius a magni impedit numquam perferendis similique, exercitationem soluta laboriosam voluptas! Libero dolore neque hic. Iste atque quisquam nam iusto ab aspernatur consectetur, nostrum autem.
                        Ex repudiandae iste quidem facere nisi, voluptatibus quo autem. Recusandae a nostrum asperiores. Aut quibusdam officiis tenetur, debitis eveniet atque accusantium quia assumenda consequatur sed, nulla, architecto possimus. Eaque, animi.
                        Debitis dicta nam fugit, atque vitae aperiam necessitatibus facere in quas placeat reprehenderit doloribus officiis neque laudantium delectus vel impedit pariatur iste et? Repellendus pariatur, soluta quam est aperiam sed?
                    </p>
                </Container>
                <Container>
                    <Row style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                        <a href={`https://${strFacebook}`}><img style={{ height: '50px', width: 'auto' }} src={facebook} alt="" /></a>
                        <a href={`https://${strTwitter}`}><img style={{ height: '50px', width: 'auto' }} src={twitter} alt="" /></a>
                        <a href={`https://${strYoutube}`}><img style={{ height: '50px', width: 'auto' }} src={youtube} alt="" /></a>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default LeagueDetails;