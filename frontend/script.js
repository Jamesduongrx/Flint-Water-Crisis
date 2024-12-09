// JavaScript to handle tab switching
document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
  
        // Remove 'active' class from all tabs and contents
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
  
        // Add 'active' class to the clicked tab and corresponding content
        const targetTab = event.target.getAttribute('data-tab');
        event.target.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
      });
    });
  });
  