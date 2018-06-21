(function() {

  var menuBox = document.querySelectorAll('.nav-corpo-menu');
  var mobileBar = document.querySelector('.corpo-barra_lateral');

  document.getElementById("menu-hamburguer").addEventListener("click", myFunction);
  document.getElementById("item-menu").addEventListener("click", myFunction2);  

  function myFunction() {
    document.getElementById('menu').style.display = "flex";
    document.getElementById('barra-numerica').style.display = "flex";
  };
   function myFunction2() {
    document.getElementById('menu').style.display = "none";
    document.getElementById('barra-numerica').style.display = "none";
  };

  // function myFunction2() {
  //   menuBox.classList.toggle('drop-menu')
  //   mobileBar.classList.remove('drop-item')
  // }
})();