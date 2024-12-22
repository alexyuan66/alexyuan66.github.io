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

// Experience animation
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

// Skills blue bar animation
const pathElements = Array.from(document.querySelectorAll('*')).filter((el) =>
    Array.from(el.classList).some((cls) => cls.startsWith('path-'))
  );
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
        console.log("here")
        if (entry.isIntersecting) {
            const pathClass = Array.from(entry.target.classList).find((cls) =>
              cls.startsWith('path-')
            );
            if (pathClass) {
              let animationName;
              if (pathClass === 'path-1' || pathClass === 'path-2' || pathClass === 'path-3' || pathClass === 'path-17' || pathClass === 'path-21' || pathClass === 'path-23' || pathClass === 'path-24') {
                animationName = 'animate-path1';
              } else if (pathClass === 'path-4' || pathClass === 'path-8' || pathClass === 'path-11' || pathClass === 'path-18' || pathClass === 'path-22') {
                animationName = 'animate-path2';
              } else if (pathClass === 'path-5' || pathClass === 'path-6' || pathClass === 'path-9' || pathClass === 'path-10' || pathClass === 'path-12' || pathClass === 'path-13' || pathClass === 'path-14' || pathClass === 'path-19' || pathClass === 'path-20') {
                animationName = 'animate-path3';
              } else if (pathClass === 'path-7' || pathClass === 'path-15' || pathClass === 'path-16') {
                animationName = 'animate-path4';
              }
              entry.target.style.animation = `${animationName} 0.75s 0.75s linear forwards`;
            }
        }
        else {
            entry.target.style.animation = 'none';
        }
    });
  },
  {
    threshold: 0.05,
  }
);

pathElements.forEach((path) => observer2.observe(path));

// Skills black bar animation
const progressBars = document.querySelectorAll('.radial-bar .progress-bar');
const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'animate-bar 0.75s linear forwards';
      } else {
        entry.target.style.animation = 'none';
      }
    });
  },
  {
    threshold: 0.05,
  }
);
progressBars.forEach((bar) => observer3.observe(bar));


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