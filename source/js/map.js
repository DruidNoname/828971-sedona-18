
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    center: [35.05, -111.70],
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
      iconImageSize: [33, 33]
    }
  ));

  myMap.geoObjects.add(myPlacemark);
}
