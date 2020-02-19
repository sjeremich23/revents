import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    return (
      <Fragment>
      {this.props.events.map(e => (
        <EventListItem key={e.id} event={e} />
      ))}
      </Fragment>
    );
  }
}

export default EventList;
