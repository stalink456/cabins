import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const YandexMap = () => {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [54.901231, 37.338696],
          zoom: 17,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        style={{ height: "70vh", width: "35vw" }}
      >
        <Placemark
          modules={["geoObject.addon.balloon"]}
          defaultGeometry={[54.901231, 37.338696]}
          properties={{
            hintContent: "Аренда бытовок",
            balloonContent: "Аренда бытовок 89267592241",
          }}
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
