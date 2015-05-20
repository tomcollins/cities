"use strict";

var Player = {
  init: function init() {
    console.log('Player initialized.');

	var a = audiojs.createAll({
		trackEnded: function() {
			var audioData;
			var next = $('ol.tracklist li.playing').next();
			if (!next.length) next = $('ol li').first();
			next.addClass('playing').siblings().removeClass('playing');
			audioData = $('a', next).attr('data-src');
			audio.load(audioData);
			audio.play();
			_gaq.push(['_trackEvent', 'Audio', 'Play', audioData]);
		}
	});

	var audio = a[0];

	/*
	setTimeout(function(){
		var first = $('ol.tracklist a').attr('data-src');
		console.log('first', first);
		$('ol.tracklist li').first().addClass('playing');
		audio.load(first);
		audio.play();
	}, 1000);
	*/

	$('ol.tracklist li').click(function(e) {
		var audioData;
		e.preventDefault();
		$(this).addClass('playing').siblings().removeClass('playing');
		audioData = $('a', this).attr('data-src');
		audio.load(audioData);
		audio.play();

		_gaq.push(['_trackEvent', 'Audio', 'Play', audioData]);
	});
  }
};

module.exports = Player;
