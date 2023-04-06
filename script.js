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
    userName = document.querySelector('.searchContainer input').value

    loading()

    var urlProfile = `https://api.github.com/users/${userName}`

    
    setTimeout(() => {
        let httpProfile = new XMLHttpRequest()
        
        httpProfile.open("GET", urlProfile, true)
        httpProfile.onreadystatechange = function(){
            if ( httpProfile.readyState == 4 && httpProfile.status == 200 ) {
                userData = JSON.parse(httpProfile.responseText)
                
                profile()
            }
        }
        httpProfile.send()
    }, 2000);

}

function searchFollowers() {
    
    userName = document.querySelector('.searchContainer input').value

    loading()

    let urlFollowers = `https://api.github.com/users/${userName}/followers`
    
    setTimeout(() => {
        let httpFollowers = new XMLHttpRequest()

        httpFollowers.open("GET", urlFollowers, true)
        httpFollowers.onreadystatechange = function(){
            if ( httpFollowers.readyState == 4 && httpFollowers.status == 200 ) {
                userFollowers = JSON.parse(httpFollowers.responseText)
            }
        }
        httpFollowers.send()
        
        followers()
    }, 2000);

}

function searchFollowing(){

    userName = document.querySelector('.searchContainer input').value

    loading()

    let urlFollowing = `https://api.github.com/users/${userName}/following`

    setTimeout(() => {
        let httpFollowing = new XMLHttpRequest()
    
        httpFollowing.open("GET", urlFollowing, true)
        httpFollowing.onreadystatechange = function(){
            if ( httpFollowing.readyState == 4 && httpFollowing.status == 200 ) {
                userFollowing = JSON.parse(httpFollowing.responseText)
            }
        }
        httpFollowing.send()
        
    }, 2000);
}

function searchRepos(){

    userName = document.querySelector('.searchContainer input').value

    loading()

    let urlRepos = `https://api.github.com/users/${userName}/repos`

    setTimeout(() => {
        let httpRepos = new XMLHttpRequest()
    
        httpRepos.open("GET", urlRepos, true)
        httpRepos.onreadystatechange = function(){
            if ( httpRepos.readyState == 4 && httpRepos.status == 200 ) {
                userRepos = JSON.parse(httpRepos.responseText)
            }
        }
        httpRepos.send()
        
    }, 2000);
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