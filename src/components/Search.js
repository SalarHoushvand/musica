import React, {Component} from 'react';




class Search extends Component {

    state = {artistQuery : ''};

    updateArtistQuery = () => {
        this.setState({artistQuery: event.target.value});
      }


    handleKeyPress= event => {
        if(event.key == 'Enter'){
          this.searchArtist();
        }
      }

      searchArtist = () => {
          this.props.searchArtist(this.state.artistQuery);
      }


    render(){
        return(
            <div>
                 <input 
                    onChange={this.updateArtistQuery} 
                    onKeyPress={this.handleKeyPress}
                    placeholder='search for an artist'/>
                 <button className='search-btn' onClick={this.searchArtist}><i className="fa fa-search"></i></button>
              
                 
                 
            </div>
        )
    }
}

export default Search;