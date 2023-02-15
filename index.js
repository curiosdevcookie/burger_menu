function toggleMenu() {
  const burgerMenu = document.querySelector('.burger-menu');
  burgerMenu.classList.toggle('active');

  const menuItems = document.getElementsByTagName('menu')[0];
  menuItems.classList.toggle('active');
}