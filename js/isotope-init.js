$(document).ready(function(){

	var $grid = $('.grid').isotope({
		itemSelector: '.col-lg-6'
	});
    var filters = {};

	$('.filters').on( 'click', '.filter-btn', function( event ) {
		var $button = $( event.currentTarget );
	  var $buttonGroup = $button.parents('.button-group');
	  var filterGroup = $buttonGroup.attr('data-filter-group');
	  filters[ filterGroup ] = $button.attr('data-filter');
	  var filterValue = concatValues( filters );
	  $grid.isotope({ filter: filterValue });
	});
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function( event ) {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			var $button = $( event.currentTarget );
			$button.addClass('is-checked');
		});
	});
	function concatValues( obj ) {
		var value = '';
		for ( var prop in obj ) {
			value += obj[ prop ];
		}
		return value;
	}

});