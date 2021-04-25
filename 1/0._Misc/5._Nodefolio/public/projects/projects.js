// fetch("/api/projects").then(res => res.json()).then(console.log)

(async function getProjects() {
    try {
        const response = await fetch('/api/projects')
        const result = await response.json()

        const projectsDiv = document.getElementById("projects")

        result.projects.map(project => {
            const projectDiv = document.createElement("div")

            // title
            const titleHeader = document.createElement("h2")
            titleHeader.classList.add("project-title")
            titleHeader.innerText = project.title

            // description
            const descriptionP = document.createElement("p")
            descriptionP.classList.add("project-description")
            descriptionP.innerText = project.description

            // start - end date
            const projectDate = document.createElement("p")
            projectDate.classList.add("project-date")
            projectDate.innerText = project.startDate + " - " + project.endDate

            // languages
            const projectLanguages = document.createElement("p")
            projectLanguages.classList.add("project-languages")
            projectLanguages.innerText = project.languages.join(", ")

            // tech
            const projectTech = document.createElement("p")
            projectTech.classList.add("project-tech")
            projectTech.innerText = project.tech.join(", ")

            // github link
            const projectGithub = document.createElement("a")
            projectGithub.classList.add("project-github")
            projectGithub.innerText = project.gitLink

            projectDiv.appendChild(titleHeader)
            projectDiv.appendChild(projectDate)
            projectDiv.appendChild(descriptionP)
            projectDiv.appendChild(projectLanguages)
            projectDiv.appendChild(projectTech)
            projectsDiv.appendChild(projectDiv)
        })

    } catch (error) {

        console.log(error)
    }
})()

/*
function showProjects() {
    const projects = getProjects().then()

    console.log(projects)

    const containerDiv = document.getElementById("projects-container")

    const newDiv = document.createElement("div")

    const newContent = document.createTextNode(projects)

    newDiv.appendChild(newContent)

    containerDiv.appendChild(newDiv)
}*/
