
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



// for(i = 0; i < acc.length; i++){
//     acc[i].addEventListener('click' , function(){
//         this.classList.toggle('active');
//     });
// }

// For Accordion in Departments

// var list =document.querySelectorAll('.menu ul li');

// list.addEventListener('click' , function(){
//     alert('enter');
//     var i;
// for(var i=1; i<list.length; i++){
//     if(list.classList.contains('dropdown')){
//         list.classList.addClass('showDrop');
//     }else{
//         list.contains.removeClass('showDrop')
//     }
// };
// });





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

// $(window).resize(function(){
//     var width = $(window).width();
//     if(width < 767){
//         $('.sticky').removeClass('stickyItem');
//     }else{
//         $('.sticky').addClass('stickyItem');
//     }
// })
//  .resize();
 //trigger the resize event on page load.