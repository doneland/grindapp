import React from 'react';

import styles from './AppRoot.css';
import bs from '../../../node_modules/bootstrap/dist/css/bootstrap.css';

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={bs.container}>
        {this.props.children}
      </div>
    );
  }
}

export default AppRoot;
