var slidesPortifolio = 1;
showPortifolio(slidesPortifolio);

let menu = document.getElementById('menu');

function plusPortifolio(n){
  showPortifolio(slidesPortifolio += n);
};

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

// if(window.innerWidth <= '768'){

	function scroll(value){

		document.querySelectorAll('menu-item').addEventListener(
			'click', function(event){
			    event.preventDefault();
		});

		var id = document.getElementById('menu-item').getAttribute('href'),
			targetOffset = id.getBoundingClientRect().top,
			menuHeight = document.getElementById('header').innerHeight();

		document.body.scrollTop = targetOffset + menuHeight;	
	};
// };

// $('.scroll').click(function(event){
//     event.preventDefault();
//     var id = $(this).attr('href'),
//         targetOffset = $(id).offset().top,
//         menuHeight = $('.navbar').innerHeight();
//     $('html, body').animate({
//         scrollTop: targetOffset - menuHeight
//     }, 500);
// });


const hiddenMenu = function (){
	if(window.innerWidth <= '768'){
		menu.style.display = 'none'	
	}
};

hiddenMenu();

function showMenu(){
	if(menu.style.display === 'none'){
		menu.style.display = 'flex';
	}else{
		menu.style.display = 'none';
	}
};


