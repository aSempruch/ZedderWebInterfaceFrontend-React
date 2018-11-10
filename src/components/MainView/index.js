import React, {Component} from 'react';
import HomeView from './HomeView';
import SearchView from "./SearchView";

class MainView extends Component {

    render() {
        const { query, date } = this.props;
        if(!query)
            return <HomeView date={date}/>
        else
            return <SearchView query={query}/>
    }
}

export default MainView;