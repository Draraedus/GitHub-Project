let userData = {}
let userFollowers = []
let userFollowing = []
let userRepos = []


function search() {
    userName = document.querySelector('.searchContainer input').value

    if(document.getElementsByClassName('dataContainer')[0].style.opacity == 1)
    {
        document.getElementsByClassName('dataContainer')[0].style.opacity = 0
        document.getElementsByClassName('navContainer')[0].style.opacity = 0
    }

    var urlProfile = `https://api.github.com/users/${userName}`
    var urlFollowers = `https://api.github.com/users/${userName}/followers`
    var urlFollowing = `https://api.github.com/users/${userName}/following`
    var urlRepos = `https://api.github.com/users/${userName}/repos`

    var httpProfile = new XMLHttpRequest()
    var httpFollowing = new XMLHttpRequest()
    var httpFollowers = new XMLHttpRequest()
    var httpRepos = new XMLHttpRequest()

    httpProfile.open("GET", urlProfile, true)
    httpProfile.onreadystatechange = function(){
        if ( httpProfile.readyState == 4 && httpProfile.status == 200 ) {
            userData = JSON.parse(httpProfile.responseText)
            
            profile()
            document.getElementsByClassName('dataContainer')[0].style.opacity = 1
            document.getElementsByClassName('navContainer')[0].style.opacity = 1
        }
    }
    httpProfile.send()

    httpFollowers.open("GET", urlFollowers, true)
    httpFollowers.onreadystatechange = function(){
        if ( httpFollowers.readyState == 4 && httpFollowers.status == 200 ) {
            userFollowers = JSON.parse(httpFollowers.responseText)
            console.log(userFollowers)
        }
    }
    httpFollowers.send()

    httpFollowing.open("GET", urlFollowing, true)
    httpFollowing.onreadystatechange = function(){
        if ( httpFollowing.readyState == 4 && httpFollowing.status == 200 ) {
            userFollowing = JSON.parse(httpFollowing.responseText)
        }
    }
    httpFollowing.send()

    httpRepos.open("GET", urlRepos, true)
    httpRepos.onreadystatechange = function(){
        if ( httpRepos.readyState == 4 && httpRepos.status == 200 ) {
            userRepos = JSON.parse(httpRepos.responseText)
        }
    }
    httpRepos.send()

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

function Followers() {

    document.getElementsByClassName('dataContainer')[0].innerHTML = `
        ${userFollowers.map( follower => 
            `
                <div>
                    
                </div>
            `)}
    `
}