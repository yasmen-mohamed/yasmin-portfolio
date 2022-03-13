let aboutOffset=$("#aboutMe").offset().top;
let portfolioOffset=$("#portfolio").offset().top;
let portfolioItem=document.querySelectorAll(".portfolio-item");

$(window).scroll(function(){
    let wScroll=$(window).scrollTop();
    if(wScroll>aboutOffset -20)
    {
        // window.alert("hi");
        $("#main-nav").css("backgroundColor","rgba(0,0,0,0.6)");
        $("#main-nav").css("padding","0px 60px");
        $("#btnUp").fadeIn(500);//Azhr el button fe 1/2 s
    }
    else
    {
        $("#main-nav").css("backgroundColor","transparent");
        $("#main-nav").css("padding","0px 0px");
        $("#btnUp").fadeOut(500);//A5fe el button fe 1/2 s
            
    }
    // if(wScroll>portfolioOffset -50)
    // {
    //     $("#portfolio").slideUp(1000);
    // }
})
// $(window).scroll(function(){
//     let wScroll=$(window).scrollTop();
//     if(wScroll> portfolioOffset -20)
//     {
//         // $("#portfolio").slideUp(1000);
//         for(var i=0; portfolioItem.length;i++)
//         {
//             portfolioItem[i].css("width","10%");
//         }
//     }

// })

// $(window).scroll(function(){
//     let wScroll = $(window).scrollTop();//hat el msafa ely b3dtha 3n TOP w7tha fe Let(wScroll)
//     if(wScroll > aboutOffset-20)
//     {
//         $("#main-nav").css("backgroundColor","rgba(0,0,0,0.8)");//Ro7 L navbar fe css w5le backgroundColor>>rgba(0,0,0,0.8)
//         $("#main-nav").css("padding","0px 60px");//w5le el pading >>0px 60px
//         $("#btnUp").fadeIn(500);//Azhr el button fe 1/2 s
//     }
//     else
//     {
//         $("#main-nav").css("backgroundColor","transparent");
//         $("#main-nav").css("padding","0px 0px");
//         $("#btnUp").fadeOut(500);//A5fe el button fe 1/2 s
//     }

//Button UP
$("#btnUp").click(function(){//Lma 2dos 3la (btnUp)
    $("html,body").animate({scrollTop:0} , 1000);//5le property scrollTop bta3 el sf7a b >>0 fe 2s 
});

//Eltn2ol ben el sections
//$("a").not("a[href^='http']")
$("a[href^='#']").click(function(eventInfo){//Lma 2dos 3la Ae link goah href wbybd2 b>>(#)
    let aHref = $(eventInfo.target).attr("href");//Ro7 L link ely dost 3leh>>el attribut(href)bta3oh w7to fe Let(aHref)
    let sectionOffset = $(aHref).offset().top;//hat bo3doh 3n Top w7toh fe Let(sectionOffset)
    $("html,body").animate({scrollTop:sectionOffset} , 2000);//ab3d 3n scrollTop 3la 2d bo3doh

} )

//liading screen
$(document).ready(function()
{
    $("#loading").fadeOut(2000);
    $("body").css("overflow","auto");

    // //typed.js
    // var typed = new Typed('.element', {
    //     // Waits 1000ms after typing "First"
    //     strings: ['Front-end Developer ^3000', 'rooooot'],
    //     loopCount: Infinity,
    //     typeSpeed: 50,
    //     showCursor: true,
    //     cursorChar: '|',
    //     autoInsertCss: true,
    //   });
})