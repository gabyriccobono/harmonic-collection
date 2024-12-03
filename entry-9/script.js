document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.translation-toggle-btn');
    const originalText = document.querySelector('.original-text');
    const translatedText = document.querySelector('.translated-text');

    toggleButton.addEventListener('click', () => {
        if (translatedText.hidden) {
            translatedText.hidden = false;
            originalText.hidden = true;
            toggleButton.textContent = 'See Original';
        } else {
            translatedText.hidden = true;
            originalText.hidden = false;
            toggleButton.textContent = 'See Translation';
        }
    });
});