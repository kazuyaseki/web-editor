import * as React from 'react';
import './Sidebar.css';

export default class Sidebar extends React.Component<
  { changeLink: (link: string) => void },
  any
> {
  public render() {
    return (
      <ul className="sidebar">
        <li
          className="active"
          data-link="https://paper.dropbox.com/"
          onClick={this.changeLink}
        >
          Dropbox
        </li>
        <li data-link="https://ja.todoist.com/" onClick={this.changeLink}>
          Todoist
        </li>
      </ul>
    );
  }

  private changeLink = (e: React.MouseEvent<HTMLLIElement>) => {
    this.props.changeLink(e.currentTarget.getAttribute('data-link') || '');
  };
}
