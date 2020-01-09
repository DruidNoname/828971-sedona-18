
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    center: [35.08, -111.71],
    zoom: 7
  });

  (myPlacemark = new ymaps.Placemark(
    [34.869497, -111.760186],
    {
      hintContent: "Седона111"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-marker.svg",
      iconImageSize: [31, 31]
    }
  ));

  myMap.geoObjects.add(myPlacemark);
}
