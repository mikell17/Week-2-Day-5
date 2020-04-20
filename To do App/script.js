  $('button').on('click', (button) => {
    $('ul').append(`<li><span>${$('input').val()}</span></li>`);
	$('ul').on('click', 'li', (event) => {
		 $(event.target).css('text-decoration', 'line-through');
	});
  });
  