/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const experienceContainers = document.querySelectorAll('.experience-container');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('animate');
    } else {
    entry.target.classList.remove('animate');
    }
});
});

experienceContainers.forEach(container => {
observer.observe(container);
});
function myFunction4() {
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
    
    if (btnText.innerHTML === "Read less") {
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}
function myFunction5() {
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myBtn5");
    
    if (btnText.innerHTML === "Read less") {
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}
function myFunction6() {
    var moreText = document.getElementById("more6");
    var btnText = document.getElementById("myBtn6");
    
    if (btnText.innerHTML === "Read less") {
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}
function myFunction7() {
    var moreText = document.getElementById("more7");
    var btnText = document.getElementById("myBtn7");
    
    if (btnText.innerHTML === "Read less") {
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}
function myFunction8() {
    var moreText = document.getElementById("more8");
    var btnText = document.getElementById("myBtn8");
    
    if (btnText.innerHTML === "Read less") {
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}
function myFunction9() {
    var moreText = document.getElementById("more9");
    var btnText = document.getElementById("myBtn9");
    
    if (btnText.innerHTML === "Read less") {
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}

$(document).ready(function() {
    $(".education-block").hover(function() {
        $("#more", this).css("max-height", "500px");
    }, function() {
        $("#more", this).css("max-height", "0");
    });
    $(".education-block").hover(function() {
        $("#more2", this).css("max-height", "500px");
    }, function() {
        $("#more2", this).css("max-height", "0");
    });
    $(".education-block").hover(function() {
        $("#more3", this).css("max-height", "500px");
    }, function() {
        $("#more3", this).css("max-height", "0");
    });
});