const navEmail = document.querySelector('.navbar-email');
const hamIcon = document.querySelector('.menu');

navEmail.addEventListener('click',function(){
    const menu =  document.querySelector('.desktop-menu');
        menu.classList.toggle('inactive');
});

hamIcon.addEventListener('click',function(){
    const mobilemenu = document.querySelector('.mobile-menu');
        mobilemenu.classList.toggle('inactive');
});