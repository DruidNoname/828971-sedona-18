var interMap = document.querySelectorAll(".impulse__map");
var marker = document.querySelector(".impulse__map-marker")

for (var i = 0; i < 2; i++){
  interMap[i].classList.toggle("impulse__active");
  marker.classList.remove("impulse__active");
}

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
