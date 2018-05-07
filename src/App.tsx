import * as React from 'react';
import './App.css';

import Main from './components/Main';
import Sidebar from './components/Sidebar';

import * as Types from './types';

class App extends React.Component {
  public state = {
    currentServiceId: 1
  };

  public services: Types.Service[] = [
    {
      id: 1,
      name: 'Dropbox',
      url: 'https://paper.dropbox.com/'
    },
    {
      id: 2,
      name: 'Todoist',
      url: 'https://ja.todoist.com/'
    },
    {
      id: 3,
      name: 'scrapbox',
      url: 'https://scrapbox.io/'
    }
  ];

  public changeService = (id: number) => {
    this.setState({ currentServiceId: id });
  };

  public render() {
    return (
      <div className="App">
        <Sidebar
          changeService={this.changeService}
          services={this.services}
          currentServiceId={this.state.currentServiceId}
        />
        <Main
          services={this.services}
          currentServiceId={this.state.currentServiceId}
        />
      </div>
    );
  }
}

export default App;
