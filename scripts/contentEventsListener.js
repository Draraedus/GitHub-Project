document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.headerContainerSearch input')
    const searchButton = document.querySelector('.headerContainerSearch button')
    const profileButton = document.querySelectorAll('.navContainer button')[1]
    const followersButton = document.querySelectorAll('.navContainer button')[2]
    const followingButton = document.querySelectorAll('.navContainer button')[3]
    const reposButton = document.querySelectorAll('.navContainer button')[4]

    searchInput.addEventListener('input', function() {
        if (searchInput.value.length > 0) {
        searchButton.removeAttribute('disabled');
        profileButton.removeAttribute('disabled');
        followersButton.removeAttribute('disabled');
        followingButton.removeAttribute('disabled');
        reposButton.removeAttribute('disabled');
        } else {
        searchButton.setAttribute('disabled', true);
        profileButton.setAttribute('disabled', true);
        followersButton.setAttribute('disabled', true);
        followingButton.setAttribute('disabled', true);
        reposButton.setAttribute('disabled', true);
        }
    });
});