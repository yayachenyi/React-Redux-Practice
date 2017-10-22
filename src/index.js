//create a new component. This component should produce some HTML
//Always one component per file
import React,{ Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
const API_KEY = 'AIzaSyAIQ6pPNnZtBDIifkZGR7nUus4-dKsf2fg';
import SearchBar from './component/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './component/vedio_list';
import VideoDetail from './component/vedio_detail'
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSeach('surfboard');
  }

  videoSeach(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }
  render(){
    const videoSeach = _.debounce((term) => {this.videoSeach(term)}, 500);
    return (
      <div>
        <SearchBar onSearchTermChange = {videoSeach}/>
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
        onSelectVideo = {selectedVideo => {this.setState({selectedVideo})}}
        videos = {this.state.videos}/>
      </div>
    );
  }
};
// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
