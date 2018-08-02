var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow__item");
    var dots = document.getElementsByClassName("slideshow__dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slideshow__dot--active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " slideshow__dot--active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}