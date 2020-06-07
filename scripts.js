$('#first').click((event) => {
    console.log('Yeah, you clicked me')
}
);

if ($('#second').click((event) => {
    $('#first').text("But I'm nicer")
}));


if ($('#third').click((event) => {
    let color = $("#magic").val();
    $("button").css("background-color", color);

}));


