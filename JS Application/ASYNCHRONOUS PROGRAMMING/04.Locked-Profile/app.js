async function lockedProfile() {
     
        const main = document.getElementById('main');
        main.innerHTML = '';
        const url = 'http://localhost:3030/jsonstore/advanced/profiles';
        const response = await fetch(url);
        const data = await response.json();
    
        Object.values(data).map(createProfiles).forEach(element => {
            main.innerHTML += element;
        });
        
    
        let allProfiles = document.getElementsByClassName('profile');
        
        Array.from(allProfiles) .forEach((parent) => {
            let btn = parent.querySelector('button');
            btn.addEventListener('click', () => {
                let isUnlocked = parent.querySelectorAll('input')[1].checked;
                let hiddenInformation = parent.querySelectorAll('div')[0];
                if (isUnlocked) {
                    if (btn.textContent == "Show more") {
                        hiddenInformation.style.display = "block";
                        btn.textContent = "Hide it"
                    } else if(btn.textContent == "Hide it"){
                        hiddenInformation.style.display = "none";
                        btn.textContent = "Show more"
                    }
                }
            })
        })
}




function createProfiles (profile) {
    const result = `<div class="profile">
    <img src="./iconProfile2.png" class="userIcon" />
    <label>Lock</label>
    <input type="radio" name="userLocked" value="lock" checked>
    <label>Unlock</label>
    <input type="radio" name="userLocked" value="unlock"><br>
    <hr>
    <label>Username</label>
    <input type="text" name="userUsername" value="${profile.username}" disabled readonly />
    <div id="user1HiddenFields">
        <hr>
        <label>Email:</label>
        <input type="email" name="userEmail" value="${profile.email}" disabled readonly />
        <label>Age:</label>
        <input type="email" name="user1Age" value="${profile.age}" disabled readonly />
    </div>
    <button>Show more</button>
</div>
    `
    ;
    return result;
}





