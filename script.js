console.log("hi");
const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-button");
const resumeContainer = document.querySelector(".resume-container");
const headerContainer = document.querySelector(".header-container");
const topContainer = document.querySelector(".top-container");
const technicalProjectsContainer = document.querySelector(
  ".technical-projects-container"
);
const workExperiencesContainer = document.querySelector(
  ".work-experiences-container"
);
const educationContainer = document.querySelector(".education-container");
const technicalSkillsContainer = document.querySelector(
  ".technical-skills-container"
);
const editResume = document.querySelector("#edit-resume");
// const login_url = "http://localhost:3000/login"

editResume.addEventListener("click", () => {
  console.log("event", event);
});

loginForm.addEventListener("submit", () => {
  event.preventDefault();
  //   console.log("username:", event.target.username.value);
  //   console.log("password:", event.target.password.value);
  let loginUsername = event.target.username.value;
  let loginPassword = event.target.password.value;
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: {
        username: loginUsername,
        password: loginPassword
      }
    })
  })
    .then(response => response.json())
    .then(result => {
      localStorage.setItem("token", result.token);
      //   loginForm.style.display = "none";
    })
    .catch(error => console.log(error));
});

// function login() {
//   loginButton.addEventListener("click", () => {
//     window.location.reload();
//   });
// }

// setTimeout(login(), 1000000);
if (localStorage.token) {
  const logoutButton = document.createElement("button");

  logoutButton.innerText = "Log-out";
  logoutButton.id = "logout";

  loginForm.append(logoutButton);

  fetch("http://localhost:3000/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  })
    .then(response => response.json())
    .then(user => {
      console.log("user", user);
      const loggedInUser = document.createElement("h1");
      const technicalProjects = document.createElement("h2");
      const workExperiences = document.createElement("h2");
      const educations = document.createElement("h2");
      const technicalSkills = document.createElement("h2");
      loggedInUser.textContent = user.name;
      technicalProjects.textContent = "Technical Projects";
      workExperiences.textContent = "Work Experience";
      educations.textContent = "Education";
      technicalSkills.textContent = "Technical Skills";

      topContainer.append(loggedInUser);

      user.headers.map(header => {
        console.log("header", header);
        const title = document.createElement("h3");
        const personalWebsite = document.createElement("p");
        const personalGitHub = document.createElement("p");
        const personalLinkedIn = document.createElement("p");
        const personalEmail = document.createElement("p");
        const personalNumber = document.createElement("p");
        const missionStatement = document.createElement("li");
        title.textContent = header.title;
        personalWebsite.innerHTML = `<a href="${header.personal_website}">Personal Website</a> | `;
        personalGitHub.innerHTML = `| <a href="${header.git_hub}">GitHub</a> |`;
        personalLinkedIn.innerHTML = `| <a href="${header.linked_in}">LinkedIn</a> |`;
        personalEmail.innerHTML = `| <a href="${header.email}">Email</a> |`;
        personalNumber.textContent = `| ${header.phone_number}`;
        missionStatement.textContent = header.mission_statement;
        headerContainer.append(
          title,
          personalWebsite,
          personalGitHub,
          personalLinkedIn,
          personalEmail,
          personalNumber,
          missionStatement
        );
      });

      user.technical_projects.map(project => {
        console.log("project", project);
        const projectName = document.createElement("p");
        const projectDescription = document.createElement("p");
        const projectDeployedApp = document.createElement("p");
        const projectGitHub = document.createElement("p");
        const projectVideo = document.createElement("p");
        const projectDetailedDescription = document.createElement("li");

        projectName.innerHTML = `<strong>${project.name}</strong> -`;
        projectDescription.innerHTML = `- <em>${project.description}</em>`;
        projectName.id = "project-info";
        projectDescription.id = "project-info";
        projectDeployedApp.innerHTML = `<a href="${project.deployed_app}">Deployed App</a> (username: <em>user</em> , password: <em>123</em> )`;
        projectGitHub.innerHTML = `GitHub: <a href="${project.git_hub}">${project.git_hub}</a> |`;
        projectVideo.innerHTML = `| <a href="${project.video}">Walk-through Video</a>`;
        projectGitHub.id = "git-hub";
        projectVideo.id = "git-hub";
        projectDetailedDescription.textContent = project.detailed_description;

        technicalProjectsContainer.append(
          technicalProjects,
          projectName,
          projectDescription,
          projectDeployedApp,
          projectGitHub,
          projectVideo,
          projectDetailedDescription
        );
      });

      user.work_experiences.map(experience => {
        console.log("experience", experience);
        const experienceJobTitle = document.createElement("p");
        const experienceDate = document.createElement("p");
        const experienceLocation = document.createElement("p");
        const experienceDescription = document.createElement("p");
        const experienceDetailedDescription = document.createElement("li");

        experienceJobTitle.textContent = experience.job_title;
        experienceDate.textContent = experience.date;
        experienceLocation.textContent = experience.location;
        experienceDescription.textContent = experience.description;
        experienceDetailedDescription.textContent =
          experience.detailed_description;

        workExperiencesContainer.append(
          workExperiences,
          experienceJobTitle,
          experienceDate,
          experienceLocation,
          experienceDescription,
          experienceDetailedDescription
        );
      });

      user.educations.map(education => {
        console.log("education", education);
        const educationName = document.createElement("p");
        const educationDate = document.createElement("p");
        const educationDescription = document.createElement("li");

        educationName.textContent = education.name;
        educationDate.textContent = education.date;
        educationDescription.textContent = education.description;

        educationContainer.append(
          educations,
          educationName,
          educationDate,
          educationDescription
        );
      });

      user.technical_skills.map(skill => {
        console.log("skill", skill);
        const skillDescription = document.createElement("p");

        skillDescription.textContent = skill.description;

        technicalSkillsContainer.append(technicalSkills, skillDescription);
      });

      logoutButton.addEventListener("click", () => {
        localStorage.removeItem("token");
        logoutButton.style.display = "none";
        resumeContainer.style.display = "none";
      });
    })
    .catch(error => console.log(error));
}
