define([
    'jquery',
    'handlebars'
], function($, Handlebars) {
    function render(info, tpl, tar) {
        var source = $(tpl).html();
        var tpone = Handlebars.compile(source);
        Handlebars.registerHelper('addIndex', function (index) {
            return index + 1;
        })
        var html = tpone(info);
        $(tar).append(html)
    }
    return render;
});