import React, {Component} from 'react';

class SearchView extends Component {
    render() {
        const { query } = this.props;
        return (
            <div>
                Search View: {query}
            </div>
        );
    }
}

export default SearchView;