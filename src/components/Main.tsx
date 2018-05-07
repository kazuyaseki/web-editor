import * as React from 'react';
import WebView from './WebView';
import './Main.css';
import * as Types from '../types';

export default class Main extends React.Component<
  {
    services: Types.Service[];
    currentServiceId: number;
  },
  any
> {
  public render() {
    return (
      <div className="main">
        {this.props.services.map((service: Types.Service) => (
          <div
            key={service.id}
            className={`webview ${
              this.props.currentServiceId === service.id ? 'active' : ''
            }`}
          >
            <WebView src={service.url} allowpopups />
          </div>
        ))}
      </div>
    );
  }
}
