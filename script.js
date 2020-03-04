console.log("hi");
const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-button");
const resumeContainer = document.querySelector(".resume-container");
const logoutButton = document.createElement("button");
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
const editMode = document.querySelector("#edit-mode");
const exitEditMode = document.querySelector("#exit-edit-mode");
// const login_url = "http://localhost:3000/login"

editMode.addEventListener("click", () => {
  console.log("event", event);
  logoutButton.style.display = "none";
  loginForm.style.display = "none";
  exitEditMode.style.display = "block";
  //   resumeContainer.style.display = "none";
  const createHeaderForm = document.createElement("form");
  const createProjectForm = document.createElement("form");
  const createExperienceForm = document.createElement("form");
  const createEducationForm = document.createElement("form");
  const createSkillForm = document.createElement("form");

  createHeaderForm.innerHTML = `
  <form id="header-form" name="header-form">
    <p>Modify Headers:</p>
    <label for="personal_website">Personal Website:</label>
    <input type="text" name="personal_website" placeholder="Put your site here" />
    <label for="git_hub">GitHub:</label>
    <input type="text" name="git_hub" placeholder="GitHub goes here" />
    <label for="linked_in">LinkedIn:</label>
    <input type="text" name="linked_in" placeholder="LinkedIn goes here" />
    <label for="email">Email:</label>
    <input type="text" name="email" placeholder="Email goes here" />
    <label for="phone_number">Phone Number:</label>
    <input type="text" name="phone_number" placeholder="Number goes here" />
    <label for="mission_statement">Mission Statement:</label>
    <input type="text" name="mission_statement" placeholder="Goals for this resume" />
    <input type="submit" />
  </form>
  `;
  createProjectForm.innerHTML = `
  <form id="project-form" name="project-form">
    <p>Add/Update Projects:</p>
    <label for="name">Project Name:</label>
    <input type="text" name="name" placeholder="Project name here" />
    <label for="description">Project Description:</label>
    <input type="text" name="description" placeholder="Description goes here" />
    <label for="deployed_app">Deployed App Link:</label>
    <input type="text" name="deployed_app" placeholder="Deployed app link here" />
    <label for="git_hub">GitHub Link:</label>
    <input type="text" name="git_hub" placeholder="Link to GitHub Project here" />
    <label for="video">Video:</label>
    <input type="text" name="video" placeholder="Video link here" />
    <label for="detailed_description">Detailed Project Description:</label>
    <input type="text" name="detailed_description" placeholder="Detailed description here" />
    <input type="submit" />
  </form>
  `;
  createExperienceForm.innerHTML = `
  <form id="experience-form" name="experience-form">
    <p>Add/Update Work Experience:</p>
    <label for="job_title">Job Title:</label>
    <input type="text" name="job_title" placeholder="Job title here" />
    <label for="date">Date:</label>
    <input type="text" name="date" placeholder="Jan 2018-Feb 2019" />
    <label for="location">Location:</label>
    <input type="text" name="location" placeholder="Location here" />
    <label for="description">Description:</label>
    <input type="text" name="description" placeholder="Description here" />
    <label for="detailed_description">Detailed Description:</label>
    <input type="text" name="detailed_description" placeholder="Detailed Description here" />
    <input type="submit" />
  </form>
  `;

  createEducationForm.innerHTML = `
  <form id="education-form" name="education-form">
    <p>Add/Update Education Deets:</p>
    <label for="name">Educational Institution Name:</label>
    <input type="text" name="name" placeholder="Education institution name here" />
    <label for="date">Date:</label>
    <input type="text" name="date" placeholder="Jan 2018-Feb 2019" />
    <label for="description">Description:</label>
    <input type="text" name="description" placeholder="Description here" />
    <input type="submit" />
  </form>
  `;
  createSkillForm.innerHTML = `
  <form id="skill-form" name="skill-form">
    <p>Add/Update Skill Details:</p>
    <label for="description">Description:</label>
    <input type="text" name="description" placeholder="Description here" />
    <input type="submit" />
  </form>
  `;

  headerContainer.append(createHeaderForm);
  technicalProjectsContainer.append(createProjectForm);
  workExperiencesContainer.append(createExperienceForm);
  educationContainer.append(createEducationForm);
  technicalSkillsContainer.append(createSkillForm);

  createHeaderForm.addEventListener("submit", () => {
    event.preventDefault();
    // FORM DATA PRACTICE
    let newComment = document.createElement("li");
    newComment.textContent = comment_inputTag.value;
    commentsTag.append(newComment);
    console.log(comment_inputTag.value);

    fetch("http://localhost:3000/technical_projects", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: `${user.id}`,
        content: comment_inputTag.value
      })
    }).then(comment_formTag.reset());
  });
});

exitEditMode.addEventListener("click", () => {
  window.location.reload();
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
      window.location.reload();
      loginForm.reset();
      localStorage.setItem("token", result.token);
      //   editMode.style.display = "block";
      //   loginForm.style.display = "none";
    })
    .catch(error => console.log(error));
});
// setTimeout(login(), 500);

// function login() {
//   loginButton.addEventListener("click", () => {
//     window.location.reload();
//   });
// }

if (localStorage.token) {
  logoutButton.innerText = "Log-out";
  logoutButton.id = "logout";

  loginForm.append(logoutButton);

  editMode.style.display = "block";

  fetch("http://localhost:3000/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  })
    .then(response => response.json())
    .then(user => {
      console.log("user", user);

      logoutButton.addEventListener("click", () => {
        localStorage.removeItem("token");
        logoutButton.style.display = "none";
        resumeContainer.style.display = "none";
        editMode.style.display = "none";
      });

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
        projectDescription.innerHTML = `<em>${project.description}</em>`;
        projectName.id = "project-info";
        projectDescription.id = "project-info";
        // projectDescription.id = "fix-padding";
        projectDeployedApp.innerHTML = `<a href="${project.deployed_app}">Deployed App</a> (username: <em>user</em> , password: <em>123</em> )`;
        projectGitHub.innerHTML = `GitHub: <a href="${project.git_hub}">${project.git_hub}</a> |`;
        projectVideo.innerHTML = `| <a href="${project.video}">Walk-through Video</a>`;
        projectGitHub.id = "git-hub";
        projectVideo.id = "git-hub";
        projectDeployedApp.id = "project-paragraph-info";
        projectDetailedDescription.id = "project-paragraph-li";
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

        experienceJobTitle.innerHTML = `<strong>${experience.job_title}</strong>`;
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

        educationName.innerHTML = `<strong>${education.name}</strong>`;
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
    })
    .catch(error => console.log(error));
}
