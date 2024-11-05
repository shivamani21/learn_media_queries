// JavaScript to handle button click
document.getElementById('changeColorButton').addEventListener('click', function() {
    const mainSection = document.querySelector('main');
    mainSection.style.backgroundColor =
      mainSection.style.backgroundColor === 'lightcoral' ? 'white' : 'lightcoral';
  });
   