function lockedProfile() {
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