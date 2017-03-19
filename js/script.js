// script.js

$(function() {


	$('#go').click( function() {

		// build function to see if car has one the race
		function checkIfComplete() {

			if ( isComplete == false ) {
				isComplete = true;

			} else {
				place = 'second';
			}

		}

		// Get width of the car
		var carWidth = $('#car1').width();

		// Get width of race Track
		var raceTrackWidth = $('#race').width() - carWidth;

		// Gemerate a random number between 1 and 5000
		var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
		var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );

		// Set a flag variable to false by default
		var isComplete = false;

		// Set a flag variable to first by default

		var place = 'first';

		// animate car 1
		$('#car1').animate({
			left: raceTrackWidth
		}, raceTime1, function() {
			// animation complete
			// run a function
			checkIfComplete();

			$('#raceInfo1 span').text('finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds');
		});

		// animate car 1
		$('#car2').animate({
			left: raceTrackWidth
		}, raceTime2, function() {
			// animation complete
			// run a function
			checkIfComplete();

			$('#raceInfo2 span').text('finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds');
		});

	});

	$('#reset').click( function() {
		$('.car').css('left', 0);
		$('.raceInfo span').text('');
	});




});









