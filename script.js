let counter = 0;

document.querySelector('.avatar-container').addEventListener('click', (event) => {
    counter += 15;
    document.querySelector('.counter').textContent = counter;

    const incrementDisplay = document.createElement('div');
    incrementDisplay.textContent = '+15';
    incrementDisplay.classList.add('increment-display');
    document.querySelector('.avatar-container').appendChild(incrementDisplay);

    // Calculate click position
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    incrementDisplay.style.left = `${x}px`;
    incrementDisplay.style.top = `${y}px`;

    setTimeout(() => {
        incrementDisplay.classList.add('hidden');
        setTimeout(() => {
            incrementDisplay.remove();
        }, 1000);
    }, 500);
});
