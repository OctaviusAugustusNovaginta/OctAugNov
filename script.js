// Add smooth scrolling to navigation links
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('nav a');

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    var targetOffset = targetElement.offsetTop;

    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  }
});
