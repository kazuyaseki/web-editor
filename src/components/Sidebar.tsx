import * as React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
  public render() {
    return (
      <div className="sidebar">
        <webview src="http://qiita.com" autosize={true} />
      </div>
    );
  }
}

export default Sidebar;
