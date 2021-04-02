const sections = document.querySelectorAll('.body-section');

const navBar = document.querySelector('.nav-bar');
const navMenu = document.createElement('ul');

const navTitles = document.querySelectorAll('h2');

//Select section headers to populate navbar
const titleName = function(x){
    return navTitles[x].innerHTML;
};

//creates dynamic navbar based on sections
function createNav(){
    for (let i = 0; i < sections.length; i++){
        let li = document.createElement('li');
        let anchor = document.createElement('a');
        li.appendChild(anchor);
        anchor.href="#section" + (i + 1);
        anchor.textContent= `${titleName(i)}`;
        navMenu.appendChild(li);
    }
    navBar.appendChild(navMenu);
}

createNav();

//gives boolean value if section is in viewport
function isInViewport(e) {
    let bounding = e.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//highlights corresponding section of navbar if section is in viewport
const navHighlight = document.querySelectorAll('li');

function highlightSection(){
    for (let i=0; i<sections.length; i++) {
        if (isInViewport(sections[i]) === true) {
            navHighlight[i].classList.add('section-highlight')
        } else navHighlight[i].classList.remove('section-highlight');
    }
}


document.addEventListener('scroll', function(){
    highlightSection();
}
);
