import * as React from 'react';
import './Sidebar.css';

import * as Types from '../types';

export default class Sidebar extends React.Component<
  {
    changeLink: (link: string) => void;
    services: Types.Service[];
    currentServiceId: number;
  },
  any
> {
  public render() {
    return (
      <ul className="sidebar">
        {this.props.services.map((service: Types.Service) => (
          <li
            className={
              this.props.currentServiceId === service.id ? 'active' : ''
            }
            data-id={service.id}
            onClick={this.changeLink}
          >
            {service.name}
          </li>
        ))}
      </ul>
    );
  }

  private changeLink = (e: React.MouseEvent<HTMLLIElement>) => {
    this.props.changeLink(e.currentTarget.getAttribute('data-id') || '');
  };
}
