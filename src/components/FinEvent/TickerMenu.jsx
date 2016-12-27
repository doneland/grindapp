import React from 'react';


class TickerMenu extends React.Component {

  render() {
    const {events} = this.props;
    const tickerRows = events.map((ev, i) => {
      return (
        <div
          key={i} 
          className="list-group-item">{ev.name}
        </div>
      );
    });

    return (
      <div className="list-group">
        {tickerRows}
      </div>
    );
  }
}


export default TickerMenu;