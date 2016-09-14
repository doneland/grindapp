import React from 'react';


class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}


export default AppRoot;
