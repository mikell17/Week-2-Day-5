$('button').on('click', (button) => {
  console.log("Yeah, you clicked me")
});

$('#second').on('click', () => {
  $('#first').text('First button')
});
