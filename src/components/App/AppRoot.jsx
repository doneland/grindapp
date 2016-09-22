import React from 'react';
import classNames from 'classnames';


import styles from './AppRoot.css';


class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classMainContainer = classNames(
      'container',
      styles.app
    );

    console.log(process.env);

    return (
      <div className={classMainContainer}>
        {this.props.children}
      </div>
    );
  }
}

export default AppRoot;
