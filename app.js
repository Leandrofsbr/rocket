feather.replace()

let socialMediaLinks = {
    github: 'leandrofsbr',
    youtube: 'watch?v=sTPXkVKwU24',
    twitter: 'leandrofsbr',
    instagram: 'leandrofs.design',
    facebook: 'leandrofs.net'
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${socialMediaLinks.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        product.textContent = data.login
        description.textContent = data.bio
    })
}

getGitHubProfileInfos()
