document.addEventListener('DOMContentLoaded', function() {
    const headerSearchInput = document.querySelector('.headerContainerSearch input')
    const sideMenuSearchInput = document.querySelector('.sideMenuContainerSearch input')

    const sideMenuSearchButton = document.querySelector('.sideMenuContainerSearch button')
    const headerSearchButton = document.querySelector('.headerContainerSearch button')

    const navProfileButton = document.querySelectorAll('.navContainer button')[1]
    const navFollowersButton = document.querySelectorAll('.navContainer button')[2]
    const navFollowingButton = document.querySelectorAll('.navContainer button')[3]
    const navReposButton = document.querySelectorAll('.navContainer button')[4]

    const sideMenuProfileButton = document.querySelectorAll('.sideMenuContainer button')[2]
    const sideMenuFollowersButton = document.querySelectorAll('.sideMenuContainer button')[3]
    const sideMenuFollowingButton = document.querySelectorAll('.sideMenuContainer button')[4]
    const sideMenuReposButton = document.querySelectorAll('.sideMenuContainer button')[5]

    function toggleDisable(){
        if (headerSearchInput.value.length > 0 || sideMenuSearchInput.value.length > 0) {
        headerSearchButton.removeAttribute('disabled');
        sideMenuSearchButton.removeAttribute('disabled');

        navProfileButton.removeAttribute('disabled');
        navFollowersButton.removeAttribute('disabled');
        navFollowingButton.removeAttribute('disabled');
        navReposButton.removeAttribute('disabled');

        sideMenuProfileButton.removeAttribute('disabled');
        sideMenuFollowersButton.removeAttribute('disabled');
        sideMenuFollowingButton.removeAttribute('disabled');
        sideMenuReposButton.removeAttribute('disabled');
        } else {
        headerSearchButton.setAttribute('disabled', true);
        sideMenuSearchButton.setAttribute('disabled', true);
        
        navProfileButton.setAttribute('disabled', true);
        navFollowersButton.setAttribute('disabled', true);
        navFollowingButton.setAttribute('disabled', true);
        navReposButton.setAttribute('disabled', true);

        sideMenuProfileButton.setAttribute('disabled', true);
        sideMenuFollowersButton.setAttribute('disabled', true);
        sideMenuFollowingButton.setAttribute('disabled', true);
        sideMenuReposButton.setAttribute('disabled', true);
        }
    }

    headerSearchInput.addEventListener('input', toggleDisable)
    sideMenuSearchInput.addEventListener('input', toggleDisable)


    const toggleButton = document.querySelector('.sideMenuButtonContainer');
    const sidebar = document.querySelector('.sideMenuContainer');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar-expanded');
    });
});
