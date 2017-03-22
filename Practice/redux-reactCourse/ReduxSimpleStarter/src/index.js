import _ from 'lodash';
import React, { Component } from 'react'; //go find the library called react (assign it to the variable 'React') same as var React = require('react');
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// *******************************************
//willNOT work without API KEY.
const API_KEY = 'paste key here';
//Create a new component. This component should produce some HTML


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('TickleGhost Intro');
    }
    

    videoSearch(term) {
            //API request to get more videos
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
            // ABOVE is ES6 same as this.setState({ videos: videos });
            
        });

    }


    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300); // versions of data will only show after 300 ms. Delays the search.

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
};

//React: Put the component's generated HTML and put it into the DOM (on the page).
ReactDOM.render(<App />, document.querySelector('.container'));