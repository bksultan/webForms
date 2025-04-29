// common.js – Handles nav menu state and logout
document.addEventListener('DOMContentLoaded', function() {
  // Toggle nav items based on login status
  const loggedUser = localStorage.getItem('loggedUser');
  if (loggedUser) {
    // User is logged in
    document.getElementById('nav-dashboard').classList.remove('d-none');
    document.getElementById('nav-logout').classList.remove('d-none');
    document.getElementById('nav-login').classList.add('d-none');
    document.getElementById('nav-register').classList.add('d-none');
    // Show admin link only for admin user
    const role = localStorage.getItem('userRole');
    if (role === 'admin') {
      document.getElementById('nav-admin').classList.remove('d-none');
    } else {
      document.getElementById('nav-admin').classList.add('d-none');
    }
  } else {
    // Not logged in
    document.getElementById('nav-dashboard').classList.add('d-none');
    document.getElementById('nav-admin').classList.add('d-none');
    document.getElementById('nav-logout').classList.add('d-none');
    document.getElementById('nav-login').classList.remove('d-none');
    document.getElementById('nav-register').classList.remove('d-none');
  }

  // Logout link handler
  const logoutLink = document.getElementById('nav-logout');
  if (logoutLink) {
    logoutLink.addEventListener('click', function(e) {
      e.preventDefault();
      localStorage.clear();
      window.location = 'index.html';
    });
  }
});