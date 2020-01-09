var elem1 = document.querySelector(".js__toggle-button1");
var elem2 = document.querySelector(".js__toggle-button2");
var mainNav = document.querySelectorAll(".main-nav__item");

if(document.documentElement.clientWidth < 768){
  for (var i = 0; i < 4; i++){
    mainNav[i].style.display="none";
  }
}


elem1.onclick = function(){
  elem1.classList.remove("page-header__active");
  elem2.classList.add("page-header__active");
  for (var i = 0; i < 4; i++){
    mainNav[i].style.display="block";
  }
};

elem2.onclick = function(){
  elem2.classList.remove("page-header__active");
  for (var i = 0; i < 4; i++){
    mainNav[i].style.display="none";
  }
  elem1.classList.add("page-header__active");
};
