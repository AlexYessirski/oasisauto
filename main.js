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



window.onload = function() {
   document.getElementById('email-form').addEventListener('submit', function(event) {
       event.preventDefault();
       // generate a five digit number for the contact_number variable
       this.contact_number.value = Math.random() * 100000 | 0;
       // these IDs from the previous steps
       emailjs.sendForm("service_6o1c9mw", "email_form", this)
           .then(function() {
               console.log('SUCCESS!');
           }, function(error) {
               console.log('FAILED...', error);
           });
   });
}



function sendMail() {
   var params = {
      contact_number: Math.random() * 100000 | 0,
   form_name: document.getElementById('form-name').value,
   form_email: document.getElementById('form-email').value,
   form_service: document.getElementById('form-service').value,
   form_phone: document.getElementById('form-phone').value,
   form_message: document.getElementById('form-message').value,
   };

   const serviceID = "service_gs3sjsd";
   const templateID = "email_form";

   emailjs.send(serviceID, templateID, params)
   .then((res) => {
      document.getElementById('email-form').reset()
      console.log(res);
      alert("Message Sent Sucessfully!")
   })
   .catch((err) => console.log(err));
}