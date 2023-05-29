const questions = document.querySelectorAll('.question'); // Hämtar alla element med klassen "question" och lagrar dem i variabeln questions.
let selectedOptions = []; // Skapar en tom array för att lagra de valda alternativen i varje fråga.

questions.forEach((question, index) => {
  const options = question.querySelectorAll('input[type="radio"]'); // Hämtar alla radioknappar inom den aktuella frågan och lagrar dem i variabeln options.
  selectedOptions[index] = ''; // Sätter det valda alternativet för den aktuella frågan till en tom sträng.

  options.forEach(option => {
    option.addEventListener('change', function() {
      const choices = Array.from(question.querySelectorAll('.option')); // Hämtar alla valmöjligheter inom frågan och lagrar dem i en array.
      const selectedChoice = this.parentElement; // Hittar förälderelementet (valmöjligheten) för det valda alternativet.

      choices.forEach(choice => {
        choice.classList.remove('correct', 'wrong'); // Tar bort klasserna 'correct' och 'wrong' från varje valmöjlighet.
      });

      if (selectedChoice.querySelector('input:checked').classList.contains('correct')) {
        selectedOptions[index] = this.nextElementSibling.textContent; // Lagrar det valda alternativets text i selectedOptions-arrayen.
        selectedChoice.classList.add('correct'); // Lägger till klassen 'correct' på det valda alternativet för att markera det som korrekt.
        console.log('Fråga', index + 1, ' - Rätt svar:', selectedOptions[index]); // Skriver ut meddelande med indexet för frågan och det korrekta svaret.
      } else {
        selectedChoice.classList.add('wrong'); // Lägger till klassen 'wrong' på det valda alternativet för att markera det som felaktigt.
        console.log('Fråga', index + 1, ' - Fel svar:', this.nextElementSibling.textContent); // Skriver ut meddelande med indexet för frågan och det felaktiga svaret.
      }
    });
  });
});