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

  public changeLink = (link: string) => {
    this.setState({ link });
  };

  public render() {
    const currentService = this.services.find(
      (service: Types.Service) => this.state.currentServiceId === service.id
    );

    return (
      <div className="App">
        <Sidebar changeLink={this.changeLink} services={this.services} />
        <Main link={currentService && currentService.url} />
      </div>
    );
  }
}

export default App;
