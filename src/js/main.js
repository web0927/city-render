require.config({
    paths:{
        'jquery':'./libs/jquery-2.1.1',
        'swiper':'./libs/swiper-4.1.6.min',
        'bscroll':'./libs/bscroll.min',
        // 'bootstrap':'./libs/bootstrap.min',
        'handlebars':'./libs/handlebars',
        'index':'./app/index',
        'render':'./app/render',
        'upLoading':'./app/upLoading',
        'getRequest':'./app/getRequest'
        
    }
})
require(['index'])