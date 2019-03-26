import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Search, Table } from '../../components';
import { searchLocation, updateTableResult } from '../../actions';
import { fecthLocationList } from '../../api';

class HomeApp extends Component {
  handleSearch = () => {
    const { searchText } = this.props;
    if (searchText !== '') {
      fecthLocationList(searchText).then((data) => this.props.updateTableResult(data));
    }
  }

  handleInputChange = (searchText) => {
    this.props.searchLocation(searchText);
  }

  render() {
    const { searchText, result } = this.props;
    return (
      <div className="homePage">
        <h1 className="homePage__header">
          MetaWeather:
        </h1>
        <div>
          <Search
            onSearch={this.handleSearch}
            text={searchText}
            onChange={this.handleInputChange}
          />
          <Table result={result} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ table }) => ({
  searchText: table.searchText,
  result: table.result,
})

const mapDispatchToProps = {
  searchLocation,
  updateTableResult,
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeApp);
export default Home;
