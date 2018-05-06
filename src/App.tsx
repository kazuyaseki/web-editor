import * as React from 'react';
import './App.css';

import Main from './components/Main';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  public state = {
    link: 'https://paper.dropbox.com/'
  };

  public changeLink = (link: string) => {
    this.setState({ link });
  };

  public render() {
    return (
      <div className="App">
        <Sidebar changeLink={this.changeLink} />
        <Main link={this.state.link} />
      </div>
    );
  }
}

export default App;
