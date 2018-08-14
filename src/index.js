import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import YouTube from 'react-youtube';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import {TextArea} from './components/text_area';
import {Footer} from './components/footer.js';


const API_KEY = 'AIzaSyDIFdRyeBUCoxI3QNrimE9y2GXu3PAWoaA';


// Create a new component. This component should produce
// some HTML
// functional component - taking something then spitting it out
// changed const (instance) to class (class component)
class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [] };

    // passing in the selected video
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('skateboards')
  }


    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }


  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // update this this.state
      // this.setState({ videos: videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render(){

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    // only called every 300 milliseconds
    // throttling user input (google instance search - kinda)
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

    return (
      <div className="mainContainer">

        <div className="row">
          <div className="header">
            <h1>Welcome to VidEdu</h1>
            <h5>Type in a video to get started!</h5>
          </div>
        </div>

        <SearchBar onSearchTermChange={videoSearch} />

        <div className="row">
          <VideoList
            onVideoSelect= {selectedVideo => this.setState( {selectedVideo}) }
            videos={this.state.videos}
            opts={opts}
            onReady={this._onReady}
            />
        </div>

          <br />

        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <TextArea video={this.state.selectedVideo}/>
        </div>


          <div className="row">
            <Footer />
          </div>
      </div>

    ); // end return
  } // end render
} // end App

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
