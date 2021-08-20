const click = document.querySelector('.nav-click');
const nav = document.querySelector('.navigaton');
const navlist = document.querySelector('.nav-list');
const navlink = document.querySelectorAll('.nav-link');

click.addEventListener('click',function(){
navlist.classList.toggle('active');
navlink.forEach((e) => {
e.classList.toggle('active');
})
});