//Change logo to be invisible on scroll

//When the window is scrolled, the function navscroll is called
//using an inline declaration
window.onscroll = function() {navScroll()};

//defining the function navscroll
function navScroll() {
   //first get the nav logo element into a variable 
   //if we scroll 80px from the top of the body or the top element, trigger code
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop) {
      //code to be triggered is to force navLogo to change opacity
      //we already defined the transition timer in the css to 0.4s
      document.getElementById("logo").style.opacity = "0";
      document.getElementById("nav").style.opacity = "0";
   } else {
      document.getElementById("logo").style.opacity = "100%";
      document.getElementById("nav").style.opacity = "100%";
   }
}