$(function() {

	var slides = document.querySelectorAll('#slides .slide');
	var currentSlide = 0;
	var dots = document.querySelectorAll('#dots .control-dots');
	var currentDot = 0;
	var dot1 = document.getElementById('dot1');
	var dot2 = document.getElementById('dot2');
	var dot3 = document.getElementById('dot3');
	var dot4 = document.getElementById('dot4');
	var dot5 = document.getElementById('dot5');

	function goToSlide(n) {
		slides[currentSlide].className = 'slide';
		dots[currentDot].className = 'control-dots'
		currentSlide = (n+slides.length)%slides.length;
		currentDot = (n+dots.length)%dots.length;//document.getElementById("dot" + (n - slides.length + 1));
		dots[currentDot].className = 'control-dots activeDot';
		slides[currentSlide].className = 'slide showing';
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

	var card1 = document.getElementById('card1')
	var hidden1 = document.getElementById('hidden1')
	var hidePreview1 = document.getElementById('hidePreview1')
	card1.onmouseover = function() {
		hidden1.style.display = 'inline-block';
		hidePreview1.style.display = 'none';
	};
	card1.onmouseout = function() {
		hidden1.style.display = 'none';
		hidePreview1.style.display = 'inline-block';
	}

	var card1 = document.getElementById('card1')
	var hidden1 = document.getElementById('hidden1')
	var hidePreview1 = document.getElementById('hidePreview1')
	card1.onmouseover = function() {
		hidden1.style.display = 'inline-block';
		hidePreview1.style.display = 'none';
	};
	card1.onmouseout = function() {
		hidden1.style.display = 'none';
		hidePreview1.style.display = 'inline-block';
	}

	var card2 = document.getElementById('card2')
	var hidden2 = document.getElementById('hidden2')
	var hidePreview2 = document.getElementById('hidePreview2')
	card2.onmouseover = function() {
		hidden2.style.display = 'inline-block';
		hidePreview2.style.display = 'none';
	};
	card2.onmouseout = function() {
		hidden2.style.display = 'none';
		hidePreview2.style.display = 'inline-block';
	}

	var card3 = document.getElementById('card3')
	var hidden3 = document.getElementById('hidden3')
	var hidePreview3 = document.getElementById('hidePreview3')
	card3.onmouseover = function() {
		hidden3.style.display = 'inline-block';
		hidePreview3.style.display = 'none';
	};
	card3.onmouseout = function() {
		hidden3.style.display = 'none';
		hidePreview3.style.display = 'inline-block';
	}

	var card4 = document.getElementById('card4')
	var hidden4 = document.getElementById('hidden4')
	var hidePreview4 = document.getElementById('hidePreview4')
	card4.onmouseover = function() {
		hidden4.style.display = 'inline-block';
		hidePreview4.style.display = 'none';
	};
	card4.onmouseout = function() {
		hidden4.style.display = 'none';
		hidePreview4.style.display = 'inline-block';
	}

	var card5 = document.getElementById('card5')
	var hidden5 = document.getElementById('hidden5')
	var hidePreview5 = document.getElementById('hidePreview5')
	card5.onmouseover = function() {
		hidden5.style.display = 'inline-block';
		hidePreview5.style.display = 'none';
	};
	card5.onmouseout = function() {
		hidden5.style.display = 'none';
		hidePreview5.style.display = 'inline-block';
	}


	var leftUIEl = $('.carousel-arrow-left');
	var rightUIEl = $('.carousel-arrow-right');
	var elementsList = $('.carousel-list');

	var pixelsOffset = 210;
	var currentLeftValue = 0;
	var elementsCount = elementsList.find('li').length;
	var minimumOffset = - ((elementsCount - 11) * pixelsOffset);
	var maximumOffset = 0;

	leftUIEl.click(function() {
		if (currentLeftValue != maximumOffset) {
			currentLeftValue += 210;
			elementsList.animate({ left : currentLeftValue + "px"}, 500);
		}   
	});

	rightUIEl.click(function() {        
		if (currentLeftValue != minimumOffset) {
			currentLeftValue -= 210;
			elementsList.animate({ left : currentLeftValue + "px"}, 500);
		}        
	});


});
