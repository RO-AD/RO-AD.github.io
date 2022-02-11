function show_history() {
    var content = 'his';
    $('.display').html(content);
    $('a[href="#members"]').removeClass('selected');
    $('a[href="#history"]').addClass('selected');
}

function show_members() {
    var content = 'mem';

    Object.keys(MEMBERS).forEach(function(key) {
        console.log(key)
        content += `<h3>1기</h3>`;
        var member_list = MEMBERS[key];
        member_list.forEach(function(member) {
            console.log(member)
            var member_code = '';
            member_code += '<p>';
            member_code += member.name;
            if (member.nickname != '') {
                member_code += `<span class="">${member.nickname}<span>`;
            }
            member_code += '</p>';

            member_code += `<p>${member.name}`;
            //member_code += `<p>${member.birth}</p>`;
            member_code += `<p>${member.nickname}</p>`;
            //member_code += `<p>${member.email}</p>`;
            member_code += `<p>${member.role}</p>`;
            //member_code += `<p>${member.link}</p>`;
            content += `<div class="card">${member_code}</div>`;
        });
    });

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