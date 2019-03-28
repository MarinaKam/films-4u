import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.module.css';
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from '../SideBar/SideBar.module.css';
import Main from "../Main/Main";
import ComingSoon from "../Main/ComingSoon";
import TopRated from "../Main/TopRated";
// import Popular from "../Main/Popular";

class App extends Component {
    state = {
        isActive: false
    };

    handleClick = () => this.setState({ isActive: !this.state.isActive });
    handleBlur = () => this.setState({ isActive: false });

    render() {
        return (
            <BrowserRouter>
              <Fragment>
                <Header onClick={this.handleClick} onBlur={this.handleBlur}/>
                <section className={styles.sidebar}>
                  <SideBar isActive={this.state.isActive}/>
                </section>
                  <main>
                      <Switch>
                          {/*<Route path='/' exact component={Popular}/>*/}
                          <Route path='/popular' component={Main}/>
                          <Route path='/top-rated' component={TopRated} />
                          <Route path='/coming-soon' component={ComingSoon}/>
                      </Switch>
                  </main>
              </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
