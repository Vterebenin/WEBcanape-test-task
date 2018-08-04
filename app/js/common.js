$(function() {
	var slides = document.querySelectorAll('#slides .slide');
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide, 5000)
	var dots = document.querySelectorAll('#dots .control-dots');
	var currentDot = 0;
	var playing = true
	// probably refract? idk how now
	// probably some fixes in future
	function nextSlide() {
		slides[currentSlide].className = 'slide';
		dots[currentDot].className = 'control-dots'
		currentSlide = (currentSlide+1)%slides.length;
		currentDot = (1+currentDot)%dots.length;
		slides[currentSlide].className = 'slide showing';
		dots[currentDot].className = 'control-dots activeDot';
	}
	function pauseSlideshow() {
		playing = false;
		clearInterval(slideInterval);
	}
	function playSlideshow() {
		playing = true;
		slideInterval = setInterval(nextSlide,5000)
	}
	function goToSlide(n) {
		pauseSlideshow();
		slides[currentSlide].className = 'slide';
		dots[currentDot].className = 'control-dots'
		currentSlide = (n+slides.length)%slides.length;
		currentDot = (n+dots.length)%dots.length;
		slides[currentSlide].className = 'slide showing';
		dots[currentDot].className = 'control-dots activeDot';
		playSlideshow();
	}
	dot1.onclick = function() {
		goToSlide(slides.length);
	};
	dot2.onclick = function() {
		goToSlide(slides.length+1);
	};
	dot3.onclick = function() {
		goToSlide(slides.length+2);
	};
	dot4.onclick = function() {
		goToSlide(slides.length+3);
	};
	dot5.onclick = function() {
		goToSlide(slides.length+4);
	};
	
	// this code seems wierd, but it doing the work
	// need to refract
	function showAndHide(card, hidden, hidePreview) {
		$("#" + card).on("mouseover", function() {
			$("#" + hidden).css("display", "inline-block")
			$("#" + hidePreview).css('display', 'none')
		})
		$("#" + card).on("mouseout", function() {
			$("#" + hidden).css("display", "none")
			$("#" + hidePreview).css('display', 'inline-block')
		})
	}
	for (var i = 1; i < 6; i++) {
		eval("showAndHide('card" + i + "','hidden" + i + "','hidePreview" + i +"')")
	}

	// CAROUSELS
	/*
	they can be refractored, 
	for now doesnt now how
	testing it
	*/
	var leftUIEl = $('.carousel-arrow-left');
	var rightUIEl = $('.carousel-arrow-right');
	var elementsList = $('#carousel-list-1');
	var elementsList2 = $('#carousel-list-2');
	var pixelsOffset = 210;
	var pixelsOffsetPort = 190;
	var currentLeftValue = 0;
	var currentLeftValuePort = 0;
	var elementsCount = elementsList.find('li').length;
	var minimumOffset = -1050;
	var minimumOffsetPort = -760;
	var maximumOffset = 0;

	leftUIEl.click(function() {
		if (this.id === 'arrow-port1') {
			if (currentLeftValuePort != maximumOffset) {
				currentLeftValuePort += pixelsOffsetPort;
				elementsList2.animate({ left : currentLeftValuePort + "px"}, 500);
			}
		} else {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += pixelsOffset;
				elementsList.animate({ left : currentLeftValue + "px"}, 500);
			}   
		}
	});
	rightUIEl.click(function() {
		if (this.id === 'arrow-port2') {
			if (currentLeftValuePort != minimumOffsetPort) {
				currentLeftValuePort -= pixelsOffsetPort;
				elementsList2.animate({ left : currentLeftValuePort + "px"}, 500);
			} 
		} else {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= pixelsOffset;
				elementsList.animate({ left : currentLeftValue + "px"}, 500);
			}   
		}
	});
});
