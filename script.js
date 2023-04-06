let userName = ""
let userData = {}
let userFollowers = []
let userFollowing = []
let userRepos = []

function loading() {
    document.getElementsByClassName('dataContainer')[0].innerHTML = `
    <svg class="loadingIcon" xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="orange" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
    </svg>
    `
}

function searchProfile() {
    loading()
    
    userName = document.querySelector('.searchContainer input').value
    
    setTimeout(() => {
        let urlProfile = `https://api.github.com/users/${userName}`
        let httpProfile = new XMLHttpRequest()
        
        httpProfile.open("GET", urlProfile, true)
        httpProfile.onreadystatechange = function(){
            if ( httpProfile.readyState == 4 && httpProfile.status == 200 ) {
                userData = JSON.parse(httpProfile.responseText)
                
                profile()
            }
            else if ( httpProfile.readyState == 4 && httpProfile.status == 404 )
            {
                noUser404()
            }
        }
        httpProfile.send()
    }, 1000);
    
}

function searchFollowers() {
    
    loading()
    
    userName = document.querySelector('.searchContainer input').value
    
    setTimeout(() => {
        let urlFollowers = `https://api.github.com/users/${userName}/followers`

        let httpFollowers = new XMLHttpRequest()

        httpFollowers.open("GET", urlFollowers, true)
        httpFollowers.onreadystatechange = function(){
            if ( httpFollowers.readyState == 4 && httpFollowers.status == 200 ) {
                userFollowers = JSON.parse(httpFollowers.responseText)

                followers()
            }
        }
        httpFollowers.send()
        
    }, 1000);
}

function searchFollowing(){

    loading()
    
    userName = document.querySelector('.searchContainer input').value
    
    setTimeout(() => {
        let urlFollowing = `https://api.github.com/users/${userName}/following`

        let httpFollowing = new XMLHttpRequest()
    
        httpFollowing.open("GET", urlFollowing, true)
        httpFollowing.onreadystatechange = function(){
            if ( httpFollowing.readyState == 4 && httpFollowing.status == 200 ) {
                userFollowing = JSON.parse(httpFollowing.responseText)

                following()
            }
        }
        httpFollowing.send()
        
    }, 1000);
}

function searchRepos(){

    loading()
    
    userName = document.querySelector('.searchContainer input').value
    
    setTimeout(() => {
        let urlRepos = `https://api.github.com/users/${userName}/repos`

        let httpRepos = new XMLHttpRequest()
    
        httpRepos.open("GET", urlRepos, true)
        httpRepos.onreadystatechange = function(){
            if ( httpRepos.readyState == 4 && httpRepos.status == 200 ) {
                userRepos = JSON.parse(httpRepos.responseText)
                
                repos()
            }
        }
        httpRepos.send()

        
    }, 1000);
}

function profile() {

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

function followers() {

    document.getElementsByClassName('dataContainer')[0].innerHTML = `
        <ul class="listContainer">
        ${userFollowers.map( follower => {return (
            `
                <li>
                    <img src=${follower.avatar_url} alt="follower">
                    <p>${follower.login}</p>
                </li>
            `
        )})}
        </ul>
    `
}

function following() {

    document.getElementsByClassName('dataContainer')[0].innerHTML = `
        <ul class="listContainer">
        ${userFollowing.map( following => {return (
            `
                <li>
                    <img src=${following.avatar_url} alt="following">
                    <p>${following.login}</p>
                </li>
            `
        )})}
        </ul>
    `
}

function repos() {

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

function noUser404() {
    document.getElementsByClassName('dataContainer')[0].innerHTML = `
        <div class="noUserContainer">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="red" class="bi bi-person-x-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
            </svg>
            <h2>Usuário Não Encontrado</h2>
        </div>
    `
}