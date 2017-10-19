//create a new component. This component should produce some HTML
//Always one component per file
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
const API_KEY = 'AIzaSyAIQ6pPNnZtBDIifkZGR7nUus4-dKsf2fg';
import SearchBar from './component/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './component/vedio_list';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboard' }, (videos) => {
      this.setState({videos});
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos}/>
      </div>
    );
  }
};
// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
