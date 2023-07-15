function search(method, callback, userName = null){

    if(userName === null)
        document.querySelector('.headerContainerSearch input').value === "" ? 
        userName = document.querySelector('.sideMenuContainerSearch input').value :
        userName = document.querySelector('.headerContainerSearch input').value
    else {
        document.querySelector('.headerContainerSearch input').value = userName
        document.querySelector('.sideMenuContainerSearch input').value = userName
    }
    
    loading()
    setTimeout(() => {
        let url = ""

        switch (method) {
            case "followers":
                url = `https://api.github.com/users/${userName}/followers`
                break
            case "following":
                url = `https://api.github.com/users/${userName}/following`
                break
            case "repos":
                url = `https://api.github.com/users/${userName}/repos`
                break
            default:
                url = `https://api.github.com/users/${userName}`
                break
        }
        
        let httpRequest = new XMLHttpRequest()
        
        httpRequest.open("GET", url, true)
        httpRequest.onreadystatechange = function(){
            if ( httpRequest.readyState == 4 && httpRequest.status == 200 ){
                data = JSON.parse(httpRequest.responseText)
                callback(data)
            }
            else if ( httpRequest.readyState == 4 && httpRequest.status == 404 )
            {
                noUser404()
            }
        }
        httpRequest.send()
    }, 1000);
    
}