document.getElementById("newsletter-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  
  if (email) {
      alert(`Thank you for subscribing, ${email}!`);
  }
});
