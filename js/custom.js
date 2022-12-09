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

// var myDropdown = document.getElementById('myDropdown');
// var dropBtn = document.get

// myDropdown.addEventListener('click' , function(){
//     myDropdown.classList.toggle('show');
// });

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var dropdown = document.getElementsByClassName("dropdown");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//         $(".menu li").removeClass("active");
//       }
//     }
//   }
// }

var list =document.querySelectorAll('.menu ul li');

list.addEventListener('click' , function(){
    alert('enter');
    var i;
for(var i=1; i<list.length; i++){
    if(list.classList.contains('dropdown')){
        list.classList.addClass('showDrop');
    }else{
        list.contains.removeClass('showDrop')
    }
};
});




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






// $(document).ready(function(){

// // var dropdownlist = document.getElementsByClassName('.menu li');


//     $('.dropdown').click(function(){
//         // $(this).siblings().find('.showDrop').addClass("hiii");
//         $(this).toggleClass('showDrop');

//     });

    
// });




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


// var dropInner = [];

// $(document).ready(function(){
//     $('.dropInner li').each(function(){
//         $(this).find('.drop').each(function(){
//             alert("doe")
//             // $(this).addClass('activeDrop');
//         })
//     })
//     });

// var mycompliance1arrayNGLPG = [];
// $('#Complianceel tr').each(function () { //Working for 9 a
//     $(this).find(".coaas1").each(function () {
//         console.log($(this).val());
//         mycompliance1arrayNGLPG.push($(this).val());
//     });



// });





 