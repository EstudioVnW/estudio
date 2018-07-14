var slidesPortifolio = 1;
showPortifolio(slidesPortifolio);

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

var menu = document.getElementById('menu');

const hiddenMenu = function (){
	if(window.innerWidth <= '768'){
		menu.style.display = 'none';
	}else if(window.innerWidth >= '768'){
		menu.style.display = 'flex';
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

function scroll(){
	if(window.innerWidth <= '768'){
		// window.addEventListener('load', function(){
		
			var sizeHeader = document.querySelector('#header').offsetHeight;

			var linkSobre = document.querySelector('#menu-item-sobre');
			linkSobre.addEventListener('click', function(event){
				event.preventDefault();
				showMenu();
				var ancoraSobre = document.querySelector('#sobre');		
				window.scrollTo(0, ancoraSobre.offsetTop - sizeHeader);
			});

			var linkServicos = document.querySelector('#menu-item-servicos');
			linkServicos.addEventListener('click', function(event){
				event.preventDefault();
				showMenu();
				var ancoraServicos = document.querySelector('#serviços');
				window.scrollTo(0, ancoraServicos.offsetTop - sizeHeader);
			});

			var linkPortfolio = document.querySelector('#menu-item-portfolio');
			linkPortfolio.addEventListener('click', function(event){
				event.preventDefault();
				showMenu();
				var ancoraPortfolio = document.querySelector('#portfolio');
				window.scrollTo(0, ancoraPortfolio.offsetTop - sizeHeader);
			});

			var linkContato = document.querySelector('#menu-item-contato');
			linkContato.addEventListener('click', function(event){
				event.preventDefault();
				showMenu();
				var ancoraContato = document.querySelector('#contato');
				window.scrollTo(0, ancoraContato.offsetTop - sizeHeader);
			});
		// });	
	}
}

scroll();

const barSize = function (){
	document.getElementById('barra-numerica').style.height = document.body.clientHeight+'px';
}
window.addEventListener('load', barSize);



function resize(){
	hiddenMenu();
	scroll();
	barSize();
}