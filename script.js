const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");
const loginButton = document.querySelector("#login-button");
const resumeContainer = document.querySelector(".resume-container");
const logoutButton = document.querySelector("#logout-button");
const signUpButton = document.querySelector(".login-switch-link");
const signInButton = document.querySelector(".sign-in-switch-link");
const loginContainer = document.querySelector(".login-container");
const signupContainer = document.querySelector(".signup-container");
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
toExitEditMode();
toSwitchToSignupForm();
toSwitchToLoginForm();
toSignupUser();
toLoginUser();
toAccessUI();
toAccessEditModeUI();

function toSwitchToLoginForm() {
  signInButton.addEventListener("click", () => {
    loginContainer.style.display = "block";
    signupContainer.style.display = "none";
  });
}

function toSwitchToSignupForm() {
  signUpButton.addEventListener("click", () => {
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
  });
}

function toLogout() {
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("token");
    logoutButton.style.display = "none";
    resumeContainer.style.display = "none";
    editMode.style.display = "none";
    loginForm.style.display = "block";
    loginContainer.style.display = "block";
  });
}

function toAccessEditModeUI() {
  editMode.addEventListener("click", () => {
    console.log("event", event);
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(user => {
        console.log("inside edit mode", user);

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
        <label for="personal-website">Personal Website:</label>
        <input type="text" name="personal-website" placeholder="Put your site here" />
        <label for="personal-git-hub">GitHub:</label>
        <input type="text" name="personal-git-hub" placeholder="GitHub goes here" />
        <label for="personal-linked-in">LinkedIn:</label>
        <input type="text" name="personal-linked-in" placeholder="LinkedIn goes here" />
        <label for="personal-email">Email:</label>
        <input type="text" name="personal-email" placeholder="Email goes here" />
        <label for="personal-phone-number">Phone Number:</label>
        <input type="text" name="personal-phone-number" placeholder="Number goes here" />
        <label for="personal-mission-statement">Mission Statement:</label>
        <input type="text" name="personal-mission-statement" placeholder="Goals for this resume" />
        <input type="submit" />
      </form>
      `;
        createProjectForm.innerHTML = `
      <form id="project-form" name="project-form">
        <p>Add/Update Projects:</p>
        <label for="project-name">Project Name:</label>
        <input type="text" name="project-name" placeholder="Project name here" />
        <label for="project-description">Project Description:</label>
        <input type="text" name="project-description" placeholder="Description goes here" />
        <label for="deployed-app">Deployed App Link:</label>
        <input type="text" name="deployed-app" placeholder="Deployed app link here" />
        <label for="project-git-hub">GitHub Link:</label>
        <input type="text" name="project-git-hub" placeholder="Link to GitHub Project here" />
        <label for="project-video">Video:</label>
        <input type="text" name="project-video" placeholder="Video link here" />
        <label for="project-detailed-description">Detailed Project Description:</label>
        <input type="text" name="project-detailed-description" placeholder="Detailed description here" />
        <input type="submit" />
      </form>
      `;
        createExperienceForm.innerHTML = `
      <form id="experience-form" name="experience-form">
        <p>Add/Update Work Experience:</p>
        <label for="job-title">Job Title:</label>
        <input type="text" name="job-title" placeholder="Job title here" />
        <label for="job-date">Date:</label>
        <input type="text" name="job-date" placeholder="Jan 2018-Feb 2019" />
        <label for="job-location">Location:</label>
        <input type="text" name="job-location" placeholder="Location here" />
        <label for="job-description">Description:</label>
        <input type="text" name="job-description" placeholder="Description here" />
        <label for="job-detailed-description">Detailed Description:</label>
        <input type="text" name="job-detailed-description" placeholder="Detailed Description here" />
        <input type="submit" />
      </form>
      `;

        createEducationForm.innerHTML = `
      <form id="education-form" name="education-form">
        <p>Add/Update Education Deets:</p>
        <label for="education-name">Educational Institution Name:</label>
        <input type="text" name="education-name" placeholder="Education institution name here" />
        <label for="education-date">Date:</label>
        <input type="text" name="education-date" placeholder="Jan 2018-Feb 2019" />
        <label for="education-description">Description:</label>
        <input type="text" name="education-description" placeholder="Description here" />
        <input type="submit" />
      </form>
      `;
        createSkillForm.innerHTML = `
      <form id="skill-form" name="skill-form">
        <p>Add/Update Skill Details:</p>
        <label for="skill-description">Description:</label>
        <input type="text" name="skill-description" placeholder="Description here" />
        <input type="submit" />
      </form>
      `;

        headerContainer.append(createHeaderForm);
        technicalProjectsContainer.append(createProjectForm);
        workExperiencesContainer.append(createExperienceForm);
        educationContainer.append(createEducationForm);
        technicalSkillsContainer.append(createSkillForm);

        const personalWebsiteInputTag = document.querySelector(
          'input[name="personal-website"]'
        );
        const personalGitHubInputTag = document.querySelector(
          'input[name="personal-git-hub"]'
        );
        const personalLinkedInInputTag = document.querySelector(
          'input[name="personal-linked-in"]'
        );
        const personalEmailInputTag = document.querySelector(
          'input[name="personal-email"]'
        );
        const personalPhoneNumberInputTag = document.querySelector(
          'input[name="personal-phone-number"]'
        );
        const personalMissionStatementInputTag = document.querySelector(
          'input[name="personal-mission-statement"]'
        );

        const projectNameInputTag = document.querySelector(
          'input[name="project-name"]'
        );
        const projectDescriptionInputTag = document.querySelector(
          'input[name="project-description"]'
        );
        const deployedAppInputTag = document.querySelector(
          'input[name="deployed-app"]'
        );
        const projectGitHubInputTag = document.querySelector(
          'input[name="project-git-hub"]'
        );
        const projectVideoInputTag = document.querySelector(
          'input[name="project-video"]'
        );
        const projectDetailedDescriptionInputTag = document.querySelector(
          'input[name="project-detailed-description"]'
        );

        const jobTitleInputTag = document.querySelector(
          'input[name="job-title"]'
        );
        const jobDateInputTag = document.querySelector(
          'input[name="job-date"]'
        );
        const jobDescriptionInputTag = document.querySelector(
          'input[name="job-description"]'
        );
        const jobLocationInputTag = document.querySelector(
          'input[name="job-location"]'
        );
        const jobDetailedDescriptionInputTag = document.querySelector(
          'input[name="job-detailed-description"]'
        );

        const educationNameInputTag = document.querySelector(
          'input[name="education-name"]'
        );
        const educationDateInputTag = document.querySelector(
          'input[name="education-date"]'
        );
        const educationDescriptionInputTag = document.querySelector(
          'input[name="education-description"]'
        );

        const skillDescriptionInputTag = document.querySelector(
          'input[name="skill-description"]'
        );

        function updateHeader() {
          console.log("user", user);
          console.log("website", user.headers[0].personal_website);
          event.preventDefault();

          console.log("input tag", personalWebsiteInputTag);
        }

        createHeaderForm.addEventListener("submit", updateHeader);

        personalWebsiteInputTag.value = user.headers[0].personal_website;
        personalGitHubInputTag.value = user.headers[0].git_hub;
        personalLinkedInInputTag.value = user.headers[0].linked_in;
        personalEmailInputTag.value = user.headers[0].email;
        personalPhoneNumberInputTag.value = user.headers[0].phone_number;
        personalMissionStatementInputTag.value =
          user.headers[0].mission_statement;

        user.technical_projects.map(project => {
          console.log("project for input tags!", project);
          projectNameInputTag.value = project.name;
          projectDescriptionInputTag.value = project.description;
          deployedAppInputTag.value = project.deployed_app;
          projectGitHubInputTag.value = project.git_hub;
          projectVideoInputTag.value = project.video;
          projectDetailedDescriptionInputTag.value =
            project.detailed_description;
        });

        user.work_experiences.map(experience => {
          console.log(experience);
          jobTitleInputTag.value = experience.job_title;
          jobDateInputTag.value = experience.date;
          jobLocationInputTag.value = experience.location;
          jobDescriptionInputTag.value = experience.description;
          jobDetailedDescriptionInputTag.value =
            experience.detailed_description;
        });

        user.educations.map(education => {
          console.log(education);
          educationNameInputTag.value = education.name;
          educationDateInputTag.value = education.date;
          educationDescriptionInputTag.value = education.description;
        });

        skillDescriptionInputTag.value = user.technical_skills[0].description;
      })
      .catch(error => console.log(error));
  });
}

function toExitEditMode() {
  exitEditMode.addEventListener("click", () => {
    window.location.reload();
  });
}

function toSignupUser() {
  signupForm.addEventListener("submit", () => {
    event.preventDefault();
    let signupName = event.target.name.value;
    let signupUsername = event.target.username.value;
    let signupPassword = event.target.username.value;
    console.log(signupName, signupUsername, signupPassword);
  });
}

function toLoginUser() {
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
      })
      .catch(error => console.log(error));
  });
}

function toAccessUI() {
  if (localStorage.token) {
    editMode.style.display = "block";
    loginForm.style.display = "none";
    logoutButton.style.display = "block";
    loginContainer.style.display = "none";

    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(user => {
        console.log("user", user);

        toLogout();

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
          //   projectVideo.innerHTML = `<a href="${project.video}">Walk-through Video</a>`;
          projectGitHub.innerHTML = `GitHub: <a href="${project.git_hub}">${project.git_hub}</a> | <a href="${project.video}">Walk-through Video</a>`;
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
            // projectVideo,
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
}
