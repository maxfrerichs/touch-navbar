var touchField = document.getElementById('touch-container');
var hamburgerIcon = document.getElementById('hamburger-icon');
var navList = document.getElementById('nav-list');
var initialPosition = 0;
var distance;
var navbarItem = document.getElementsByClassName('navbar-item');


// Registers beginning of touch event and saves coords for distance calculation
touchField.addEventListener('touchstart', function(event) {
    var touchObject = event.changedTouches[0];
    initialPosition = parseFloat(touchObject.clientX);
    console.log("Initial position: " + initialPosition);
    event.preventDefault();
}, false)


// listens to 
touchField.addEventListener('touchmove', function(event) {
    var touchObject = event.changedTouches[0];
    distance = parseFloat(touchObject.clientX) - initialPosition
    console.log("Distance: " + distance);
    requestAnimationFrame(function() {
        if(navList.style.display === 'none' || navList.style.display === '') {
            navList.style.display = 'flex';            
        }
        navList.style.width = distance + "px";
    });
    
    // prevent event from doing shit
    event.preventDefault();
}, false)


// registers end of touch and triggers animation 
touchField.addEventListener('touchend', function(event) {
    var width = parseFloat(navList.style.width);
    
    // TODO: Implement animation for touchend
    if(distance < initialPosition) {
        console.log("Collapse!")

    } else if(distance > initialPosition) {
        console.log("Expand!")
        requestAnimationFrame(function() {
            animationDistance = width - distance;
            while(navList.style.width <= 300 + "px") {
                navList.style.width += animationDistance + "px"    
                animationDistance++;        
            }
        })
    }
    console.log('touch event stopped!')
}, false)


hamburgerIcon.addEventListener('click', function(event) {
    console.log(navList.style.clientWidth);
    navList.style.width = '300px';
    if(navList.style.display === 'none' || navList.style.display === '') {
        navList.style.display = 'flex';
    } else if(navList.style.display === 'flex'){
        navList.style.display = 'none';
    }
})
