import React from "react";
import "./TouristPlace.css";
class TouristPlace extends React.Component {
  render() {
    return (
      <div className="touristplace">
        <h1>{this.props.Name}</h1>
        <img src={this.props.ImagePath}></img>
        <p>
          <strong>{this.props.Type}</strong>
        </p>

        <p>
          <button>
            <a href={this.props.MoreInfo}>More Info</a>
          </button>
        </p>
      </div>
    );
  }
}
export default TouristPlace;
