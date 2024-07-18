function SMail(type)
{
    var prefix = 'm&#97;&#105;l' + 't&#111;:';
    var pth = 'hr' + 'ef' + '=';
    var ma23456 = '&#109;a' + '&#105;&#108;';
    ma23456 = ma23456 + '&#64;&#109;r&#103;&#116;&#117;l&#97;' + '&#46;' + 'r&#117;';

    if (type == 1) {
        document.write( '<a ' + pth + '\'' + prefix + ma23456 + '\'' + ' title=\'Отправить сообщение по электронной почте\'>' );
        document.write( 'Написать письмо' );
        document.write( '<\/a>' );
    }
    if (type == 2) {
        document.write( '<a ' + pth + '\'' + prefix + ma23456 + '\'' + '>' );
        document.write( ma23456 );
        document.write( '<\/a>' );
    }

    document.write( '<span style=\'display: none;\'>' );
}

function info_slide(infobox)
{
$(infobox).slideToggle(400);
}