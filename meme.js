const form = document.querySelector('form');
    const memeContainer = document.querySelector('.meme-container');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the user input values
        const imageInput = document.querySelector('#image-input');
        const topTextInput = document.querySelector('#top-text-input');
        const bottomTextInput = document.querySelector('#bottom-text-input');

        // Create the meme
        const meme = document.createElement('div');
        meme.classList.add('meme');

        const image = document.createElement('img');
        image.src = URL.createObjectURL(imageInput.files[0]);

        const topText = document.createElement('div');
        topText.classList.add('top-text');
        topText.textContent = topTextInput.value;

        const bottomText = document.createElement('div');
        bottomText.classList.add('bottom-text');
        bottomText.textContent = bottomTextInput.value;

        meme.appendChild(image);
        meme.appendChild(topText);
        meme.appendChild(bottomText);

        memeContainer.appendChild(meme);

        // Clear the form
        form.reset();
    });