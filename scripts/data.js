const getJobData = () => {
    return fetch('https://api.stevebrownlee.com/jobs')
        .then(response => response.json())

}

const getSkillsData = () => {
    return fetch('https://api.stevebrownlee.com/skills')
        .then(response => response.json())

}

