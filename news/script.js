$ (function(){

	$ (function(){
		$.get('http://data.fixer.io/api/latest', 
		{'access_key': 'ac690c98b5fac01bc8913fb107f7bcdc'}, 
		function(responce){
			$('.base').append(responce.base);
			$('.USD').append(responce.rates.USD);
			$('.RUB').append(responce.rates.RUB);
		});
	});

	function disableScroll(){
		$('body', 'html').toggleClass('fixed');
	};

	$('.menu__btn').on('click', disableScroll);

});