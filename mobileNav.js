
const MobileNavButton = document.querySelector('.MobileNavBtn');
const HelloMessage = document.querySelector('.HelloMessage'); 

const MobileNav = document.createElement('div');
MobileNav.classList = 'MobileNav';
MobileNav.innerHTML = `
<li><a href="./michi.html">Michi</a></li>
<li><a href="./john.html">John</a></li>
`;
MobileNav.style.display = 'none';

HelloMessage.prepend(MobileNav);

MobileNavButton.addEventListener('click', () => {
    $(MobileNav).toggle(300);
});