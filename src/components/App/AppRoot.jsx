import React from 'react';

import bs from '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import bst from '../../../node_modules/bootstrap/dist/css/bootstrap-theme.css';


class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={bs["container"]}>
        {this.props.children}
      </div>
    );
  }
}

export default AppRoot;
