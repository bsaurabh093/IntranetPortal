$('#header').load('header.html');
$('.sideNav').load('sideNav.html');
$('#footer').load('footer.html');

// Add class when screen scroll 280px
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 280) {
        $(".sticky").addClass("stickyItem");
    } else {
        $(".sticky").removeClass("stickyItem");
    }
});


$(window).resize(function() {
if ($(window).width() < 767) {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $(".sideNav").addClass("stickySideNav");
        } else {
            $(".sideNav").removeClass("stickySideNav");
        }
    });
} 
// else {
//     $('.sticky').removeClass('f-nav');
// }
}).resize();

$(document).ready(function(){
    $('.favApps').click(function(){
        $('.showAppsHeader').show();
        $('.showLanguageHeader').hide();
        $('#searchInput').hide();
    });

    $('.language').click(function(){
        $('.showLanguageHeader').show();
        $('.showAppsHeader').hide();
        $('#searchInput').hide();
    });

    $('#searchs').click(function(){
        $('#searchInput').show();
        $('.showLanguageHeader').hide();
        $('.showAppsHeader').hide();
    });

});


$(document).ready(function(){
    $('.favApps').click(function(){
        $('.myApps').toggleClass('showAppsHeader');
        // $('.search .show').css('display', 'none');
        // $('.showLanguageHeader').css('display', 'none');
        if($('.showLanguageHeader').css('display', 'block')){
            $('.showLanguageHeader').hide();
        }else{
            $('.showLanguageHeader').show();
        }
    });
    $('.myApps').click(function(){
        event.stopPropagation();    
    })

    $('body').click(function(){
        $('.myApps').removeClass('showAppsHeader');
    });
    $('.favApps').click(function(){
        $('.myApps').toggleClass('showAppsHeader');
        if($('.myApps').hasClass('showAppsHeader')){
            $('.myApps').removeClass('showAppsHeader');
        }else{
            $('.myApps').addClass('showAppsHeader');
        }
        event.stopPropagation();
    });
});

$(document).ready(function(){
    $('.language').click(function(){
        $('.languageDropdown').toggleClass('showLanguageHeader');
        // $('.search .show').css('display', 'none');
        // $('.showAppsHeader').css('display', 'none');
        
    });
    $('.languageDropdown').click(function(){
        event.stopPropagation();    
    })

    $('body').click(function(){
        $('.languageDropdown').removeClass('showLanguageHeader');
    });
    $('.language').click(function(){
        $('.languageDropdown').toggleClass('showLanguageHeader');
        if($('.languageDropdown').hasClass('showLanguageHeader')){
            $('.languageDropdown').removeClass('showLanguageHeader');
        }else{
            $('.languageDropdown').addClass('showLanguageHeader');
        }
        event.stopPropagation();
    });
});

// Accordion on Department page 
$(window).ready(function(){
    
    $('.dropLeft').click(function(){
        $('.dropLeftInner').toggle(300);
        });
        
        $('.dropRight').click(function(){
        $('.dropRightInner').toggle(300);
        });
        
        // $('.drop1').click(function(){
        // $('.dropInner1').toggle(300);
        // });
 });

// Add class when screen scroll by 200px
$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if(scroll >= 200){
        $('#responsiveHide').addClass('fixedResponsiveHide');
    }else {
        $('#responsiveHide').removeClass('fixedResponsiveHide');
    }
});


$(document).ready(function(){
    $('#searchs').click(function(){
        $('#searchInput').toggleClass('show');
        // $('.showLanguageHeader').css('display', 'none');
        // $('.showAppsHeader').css('display', 'none');
    });
    $('#searchInput').click(function(){
        event.stopPropagation();
        // $('.showLanguageHeader').css('display', 'none');
        // $('.showAppsHeader').css('display', 'none');
    })

    $('body').click(function(){
        $('#searchInput').removeClass('show')
    });
    $('#searchs').click(function(){
        
        $('#searchInput').toggleClass('show');
        if($('#searchInput').hasClass('show')){
            $('#searchInput').removeClass('show');
            
        }else{
            $('#searchInput').addClass('show');
        
        }
        event.stopPropagation();
    });

    $(document).on('click','#responsiveHide',function(){
      $('.sideNav').toggleClass('sideNavShow');

 });
    
})



