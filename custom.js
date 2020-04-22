function delay(n) {
	n = n || 2000;
	return new Promise(done => {
		setTimeout(() => {
			done();
		}, n);
	});
}

// Function to add and remove the page transition screen
function pageTransition() {
	var tl = gsap.timeline();
	$('h2').removeClass('show');

}

// Function to animate the content of each page
function contentAnimation() {
	var tl = gsap.timeline();
	tl.to("img", { duration: .5, scale: 1});
	setTimeout(function(){
		$('h2').addClass('show');
	}, 100);
	
}

$(function() {

	barba.init({
		sync: true,
		transitions: [{
			async leave(data) {
				const done = this.async();
				pageTransition();
				await delay(1000);
				done();
			},
			async enter(data) {
				contentAnimation();
			},
			async once(data) {
				contentAnimation();
				await delay(1000);
				
			}

		}]
	});

});

$(document).ready(function(){
	$('img').click(function(){
		var tl = gsap.timeline();
		tl.to(this, { duration: .5, scale: 3});
	})
	$('nav li').click(function(){
		$('li').removeClass('active');

		$(this).addClass('active');
		
		
	})
});