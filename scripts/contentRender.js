function profile(userData) {

    document.getElementsByClassName('dataContainer')[0].innerHTML = `
        <div class="userContainer">
            <img src=${userData.avatar_url} alt="userImage" class="userImage">
            <h2 class="userName">${userData.name}</h2>
            <h3 class="userNick">${userData.login}</h3>
        </div>
        <div class="numbersContainer">
            <p class="followers">Seguidores: ${userData.followers}</p>
            <p class="following">Seguindo: ${userData.following}</p>
            <p class="repos">Repositórios: ${userData.public_repos}</p>
        </div>
    `
}

function followers(userFollowers) {

    document.getElementsByClassName('dataContainer')[0].innerHTML = `
        <ul class="listContainer">
        ${userFollowers.map( follower => {return (
            `
                <li onclick="search('profile', profile, '${follower.login}')">
                    <img src=${follower.avatar_url} alt="follower">
                    <p>${follower.login}</p>
                </li>
            `
        )}).join('')}
        </ul>
    `
}

function following(userFollowing) {

    document.getElementsByClassName('dataContainer')[0].innerHTML = `
        <ul class="listContainer">
        ${userFollowing.map( following => {return (
            `
                <li onclick="search('profile', profile, '${following.login}')">
                    <img src=${following.avatar_url} alt="following">
                    <p>${following.login}</p>
                </li>
            `
        )}).join('')}
        </ul>
    `
}

function repos(userRepos) {

    document.getElementsByClassName('dataContainer')[0].innerHTML = `
        <ul class="listRepoContainer">
        ${userRepos.map( repo => {return (
            `
                <li class="listRepoItemContainer">
                    <div class="listRepoItemFirst">
                        <h3 class="white">${repo.name}<h3>
                        <p>${repo.description !== null ? repo.description : "No description"}</p>
                    </div>
                    <div class="listRepoItemLast">
                        <div class="listRepoItemLastInfos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="Yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>  
                            <p class="white">${repo.stargazers_count}</p>
                        </div>
                        <div class="listRepoItemLastInfos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0d6efd" class="bi bi-diagram-2-fill invert" viewBox="0 0 16 16"">
                                <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-3 8A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1z"/>
                            </svg>
                            <p class="white">${repo.forks_count}</p>
                        </div>
                        <div class="listRepoItemLastInfos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-dice-1" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="1.5"/>
                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
                            </svg>
                            <p class="white">${repo.open_issues_count}</p>
                        </div>
                    </div>
                </li>
            `
        )}).join('')}
        </ul>
    `
}
