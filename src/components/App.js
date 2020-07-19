import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';
import { Container, Row, Col } from 'reactstrap';


const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';


class App extends Component {

  state = { artist: null, tracks:[] };
  
  componentDidMount(){
    this.searchArtist('coldplay');
  }

  searchArtist = artistQuery => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
    .then(response => response.json())
    .then(json => {
      if(json.artists.total > 0) {
        const artist = json.artists.items[0];
        this.setState({artist});

        fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
        .then(response => response.json()
        .then(json => this.setState({tracks: json.tracks})))
        .catch(error => alert(error.message));

      }
    })
    .catch(error => alert(error.message));
  }

  

  render() {
    return (
      <Container fluid>
        <Row className='align-middle'>
          <Col md>
        <div class="logo"><b>M<span>u</span>s<span>i</span>ca</b></div>
          </Col>

          <Col md >
           <Search searchArtist={this.searchArtist}/>
          </Col>
        </Row>
     
        
      
       <Artist artist={this.state.artist} />
       <Tracks className='tracks' tracks={this.state.tracks} />
      
      </Container>
    );
  }
}

export default App;
