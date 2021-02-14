import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import NavigationBar from '../NavBar/NavigationBar'
import imgMarketplace from '../../assets/images/admarketplace.png'
import imgCalltracking from '../../assets/images/calltrackingmetrics.png'
import imgCampaign from '../../assets/images/campaignmanager.png'
import imgAnalytics from '../../assets/images/googleanalytics.png'
import imgSalesforce from '../../assets/images/saleforce.png'
import imgFacebook from '../../assets/images/facebook.png'
import imgInstagram from '../../assets/images/instagram.png'
import imgLinkedin from '../../assets/images/linkedin.png'
import imgYoutube from '../../assets/images/youtube.png'
import imgTwitter from '../../assets/images/twitter.png'
import imgTiktok from '../../assets/images/tiktok.png'
import imgTumblr from '../../assets/images/tumblr.png'


function Integration(){

    const containerStyle = {
        marginTop: "40px",
        marginLeft:"50px",
        marginRight:"50px"
    }

    const cardStyle = {
        width: "18rem",
        margin: "20px 20px 20px 20px"
    }

    return (
        <div >
            <NavigationBar />
            <Container style={{marginLeft:"100px", marginRight:"100px"}} fluid>
                <Row>
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgMarketplace} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>Transparent Ad Marketplace</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgCalltracking} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>Call Tracking Metrics</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgCampaign} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>Double Click</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgAnalytics} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>Google Analytics</Card.Title>
                        </Card.Body>
                    </Card>  
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgSalesforce} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>Sales Force</Card.Title>
                        </Card.Body>
                    </Card>      
                </Row>

                <Row>
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgFacebook} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>Facebook</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgInstagram} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>Instagram</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgLinkedin} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>LinkedIn</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgYoutube} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>Youtube</Card.Title>
                        </Card.Body>
                    </Card>  
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgTwitter} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>Twitter</Card.Title>
                        </Card.Body>
                    </Card>      
                </Row>

                <Row>
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgTiktok} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>Tiktok</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="warning" style={cardStyle}>
                        <Card.Img  variant="top" src={imgTumblr} />
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title>Tumblr</Card.Title>
                        </Card.Body>
                    </Card>      
                </Row>    
            </Container>  
            <Footer footerPosition="relative"/>
        </div>
    )
}

export default Integration