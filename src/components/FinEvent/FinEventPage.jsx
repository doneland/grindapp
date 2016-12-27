import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import * as actions from './finEventActions';
import FinEventRow from './FinEventRow.jsx';
import TickerMenu from './TickerMenu.jsx';


class FinEventPage extends React.Component {

  componentDidMount() {
    this.props.fetchAllEvents();
  }

  render() {
    const {events} = this.props;
    const eventRows = events.map((ev, i) => {
      return <FinEventRow key={i} event={ev} />
    }); 

    return (
      <div className="row">
        <div className="col-xs-3">
          <TickerMenu events={events} />
        </div>
        <div className="col-xs-9">
          {eventRows}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    events: state['events']['events'],
    error: state['events']['error']
  }
}


const mapDispatchToProps = (dispatch) => {
  const finEventsActions = bindActionCreators(actions, dispatch);
  return {
    fetchAllEvents: finEventsActions.fetchFinEvents
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FinEventPage);