(function() {

  var menuBox = document.querySelectorAll('.nav-corpo-menu');
  var mobileBar = document.querySelector('.corpo-barra_lateral');

  document.getElementById("menu-hamburguer").addEventListener("click", myFunction);
  document.getElementById("item-menu").addEventListener("click", myFunction2);  

  function myFunction() {
    menuBox.classList.toggle('drop-menu')
    mobileBar.classList.add('drop-item')
  }

  function myFunction2() {
    menuBox.classList.toggle('drop-menu')
    mobileBar.classList.remove('drop-item')
  }
})(); 