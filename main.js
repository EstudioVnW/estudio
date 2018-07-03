var slidesPortifolio = 1;
showPortifolio(slidesPortifolio);

function plusPortifolio(n){
  showPortifolio(slidesPortifolio += n);
}

function showPortifolio(n){
  var i;
  var x = document.getElementsByClassName("corpo-caixa_6-projetos");
  if (n > x.length) {slidesPortifolio = 1}
  if (n < 1 ) {slidesPortifolio = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slidesPortifolio-1].style.display = "flex"
};
