document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.translation-toggle-btn');

    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const textBlock = button.closest('.text-block');
            const originalText = textBlock.querySelector('.original-text');
            const translatedText = textBlock.querySelector('.translated-text');

            if (translatedText.hidden) {
                translatedText.hidden = false;
                originalText.hidden = true;
                button.textContent = 'See Original';
            } else {
                translatedText.hidden = true;
                originalText.hidden = false;
                button.textContent = 'See Translation';
            }
        });
    });
});