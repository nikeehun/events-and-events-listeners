$('#first').click((event) => {
    console.log('Yeah, you clicked me')
}
);

if ($('#second').click((event) => {
    $('#first').text("But I'm nicer")
}));

if ($('#third').click((event) => {
    let color = $("#color").val();
    //$('button').css('background-color', 'lime')
    //$("body").css("background-color", color);
    $("button").css("background-color", color);

}));