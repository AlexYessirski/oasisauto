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

//email function using SmtpJS.com library

function sendEmail() {
   Email.send({
      Host : "smtp.elasticemail.com",
      Username : "quintustemp@gmail.com",
      Password : "2DB632A977502B7AB33805FE6A01810A1367",
      To : 'quintustemp@gmail.com',
      From : document.getElementById("form-email").value,
      Subject : "OASIS AUTO APPOINTMENT: #" + Date.now() + Math.random(),
      Body : "Name: " + document.getElementById("form-name").value
             + "<br> Email: " + document.getElementById("form-email").value 
             + "<br> Service: " + document.getElementById("form-service").value 
             + "<br> Phone: " + document.getElementById("form-phone").value 
             + "<br> Body: " + document.getElementById("form-message").value 
  }).then(
    message => alert("Message Sent!")
  );
}