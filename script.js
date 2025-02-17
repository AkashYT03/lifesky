// Tab Navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    // Remove active class from all links and sections
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    document.querySelectorAll('section').forEach(section => section.classList.remove('active-section'));

    // Add active class to clicked link and corresponding section
    this.classList.add('active');
    document.querySelector(this.getAttribute('href')).classList.add('active-section');
  });
});

// Connect Server Button
function connectServer() {
  const ip = "play.lifesky.com"; // Replace with your server IP
  alert(`Connect to our server at ${ip}`);
}

// Buy Rank Button
function buyRank(rank) {
  alert(`Thank you for purchasing the ${rank} rank! Redirecting to the payment page...`);
  // Replace with your payment link
  window.location.href = "https://example-store.com";
}
