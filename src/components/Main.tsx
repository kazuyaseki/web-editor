import * as React from 'react';
import WebView from './WebView';
import './Main.css';

export default class Main extends React.Component<
  { link: string | undefined },
  any
> {
  public render() {
    return (
      <div className="main">
        <div className="webview">
          <WebView src={this.props.link || ''} allowpopups />
        </div>
      </div>
    );
  }
}
