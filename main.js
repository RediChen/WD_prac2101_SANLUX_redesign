const tablet = 1025 ; //upper bound + 1
const mobile = 767 ;  //upper bound + 1
const slickTime = 2500 ;

$('#banner').slick(
{
    autoplay: true,
    autoplaySpeed: slickTime,
    cssEase: 'ease-in-out',
    // dots: true,
    responsive: [
        {
            breakpoint: tablet,
            settings: {
                arrows: false
            }
        }]
}) ;
$('#news-card-wrap').slick({
    autoplay: true,
    autoplaySpeed: slickTime,
    slidesToShow: 3,
    cssEase: 'ease-in-out',
    responsive: [
        {
            breakpoint: tablet,//一組分界點設定就要一對大括號
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: mobile,//不用加單位，且是小於
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
});