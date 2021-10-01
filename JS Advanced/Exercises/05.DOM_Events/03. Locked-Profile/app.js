function lockedProfile() {
    document.getElementById('main')
        .addEventListener('click', onClick);

    function onClick({target}) {
        if (target.tagName === 'BUTTON'){
            const radioButton = target.parentNode.querySelector('input[value="unlock"]');

            if (radioButton.checked){
                let button = target.parentNode.querySelector('button');
                const buttonText = button.textContent;
                const showMore = 'Show more';
                const hideIt = 'Hide it';
                let hiddenFiled = button.parentElement.querySelector('div');

                if (buttonText === showMore){
                    hiddenFiled.style.display = 'block';
                    button.textContent = hideIt;
                    } else if (buttonText === hideIt){
                    hiddenFiled.style.display = 'none';
                    button.textContent = showMore;
                }
            }
        }
    }
}