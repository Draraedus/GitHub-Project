document.addEventListener('DOMContentLoaded', function() {
    const headerSearchInput = document.querySelector('.headerContainerSearch input')
    const sideMenuSearchInput = document.querySelector('.sideMenuContainerSearch input')

    const sideMenuSearchButton = document.querySelector('.sideMenuContainerSearch button')
    const headerSearchButton = document.querySelector('.headerContainerSearch button')

    const profileButton = document.querySelectorAll('.navContainer button')[1]
    const followersButton = document.querySelectorAll('.navContainer button')[2]
    const followingButton = document.querySelectorAll('.navContainer button')[3]
    const reposButton = document.querySelectorAll('.navContainer button')[4]

    headerSearchInput.addEventListener('input', function() {
        if (headerSearchInput.value.length > 0 || sideMenuSearchInput.value.length > 0) {
        headerSearchButton.removeAttribute('disabled');
        sideMenuSearchButton.removeAttribute('disabled');

        profileButton.removeAttribute('disabled');
        followersButton.removeAttribute('disabled');
        followingButton.removeAttribute('disabled');
        reposButton.removeAttribute('disabled');
        } else {
        headerSearchButton.setAttribute('disabled', true);
        sideMenuSearchButton.setAttribute('disabled', true);
        
        profileButton.setAttribute('disabled', true);
        followersButton.setAttribute('disabled', true);
        followingButton.setAttribute('disabled', true);
        reposButton.setAttribute('disabled', true);
        }
    });


    const toggleButton = document.querySelector('.sideMenuButtonContainer');
    const sidebar = document.querySelector('.sideMenuContainer');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar-expanded');
    });
});
