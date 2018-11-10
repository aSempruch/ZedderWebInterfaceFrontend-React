import React, { Component } from 'react';
import TopBar from './components/TopBar/index';
import MainView from './components/MainView';
import moment from 'moment';
import { createMuiTheme, MuiThemeProvider }from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2633a6'
        },
        secondary: {
            main: '#26a69a'
        }
    },
});

class App extends Component {

    state = {
        query: false,
        date: null
    };

    componentWillMount() {
        this.setDate({
            startDate: moment().startOf('month'),
            endDate: moment()
        });
    }

    setDate(date) {
        this.setState({date: {start: date.startDate, end: date.endDate}});
    }

    initSearch(text) {
        this.setState({query: text});
    }

      render() {
          return (
              <MuiThemeProvider theme={theme}>
                  <div className="App">
                        <TopBar initSearch={this.initSearch.bind(this)} setDate={this.setDate.bind(this)} date={this.state.date}/>
                        <MainView query={this.state.query} date={this.state.date}/>
                  </div>
              </MuiThemeProvider>
        );
      }
}

export default App;
