function show_history() {
    var content = 'his';
    $('.display').html(content);
    $('a[href="#members"]').removeClass('selected');
    $('a[href="#history"]').addClass('selected');
}

function show_members() {
    var content = '';

    Object.keys(MEMBERS).forEach(function(key) {
        var member_list = MEMBERS[key];
        var member_content_list =  member_list.map(function(member) {
            var roles = member.role_list.map(function(role) {
                var my_role = ROLE[role];
                if (!my_role)
                    return `<span class="role-none">${role}</span>`;
                return `<span class="${ROLE[role].class}">${ROLE[role].content}</span>`;
            }).join('');

            return `
                <tr>
                    <td>
                        <div class="row">
                            <div class="col-sm-6">
                                <span class="name">${member.name}</span>
                                <span class="nickname">${member.nickname}</span>
                            </div>
                            <div class="col-sm-6">
                                <div class="role">${roles}</div>
                            </div>
                    </td>
                </tr>
            `;
        });

        content += `<h3>${key}</h3><table>${member_content_list.join('')}</table>`
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