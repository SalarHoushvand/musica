import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Artist = ({ artist }) => {
    if(!artist) return null;
    const { images, name, followers, genres } = artist;

    return(
        <div >
            <Container>
                <Row style={{ textAlign:'center', 
                paddingBottom:20, 
                paddingTop:20
                }}>

                
            <Col>
                    <img 
            src={images[0] && images[0].url} 
            alt="artist profile"
            className='artist-pic'
            style={{
                width:300,
                height:300,
                borderRadius:150,
                objectFit: 'cover' 
            }}  
            />
                    </Col>



            <Col className="align-middle artist-info">
            <div>
            <h1 className='artist-title'>{name}</h1>
            <p className='follower-text'>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            </div>

            </Col>
            
           
            </Row>
            </Container>
        </div>
    )
}

export default Artist;
