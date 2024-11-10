document.getElementById('update-button').onclick = function () {

    const newName = document.getElementById('name-input').value;
    const newBio = document.getElementById('bio-input').value;
    const newPicUrl = document.getElementById('pic-input').value;

    if (newName.trim() && newBio.trim()) {
        
        document.getElementById('profile-name').textContent = newName;
        document.getElementById('profile-bio').textContent = newBio;

        if (newPicUrl.trim()) {
            document.getElementById('profile-pic').src = newPicUrl;
        }
    } else {
        
        alert('Please provide a valid name and bio.');
    }
};
