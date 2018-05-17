require(['jquery', 'swiper', 'bscroll', 'handlebars', 'render', 'upLoading'], function ($, swiper, bscroll, handlebars, render, upLoading) {
    var str = '';
        var local = window.localStorage;
        var mySwiper = new swiper('.cont', {
            loop:true,
            pagination:{
                el:".swiper-pagination",
                type:'progressbar'
            },
            autoplay:{
                delay:1000
            }
        })
        var myScroll = new bscroll('.scroll',{
            scrollbar:true,
            click:true,
            probeType:2
        });
        var myScroll1 = new bscroll('.left-scroll', {
            scrollbar:true,
            click:true
        })
        loag();
        function loag() {
            $.ajax({
                url:'/loing',
                success:function (data) {
                    render(data, '#tpem', '.content')
                    click(); 
                }
            })
        }
        function click() {
            $('.content').on('click', 'dl', function () {
                location.href = './xiang.html';
            })
        }   
        upLoading(myScroll, '.content u', loag)


            $('.header span').on('click', function () {
                $('.left').css({"left": 0, "opacity": 1})
            })
            $('.headers i').on('click', function () {
                $('.left').css({"left": "-100%", "opacity": 0})
            })
            $('.list li').on('click', function () {
                var city = local.getItem('city');
                $('.header span').html(city);
                var key = $(this).html();
                local.setItem('city',key);
                $(this).toggleClass('li-active').siblings().removeClass('li-active');
            })



})