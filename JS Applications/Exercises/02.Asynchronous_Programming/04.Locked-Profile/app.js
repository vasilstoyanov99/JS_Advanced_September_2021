async function lockedProfile() {
    const mainDiv = document.getElementById('main');
    const emptyProfile = mainDiv.querySelector('.profile');
    mainDiv.removeChild(emptyProfile);

    try {
        //Just in case I added error handling
        const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');

        if (response.status !== 200) {
            throw new Error('Something went wrong!')
        }

        const data = await response.json();

        for (let key in data) {
            const currProfile = data[key];
            const profileDiv = document.createElement('div');
            profileDiv.classList.add('profile');
            // Very illegal stuff ->
            profileDiv.innerHTML = `<img src="./iconProfile2.png" class="userIcon" /> <label>Lock</label> <input type="radio" name="user1Locked" value="lock" checked> <label>Unlock</label> <input type="radio" name="user1Locked" value="unlock"><br> <hr> <label>Username</label> <input type="text" name="user1Username" value="${currProfile.username}" disabled readonly /> <div id="user1HiddenFields"> <hr> <label>Email:</label> <input type="email" name="user1Email" value="${currProfile.email}" disabled readonly /> <label>Age:</label> <input type="email" name="user1Age" value="${currProfile.username}" disabled readonly /> </div> <button>Show more</button>`;
            mainDiv.appendChild(profileDiv);
        }

        document.getElementById('main')
            .addEventListener('click', onClick);

        function onClick({target}) {
            if (target.tagName === 'BUTTON'){
                const unlockRadioButton = target.parentNode.querySelector('input[value="unlock"]');

                if (unlockRadioButton.checked){
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
    } catch (error) {
        alert(error.message);
    }
}