require(['jquery', '@js/core'], ($) => {
	let navUpdated = false

	window.UpdateNav = function () {
		if (navUpdated) return;
		navUpdated = true;

		$('nav h3').each((i, e) => {
			let icon = $('<i class="Link material-icons">arrow_right</i>')
			$(e).prepend(icon)
			icon.on('click', (event) => {
				event.preventDefault()
				if (e.nextElementSibling.style.display != 'none') {
					$(e.nextElementSibling).hide('slide', {direction: 'up'})
					icon.text('arrow_right')
				} else {
					$(e.nextElementSibling).show('slide', {direction: 'up'})
					icon.text('arrow_drop_down')
				}
				return false
			})
			$(e.nextElementSibling).hide()
		})

		$('nav li a').each((i, e) => {
			if (e.nextElementSibling !== null) {
				let icon = $('<i class="Link material-icons">arrow_right</i>')
				$(e).prepend(icon)
				icon.on('click', (event) => {
					event.preventDefault()
					if ($(e).data('collapsed')) {
						icon.text('arrow_drop_down')
						$(e).siblings('ul').show('slide', {direction: 'up'})
						$(e).data('collapsed', false)
					} else {
						icon.text('arrow_right')
						$(e).siblings('ul').hide('slide', {direction: 'up'})
						$(e).data('collapsed', true)
					}
					return false
				})
				icon.text('arrow_right')
				$(e).siblings('ul').hide('slide', {direction: 'up'})
				$(e).data('collapsed', true)
			}
		})

		$('nav a').each((i, e) => {
			if (location.href.endsWith($(e).attr('href'))) {
				$(e).parents('ul').each((ii, ee) => {
					$(ee).show()
					$(ee).siblings('ul').show()
					$(ee).siblings('a').find('.Link').text('arrow_drop_down')
				})
			}
		})

		$('nav').on('mouseleave', () => {
			if (!$('.PinMenu').is('.Pinned')) {
				$('nav').hide('slide', {direction: 'left'}, () => {
					$('.ShowMenu').show('fade')
				})
			}
		})

		$('.PinMenu').on('click', () => {
			$('.PinMenu').toggleClass('Pinned')
		})

		$('.ShowMenu').on('click', () => {
			$('.ShowMenu').hide('fade', () => {
				$('nav').show('slide', {direction: 'left'})
			})
		})

		$('.ShowMenu').on('mouseover', () => {
			$('.ShowMenu').css('display', 'none')
			$('nav').show('slide', {direction: 'left'})
		})
	}

	$(() => {



		setTimeout(() => {
			UpdateNav()
		}, 1000)
	})
})
