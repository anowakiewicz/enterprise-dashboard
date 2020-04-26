import React, { memo, Component } from "react";
import { inject, observer } from "mobx-react";
import { computed } from "mobx";
import PropTypes from "prop-types";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

@inject("userDataStore")
@observer
class Map extends Component {
  static propTypes = {
    userDataStore: PropTypes.object,
  };

  @computed
  get markers() {
    if (!this.props.userDataStore.location) return [];

    return this.props.userDataStore.location.map(
      ({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      )
    );
  }

  render() {
    return (
      <>
        <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME, POP_EST } = geo.properties;
                      this.props.setTooltipContent(
                        `${NAME} — ${rounded(POP_EST)}`
                      );
                    }}
                    onMouseLeave={() => {
                      this.props.setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
            {this.markers}
          </ZoomableGroup>
        </ComposableMap>
      </>
    );
  }
}

export default memo(Map);
