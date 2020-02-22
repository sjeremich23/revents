import React, { Component } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import { EventDetailedPage } from "../../features/event/EventDetailed/EventDetailedPage";
import { PeopleDashboard } from "../../features/user/PeopleDashboard/PeopleDashboard";
import { SettingsDashboard } from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import { UserDetailedPage } from "../../features/user/UserDetailed/UserDetailedPage";
import TestComponent from "../../features/testarea/TestComponent";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
                <Route path="/test" component={TestComponent} />
              </Container>
            </>
          )}
        />
      </>
    );
  }
}

export default App;
