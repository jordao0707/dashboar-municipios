import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";


class Mapa extends React.Component {
  
  render() {
    return (
      <ComposableMap
        projectionConfig={{
          scale: 2000,
          center: [-40, -6]
        }}
      >

        <Geographies geography={this.props.url}>
          {
            ({ geographies }) =>
              geographies.map(
                (geo) => {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#bbb"
                      stroke="#444"
                    />
                  );
                })
          }
        </Geographies>
      </ComposableMap>
    );
  }
};

export default Mapa;
