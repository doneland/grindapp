import React from 'react';
import classNames from 'classnames';

import s from './AppRoot.css';


class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classContainer = classNames(
      s["gray-background"]
    );
    const classButtonSuccess = classNames(
      "btn",
      "btn-success"
    );

    return (
      <div className={classContainer}>
        <button className={classButtonSuccess}>Great</button>
        {this.props.children}
      </div>
    );
  }
}

export default AppRoot;
