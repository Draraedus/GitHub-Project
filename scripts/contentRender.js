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
        )})}
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
        )})}
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>  
                        <p class="white">${repo.stargazers_count}</p>
                    </div>
                </li>
            `
        )})}
        </ul>
    `
}
