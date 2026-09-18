// Ella button-galaiyum select seigirom
const buttons = document.querySelectorAll('.btn');

// Ovvoru button-kkum click event add seigirom
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Button-il ulla 'data-page' value-ai eduthu page open seiyum
        const targetPage = this.getAttribute('data-page');
        window.location.href = targetPage;
    });
});
