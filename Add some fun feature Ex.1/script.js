$('button').on('click', (button) => {
  console.log("Yeah, you clicked me")
});

$('#second').on('click', () => {
  $('#first').text('First button')
});

$('#third').click(() => {
	$("#color").attr("type","text")
});

let color;

$('#third').click(() => {
	color = $('input').val();
	$('button').css('background-color', `${color}`);
});
