function show_history() {
    var content = 'his';
    $('.display').html(content);
    $('a[href="#members"]').removeClass('selected');
    $('a[href="#history"]').addClass('selected');
}

function show_members() {
    var content = 'mem';
    $('.display').html(content);
    $('a[href="#history"]').removeClass('selected');
    $('a[href="#members"]').addClass('selected');
}

function set_display() {
    
}

$(function() {
    var display_content = window.location.hash;

    if (display_content == "#members") show_members();
    else show_history();

    $('a[href="#history"]').on('click', show_history);
    $('a[href="#members"]').on('click', show_members);
})