let slideIndex = 1; // Variabel som håller koll på vilken slide som är aktiv

showSlides(slideIndex); // Visar den första bilden

function plusSlides(n) {
  showSlides((slideIndex += n)); // Flyttar slideIndex med n och visar bilden
}

function currentSlide(n) {
  showSlides((slideIndex = n)); // Ställer in slideIndex på n och visar bilden
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides"); // Hämtar alla bilder
  let dots = document.getElementsByClassName("dot"); //Får alla prickar

  // Kontrollerar om n är större än antalet bilder och ställer in slideIndex till 1 om det är
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Kontrollerar om n är mindre än 1, och ställer in slideIndex till antalet bilder om det är
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Gå igenom alla bilderna och göm dem
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Tar bort den "aktiva" klassen från alla punkter
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Visar den aktuella bilden och lägger till den "aktiva" klassen till den aktuella punkten
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}