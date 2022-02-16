function show_history() {
    var content = '';

    HISTORY.forEach(function (history) {
        var log_content_list = history.log.map(function (log) {
            var term;
            if (log.src_date == log.dst_date) {
                term = log.src_date;
            } else {
                term = log.src_date + ' - ' + log.dst_date;
            }

            var tags = log.tag_list.map(function(role) {
                var my_role = TAG[role];
                if (!my_role)
                    return `<span class="tag-none">${role}</span>`;
                return `<span class="${TAG[role].class}">${TAG[role].content}</span>`;
            }).join('');

            return `
                <tr>
                    <td>
                        <div class="row">
                            <div class="col-sm-9">
                                <div class="title">${log.title}</div>
                            </div>
                            <div class="col-sm-3">
                                <div class="tag">${tags}</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="term">${term}</div>
                            </div>
                        </div>
                    </td>
                </tr>
                `
        });
        content += `<h3>${history.year}</h3><table>${log_content_list.join('')}</table>`
    });

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

function show_banner() {
    
}

$(function() {
    var display_content = window.location.hash;

    if (display_content == "#members") show_members();
    else if (display_content == "#history") show_history();
    else show_banner();

    $('a[href="#history"]').on('click', show_history);
    $('a[href="#members"]').on('click', show_members);
})