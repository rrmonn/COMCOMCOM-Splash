$(document).ready(function () {

	var shapes = [
		'shapes/Aro-0.svg',
		'shapes/Aro-1.svg',
		'shapes/Aro-2.svg',
		'shapes/Aro-3.svg',
		'shapes/Aro-4.svg',
		'shapes/Aro-5.svg',
		'shapes/Aro-6.svg',
		'shapes/Aro-7.svg',
		'shapes/Aro-8.svg',
		'shapes/Aro-9.svg',
		'shapes/Escalera-0.svg',
		'shapes/Escalera-1.svg',
		'shapes/Escalera-2.svg',
		'shapes/Escalera-3.svg',
		'shapes/Escalera-4.svg',
		'shapes/Escalera-5.svg',
		'shapes/Escalera-6.svg',
		'shapes/Escalera-7.svg',
		'shapes/Escalera-8.svg',
		'shapes/Escalera-9.svg',
	];

	var randomRot = [90, 180, 270, 0];

	$('.row').each(function () {
		var e = $(this).children().children('.grid-item');
		for (var i = 0; i < 4; i++) {
			// e.clone().insertBefore(e);
			e.html(`
				<div class="teaserinner">
					<div class="image off"><img src="` + shapes[Math.floor(Math.random() * 20)] + `"></div>
				</div>`);
			e.children().children().css("transform", "rotate(" + randomRot[Math.floor(Math.random() * 4)] + "deg)");
			e.clone().insertBefore(e);
		}
	})

	$('.teaser').each(function () {
		var teaserheight = $(this).height(),
			firstheight = $(this).children().children('.first').height(),
			secondheight = $(this).children().children('.second').height(),
			firsttop = parseInt($(this).children().children('.first').css("top")),
			imgheight = teaserheight - (firstheight + secondheight * 2);

		$(this).children().children('.image').css({ 'height': imgheight, 'top': firstheight + firsttop * 2 });
	});

	var vw = $(window).width() / 100,
		nonodo = 'true',
		count = 0;

	$(document).on('mouseenter touchstart', '.teaser', function (e) {
		if (nonodo == 'true') {
			count += 1;
			var id = "count" + count,
				that = $(this),
				width = $(this)[0].getBoundingClientRect().width,
				height = $(this)[0].getBoundingClientRect().height,
				length = that.parent().children('.teaser').length,
				firsttop = parseInt($(this).children().children('.first').css("top")) / 1.3 + 'px';
				vw = $(window).width() / 100,
				teaserheight = $(this).height(),
				firstheight = $(this).children().children('.first').height(),
				secondheight = $(this).children().children('.second').height(),
				firsttop2 = parseInt($(this).children().children('.first').css("top")),
				imgleft = parseInt($(this).children().children('.image').css("left")),
				imgwidth = parseInt($(this).children().children('.image').css("width")),
				imgheight = teaserheight - (firstheight + secondheight * 2);

					if ($(window).width() >= 1100) {
						if (width >= vw * 5) {
							that.children().children('.image').css({
								'height': imgheight / 2,
								'top': (firstheight + firsttop2 * 1.75) / 2,
								'left': imgleft / 2,
								'width': (imgwidth / 2.005)
							});
							that.css({
								'width': (width * 0.9999999) / 2,
								'height': Math.ceil(height) / 2
							});
							that.attr('class', id + ' teaser')
							var e = that;

							for (var i = 0; i < 3; i++) {
								e.html(`
								<div class="teaserinner">
									<div class="image off"><img src="` + shapes[Math.floor(Math.random() * 20)] + `"></div>
								</div>`);
								e.children().children().css("transform", "rotate(" + randomRot[Math.floor(Math.random() * 4)] + "deg)");
								e.clone().insertAfter(e);
							}

							$('.' + id).wrapAll("<div class='grid-item'></div>");
							that.parent('.grid-item').css({
								'width': width,
								'height': height
							});

							nonodo = 'false';
						}

						setTimeout(function () {
							nonodo = 'true';
						}, 20);
					} else {
						console.log('else')
						if (width >= vw * 10) {
							that.children().children('.image').css({
								'height': imgheight / 2,
								'top': (firstheight + firsttop2 * 1.75) / 2,
								'left': imgleft / 2,
								'width': (imgwidth / 2.005)
							})
							that.css({
								'width': (width * 0.9999999) / 2,
								'height': Math.ceil(height) / 2
							});
							that.attr('class', id + ' teaser')
							var e = that;
							for (var i = 0; i < 3; i++) {
								e.html(`
								<div class="teaserinner">
									<div class="image off"><img src="` + shapes[Math.floor(Math.random() * 20)] + `"></div>
								</div>`);
								e.children().children().css("transform", "rotate(" + randomRot[Math.floor(Math.random() * 4)] + "deg)");
								e.clone().insertAfter(e);
							}

							$('.' + id).wrapAll("<div class='grid-item'></div>");
							that.parent('.grid-item').css({
								'width': width,
								'height': height
							});

							nonodo = 'false';
						}

					setTimeout(function () {
						nonodo = 'true';
					}, 20);
				}
			}
	})
});
