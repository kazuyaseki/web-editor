import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IWebViewProps {
  src: string;
  autosize?: boolean;
  nodeintegration?: boolean;
  plugins?: boolean;
  preload?: string;
  httpreferrer?: string;
  useragent?: string;
  disablewebsecurity?: boolean;
  partition?: string;
  allowpopups?: boolean;
  webpreferences?: string;
  blinkfeatures?: string;
  disableblinkfeatures?: string;
  guestinstance?: string;
  disableguestresize?: boolean;
}

export default class WebView extends React.Component<IWebViewProps, any> {
  private element: HTMLDivElement;

  public setWebviewElement(): void {
    const container = ReactDOM.findDOMNode(this.element) as HTMLElement;
    let props = '';
    for (let prop in this.props) {
      if (prop === 'className') {
        props += `class="${this.props[prop]}" `;
      } else {
        if (typeof this.props[prop] === 'boolean') {
          props += `${prop}="${this.props[prop] ? 'on' : 'off'}" `;
        } else {
          props += `${prop}="${this.props[prop]}" `;
        }
      }
    }
    if (!container) return;
    container.innerHTML = `<webview ${props} />`;
    const webview: any = container.querySelector('webview');
    webview.addEventListener('dom-ready', (w: any) => {
      if (String(process.env) === 'development') {
        if (!webview.isDevToolsOpened()) {
          webview.openDevTools();
        }
      }
    });
  }

  public componentDidMount(): void {
    this.setWebviewElement();
  }

  public componentDidUpdate(): void {
    this.setWebviewElement();
  }

  public render(): JSX.Element {
    return (
      <div
        ref={w => {
          if (w) this.element = w;
        }}
      />
    );
  }
}
