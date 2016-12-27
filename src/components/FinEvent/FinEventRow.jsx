import React from 'react';


class FinEventRow extends React.Component {
  render() {
    const {event} = this.props;

    return (
      <div className="jumbotron bg-info">
        <h4>{event.code} - {event.ticker}</h4>
      </div>
    );
  }
}

export default FinEventRow;

