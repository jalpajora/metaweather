import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

class Table extends Component {
  renderRows = ({ title, location_type, latt_long, woeid }) => {
    return (
      <tr key={`rows-${woeid}`}>
        <td>{title}</td>
        <td>{location_type}</td>
        <td>{latt_long}</td>
        <td>
          <Link to={`/location-info/${woeid}`} key={woeid}>More Info</Link>
        </td>
      </tr>
    )
  }

  renderResult = (rows) => R.map(this.renderRows, rows)

  renderHeader = () => (
    <thead>
      <tr>
        <th>Title</th>
        <th>Location Type</th>
        <th>Latt long</th>
        <th></th>
      </tr>
    </thead>
  )

  render() {
    const { result } = this.props;
    return (
      <div className="tableContainer">
        <table>
            {this.renderHeader()}
            <tbody>
              {result.length ? this.renderResult(result) : <tr><td>No result found.</td></tr>}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
