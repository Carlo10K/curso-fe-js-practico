const navEmail = document.querySelector('.navbar-email');

navEmail.addEventListener('click',function(){
    const menu =  document.querySelector('.desktop-menu');
        menu.classList.toggle('inactive');
});