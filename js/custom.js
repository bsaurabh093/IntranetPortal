$('#header').load('header.html');
$('.sideNav').load('sideNav.html');
$('#footer').load('footer.html');


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 280) {
        $(".sticky").addClass("stickyItem");
    } else {
        $(".sticky").removeClass("stickyItem");
    }
});



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var dropdown = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        $(".menu li").removeClass("active");
      }
    }
  }
}

// var dropbtn = document.querySelector(".dropbtn");
// dropbtn.addEventListener('click' , function(){
// })

// $(window).resize(function () {
//     if (width <= '767px') {
//         if (scroll >= 20) {
//             alert("20");
//             // $(".sticky").addClass("stickyItem");
//         } else {
//             $(".sticky").removeClass("stickyItem");
//         }
//     }
//     });

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
       
    });
    $('#searchInput').click(function(){
        event.stopPropagation();
       
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
    
});


$(document).ready(function(){
    $('#responsiveHide').click(function(){
        $('.sideNav').toggleClass('sideNavShow');
    });
});


$(window).resize(function(){
    var width = $(window).width();
    if(width < 767){
        $('.sticky').removeClass('stickyItem');
    }else{
        $('.sticky').addClass('stickyItem');
    }
})
 .resize();//trigger the resize event on page load.

$('.dropLeft').click(function(){
$('.dropLeftInner').toggle(300);
});

$('.dropRight').click(function(){
$('.dropRightInner').toggle(300);
});

$('.drop1').click(function(){
$('.dropInner1').toggle(300);
});


const accordion = document.getElementsByClassName('contentBox');

for(i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click' , function(){
        this.classList.toggle('active');
    })
}

//  $('.dropRight').click(function(){
//     $('.dropRightInner').toggle(300);
//  });

 