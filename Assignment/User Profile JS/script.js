// Select profile elements
const profilePic = document.querySelector('#profile-pic');
const profileName = document.querySelector('#profile-name');
const profileBio = document.querySelector('#profile-bio');

// Select input elements
const inputPic = document.querySelector('#pic-input');
const inputName = document.querySelector('#name-input');
const inputBio = document.querySelector('#bio-input');

// Select update button
const updateButton = document.querySelector('#update-button');

// Event listener for updating profile
updateButton.addEventListener('click', () => {
    const newName = inputName.value.trim();
    const newBio = inputBio.value.trim();
    const newPicUrl = inputPic.value.trim();

    if (newName && newBio) { 
        // Update profile name and bio
        profileName.innerText = newName;
        profileBio.innerText = newBio;
        
        // Update profile picture if URL is provided
        if (newPicUrl) {
            profilePic.src = newPicUrl;
        }

    } else {
        alert('Please enter a valid name and bio.');
    }
});
