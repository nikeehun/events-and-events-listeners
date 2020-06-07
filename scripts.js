$('#first').click((event) => {
    console.log('Yeah, you clicked me')
}
);

if ($('#second').click((event) => {
    $('#first').text("But I'm nicer")
}));

if ($('#third').click((event) => {
    $('button').css('background-color', 'lime')
}));