import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const YandexMap = () => {
  return (
    <div className="section-map">
      <YMaps>
        <Map
          defaultState={{
            center: [54.9025, 37.338249],
            zoom: 17,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          style={{ height: "100%", width: "100%" }}
        >
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[54.9025, 37.338249]}
            properties={{
              hintContent: "Аренда бытовок",
              balloonContent: "Аренда бытовок 89646232467",
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default YandexMap;
