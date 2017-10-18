//create a new component. This component should produce some HTML
//Always one component per file
import React from 'react';
import ReactDOM from 'react-dom';
const APT_KEY = 'AIzaSyAIQ6pPNnZtBDIifkZGR7nUus4-dKsf2fg';
import SearchBar from './component/search_bar';

const App = function(){
  return (
    <div>
      <SearchBar />
    </div>
  );
};
// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
