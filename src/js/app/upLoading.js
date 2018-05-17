define([
    'jquery',
    'bscroll'
], function($, scroll) {
    function upLoading (scrollbar, el, ren) {
        scrollbar.on('scroll', function () {
            if (this.y < this.maxScrollY - 100) {
                $(el).html('释放加载');
                console.log(this.maxScrollY)
            } else if (this.y < this.maxScrollY - 80) {
                $(el).html('上拉加载');
            }
        })
        scrollbar.on('scrollEnd', function () {
            $(el).html('上拉加载');
        })
        scrollbar.on('touchEnd', function () {
            if ($(el).html() === '释放加载') {
                ren();
                scrollbar.refresh();
            }
        })
    }
    return upLoading
});