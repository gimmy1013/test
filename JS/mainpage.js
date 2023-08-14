// function $id(id){
//     return document.getElementById(id)
//   }
//   window.addEventListener("load", function(){
//       let itemView = $id("itemView");
//       let items = document.getElementsByClassName("itemcar");
//       $id("btnLeft").onclick = function(){
//           let last = items[items.length-1];
//           itemView.insertBefore(last, items[0]);
//       }
//       $id("btnRight").onclick = function(){
//           itemView.appendChild(items[0]);
//       }
//   })
$(document).ready(function() {
    var slideIndex = 0;
    var slideWidth = $('.itemcar').outerWidth(true);
    var totalSlides = $('.itemcar').length;
  
    function showSlide(index) {
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }
      $('.newstorage .card').css('transform', 'translateX(-' + (slideWidth * index) + 'px)');
      slideIndex = index;
    }
  
    $('.lebutton').click(function() {
      showSlide(slideIndex - 1);
    });
  
    $('.ributton').click(function() {
      showSlide(slideIndex + 1);
    });
  });