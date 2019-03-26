import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

import { updateLocationInfo } from '../../actions';
import { fecthLocationInfo } from '../../api';

class LocationInfoApp extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    fecthLocationInfo(this.props.match.params.id).then(data => {
      this.props.updateLocationInfo(data);
      this.setState({ isLoading: false });
    });
  }

  renderWeather = ({
    weather_state_abbr: stateAbbr,
    applicable_date: applicableDate,
    weather_state_name: stateName,
    max_temp: maxTemp,
    min_temp: minTemp,
    id,
  }) => {
    const date = new Date(applicableDate).toDateString();
    return (
      <td key={id}>
        <h3 className="locationInfo__date">{date}</h3>
        <img
          src={`https://www.metaweather.com/static/img/weather/${stateAbbr}.svg`}
          alt={stateName}
          className="locationInfo__img"
        />
        <div><strong>Weather State:</strong> {stateName}</div>
        <div><strong>Max:</strong>{maxTemp}</div>
        <div><strong>Min:</strong>{minTemp}</div>
      </td>
    )
  }

  renderWeatherPerDay = (data) => R.map(this.renderWeather, data);

  render() {
    const { locationInfo } = this.props;
  
    if (!Object.keys(locationInfo).length || this.state.isLoading) {
      return null;
    }

    return (
      <div className="locationInfo">
        <header className="locationInfo__header">
          <div className="locationInfo__back">
            <Link to="/">{`< Back`}</Link>
          </div>
          <h1>{locationInfo.title}</h1>
        </header>
        <table className="locationInfo__section">
          <tbody>
            <tr>
              {this.renderWeatherPerDay(locationInfo.consolidated_weather)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ locationInfo }) => ({
  locationInfo,
});

const mapDispatchToProps = {
  updateLocationInfo,
};

const LocationInfo = connect(mapStateToProps, mapDispatchToProps)(LocationInfoApp);
export default LocationInfo;
