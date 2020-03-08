// Minimize all functions for increased readability.
// Future will need to append update/re-edit and delete buttons to each individual project, education, experience.
// Create a Container for each project, education, experience
// Make it possible to grab each container and move to the specific order of interest within each major container?
// require a conditional if header exists, add header button display none.
// add detailed description in experience/education too... current glitch able to create li's if rest of form is left blank on submit.
// 133 cons (87 querySelecto, 45 createElemen), 49 addEventListeners, 73 functio,

const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");
const loginButton = document.querySelector("#login-button");
const resumeContainer = document.querySelector(".resume-container");
const logoutButton = document.querySelector("#logout-button");
const signUpButton = document.querySelector(".login-switch-link");
const signInButton = document.querySelector(".sign-in-switch-link");
const loginContainer = document.querySelector(".login-container");
const signupContainer = document.querySelector(".signup-container");
const forgotPasswordButton = document.querySelector(".forgot-password-button");
const rememberPasswordButton = document.querySelector(
  ".remember-password-button"
);
// More buttons
const updateHeaderButton = document.querySelector(".update-header");
const addNewHeaderButton = document.querySelector(".add-new-header");
const updateProjectButton = document.querySelector(".update-project");
const addNewProjectButton = document.querySelector(".add-new-project");
const updateExperienceButton = document.querySelector(".update-experience");
const addExperienceButton = document.querySelector(".add-experience");
const updateEducationButton = document.querySelector(".update-education-info");
const addEducationButton = document.querySelector(".add-education-info");
const addNewSkillButton = document.querySelector(".add-new-skill");
const updateSkillButton = document.querySelector(".update-skill");

// ok.
const resetPasswordButton = document.querySelector("#reset-password-button");
const enterPasswordInput = document.querySelector("#enter-password-input");
const enterEmailInput = document.querySelector("#enter-email-input");
const enterUsernameInput = document.querySelector("#enter-username-input");
const topContainer = document.querySelector(".top-container");
const editMode = document.querySelector("#edit-mode");
const exitEditMode = document.querySelector("#exit-edit-mode");
// const login_url = "http://localhost:3000/login"
const updateHeaderForm = document.querySelector("#header-form");
const updateProjectForm = document.querySelector("#project-form");
const updateExperienceForm = document.querySelector("#experience-form");
const updateEducationForm = document.querySelector("#education-form");
const updateSkillForm = document.querySelector("#skill-form");
// More Forms
const createHeaderForm = document.querySelector("#create-header-form");
const createProjectForm = document.querySelector("#create-project-form");
const createExperienceForm = document.querySelector("#create-experience-form");
const createEducationForm = document.querySelector("#create-education-form");
const createSkillForm = document.querySelector("#create-skill-form");

const showHeaderContainer = document.querySelector(".show-header-container");
const showTechnicalProjectsContainer = document.querySelector(
  ".show-technical-projects-container"
);
const showWorkExperiencesContainer = document.querySelector(
  ".show-work-experiences-container"
);
const showEducationContainer = document.querySelector(
  ".show-education-container"
);
const showTechnicalSkillsContainer = document.querySelector(
  ".show-technical-skills-container"
);
// hmm!!!
const loggedInUser = document.createElement("h1");

const title = document.createElement("h3");
const personalWebsite = document.createElement("p");
const personalGitHub = document.createElement("p");
const personalLinkedIn = document.createElement("p");
const personalEmail = document.createElement("p");
const personalNumber = document.createElement("p");
const missionStatement = document.createElement("li");

const projectName = document.createElement("p");
const projectDescription = document.createElement("p");
const projectDeployedApp = document.createElement("p");
const projectGitHub = document.createElement("p");
const projectVideo = document.createElement("p");
const projectDetailedDescription = document.createElement("li");

const experienceJobTitle = document.createElement("p");
const experienceDate = document.createElement("p");
const experienceLocation = document.createElement("p");
const experienceDescription = document.createElement("p");
const experienceDetailedDescription = document.createElement("li");

const educationName = document.createElement("p");
const educationDate = document.createElement("p");
const educationDescription = document.createElement("li");

const skillDescription = document.createElement("p");
// Create Elements For Create Form
const createPersonalTitle = document.createElement("h3");
const createPersonalWebsite = document.createElement("p");
const createPersonalGitHub = document.createElement("p");
const createPersonalLinkedIn = document.createElement("p");
const createPersonalEmail = document.createElement("p");
const createPersonalNumber = document.createElement("p");
const createMissionStatement = document.createElement("li");

const createProjectName = document.createElement("p");
const createProjectDescription = document.createElement("p");
const createProjectDeployedApp = document.createElement("p");
const createProjectGitHub = document.createElement("p");
const createProjectVideo = document.createElement("p");
const createProjectDetailedDescription = document.createElement("li");

const createExperienceJobTitle = document.createElement("p");
const createExperienceDate = document.createElement("p");
const createExperienceLocation = document.createElement("p");
const createExperienceDescription = document.createElement("p");
const createExperienceDetailedDescription = document.createElement("li");

const createEducationName = document.createElement("p");
const createEducationDate = document.createElement("p");
const createEducationDescription = document.createElement("li");

const createSkillDescription = document.createElement("p");

// Even More Inputs!
const createPersonalTitleInputTag = document.querySelector(
  "#create-personal-title"
);
const createPersonalWebsiteInputTag = document.querySelector(
  "#create-personal-website"
);
const createPersonalGitHubInputTag = document.querySelector(
  "#create-personal-git-hub"
);
const createPersonalLinkedInInputTag = document.querySelector(
  "#create-personal-linked-in"
);
const createPersonalEmailInputTag = document.querySelector(
  "#create-personal-email"
);
const createPersonalPhoneNumberInputTag = document.querySelector(
  "#create-personal-phone-number"
);
const createPersonalMissionStatementInputTag = document.querySelector(
  "#create-personal-mission-statement"
);

const createProjectNameInputTag = document.querySelector(
  "#create-project-name"
);
const createProjectDescriptionInputTag = document.querySelector(
  "#create-project-description"
);
const createProjectDeployedAppInputTag = document.querySelector(
  "#create-deployed-app"
);
const createProjectGitHubInputTag = document.querySelector(
  "#create-project-git-hub"
);
const createProjectVideoInputTag = document.querySelector(
  "#create-project-video"
);
const createProjectDetailedDescriptionInputTag = document.querySelector(
  "#create-project-detailed-description"
);

const createJobTitleInputTag = document.querySelector("#create-job-title");
const createJobDateInputTag = document.querySelector("#create-job-date");
const createJobLocationInputTag = document.querySelector(
  "#create-job-location"
);
const createJobDescriptionInputTag = document.querySelector(
  "#create-job-description"
);
const createJobDetailedDescriptionInputTag = document.querySelector(
  "#create-job-detailed-description"
);

const createEducationNameInputTag = document.querySelector(
  "#create-education-name"
);
const createEducationDateInputTag = document.querySelector(
  "#create-education-date"
);
const createEducationDescriptionInputTag = document.querySelector(
  "#create-education-description"
);

const createSkillDescriptionInputTag = document.querySelector(
  "#create-skill-description"
);
// Inputs!!!!!!!
const personalTitleInputTag = document.querySelector(
  'input[name="personal-title"]'
);
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
const projectDeployedAppInputTag = document.querySelector(
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

const jobTitleInputTag = document.querySelector('input[name="job-title"]');
const jobDateInputTag = document.querySelector('input[name="job-date"]');
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
toSwitchToSignupForm();
toSignupUser();
toSwitchToLoginForm();
toLoginUser();
ifForgotPassword();
ifRememberPassword();
toAccessResume();
toEnterEditMode();
toExitEditMode();
toLogout();
function ifRememberPassword() {
  rememberPasswordButton.addEventListener("click", () => {
    function displayRememberPasswordFunctionality() {
      enterPasswordInput.style.display = "block";
      forgotPasswordButton.style.display = "block";
      loginButton.style.display = "block";
      enterUsernameInput.style.display = "block";
      rememberPasswordButton.style.display = "none";
      resetPasswordButton.style.display = "none";
      enterEmailInput.style.display = "none";
    }
    displayRememberPasswordFunctionality();
  });
}
function ifForgotPassword() {
  forgotPasswordButton.addEventListener("click", () => {
    function displayForgotPasswordFunctionality() {
      enterPasswordInput.style.display = "none";
      enterUsernameInput.style.display = "none";
      loginButton.style.display = "none";
      forgotPasswordButton.style.display = "none";
      enterEmailInput.style.display = "block";
      resetPasswordButton.style.display = "block";
      rememberPasswordButton.style.display = "block";
    }
    displayForgotPasswordFunctionality();
  });
}
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
  function toLogoutFunctionality() {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("token");
      logoutButton.style.display = "none";
      resumeContainer.style.display = "none";
      editMode.style.display = "none";
      loginForm.style.display = "block";
      loginContainer.style.display = "block";
    });
  }
  toLogoutFunctionality();
}
function toExitEditMode() {
  exitEditMode.addEventListener("click", () => {
    toHideAddUpdateButtons();
    toHideAddUpdateForms();

    function displayExitEditButtonFunctionality() {
      exitEditMode.style.display = "none";
      editMode.style.display = "block";
      logoutButton.style.display = "block";
    }
    displayExitEditButtonFunctionality();
  });
}
function toHideAddUpdateForms() {
  updateHeaderForm.style.display = "none";
  updateEducationForm.style.display = "none";
  updateExperienceForm.style.display = "none";
  updateProjectForm.style.display = "none";
  updateSkillForm.style.display = "none";
  createHeaderForm.style.display = "none";
  createEducationForm.style.display = "none";
  createExperienceForm.style.display = "none";
  createProjectForm.style.display = "none";
  createSkillForm.style.display = "none";
}
function toHideAddUpdateButtons() {
  updateHeaderButton.style.display = "none";
  addNewHeaderButton.style.display = "none";
  updateProjectButton.style.display = "none";
  addNewProjectButton.style.display = "none";
  updateExperienceButton.style.display = "none";
  addExperienceButton.style.display = "none";
  updateEducationButton.style.display = "none";
  addEducationButton.style.display = "none";
  updateSkillButton.style.display = "none";
  addNewSkillButton.style.display = "none";
}
// POST request/response to the database/server? to create user
function toSignupUser() {
  signupForm.addEventListener("submit", () => {
    event.preventDefault();
    let signupName = event.target.name.value;
    let signupUsername = event.target.username.value;
    let signupPassword = event.target.username.value;
    console.log(signupName, signupUsername, signupPassword);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: signupName,
        username: signupUsername,
        password: signupPassword
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log("signup submission", result);
        signupForm.reset();
      });
  });
}
// POST request/response to login user and store token
function toLoginUser() {
  loginForm.addEventListener("submit", () => {
    event.preventDefault();
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
function toShowAddUpdateButtons() {
  updateHeaderButton.style.display = "block";
  addNewHeaderButton.style.display = "block";
  updateProjectButton.style.display = "block";
  addNewProjectButton.style.display = "block";
  updateExperienceButton.style.display = "block";
  addExperienceButton.style.display = "block";
  updateEducationButton.style.display = "block";
  addEducationButton.style.display = "block";
  updateSkillButton.style.display = "block";
  addNewSkillButton.style.display = "block";
}
function toEnterEditMode() {
  editMode.addEventListener("click", () => {
    toShowAddUpdateButtons();

    function displayEditButtonFunctionality() {
      exitEditMode.style.display = "block";
      editMode.style.display = "none";
      logoutButton.style.display = "none";
    }
    displayEditButtonFunctionality();
    console.log("inside edit mode");
  });
}
function toAccessResume() {
  if (localStorage.token) {
    function displayToAccessResumeFunctionality() {
      editMode.style.display = "block";
      loginForm.style.display = "none";
      logoutButton.style.display = "block";
      loginContainer.style.display = "none";
    }
    displayToAccessResumeFunctionality();

    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(user => {
        function toAutofillAllInputFieldsInEditMode() {
          function toAutofillHeaderInputFields(header) {
            personalTitleInputTag.value = header.title;
            personalWebsiteInputTag.value = header.personal_website;
            personalGitHubInputTag.value = header.git_hub;
            personalLinkedInInputTag.value = header.linked_in;
            personalEmailInputTag.value = header.email;
            personalPhoneNumberInputTag.value = header.phone_number;
            personalMissionStatementInputTag.value = header.mission_statement;
          }
          user.headers.map(toAutofillHeaderInputFields);
          function toAutofillProjectInputFields(project) {
            projectNameInputTag.value = project.name;
            projectDescriptionInputTag.value = project.description;
            projectDeployedAppInputTag.value = project.deployed_app;
            projectGitHubInputTag.value = project.git_hub;
            projectVideoInputTag.value = project.video;
            projectDetailedDescriptionInputTag.value =
              project.detailed_description;
          }
          user.technical_projects.map(toAutofillProjectInputFields);
          function toAutofillExperienceInputFields(experience) {
            jobTitleInputTag.value = experience.job_title;
            jobDateInputTag.value = experience.date;
            jobLocationInputTag.value = experience.location;
            jobDescriptionInputTag.value = experience.description;
            jobDetailedDescriptionInputTag.value =
              experience.detailed_description;
          }
          user.work_experiences.map(toAutofillExperienceInputFields);
          function toAutofillEducationInputFields(education) {
            educationNameInputTag.value = education.name;
            educationDateInputTag.value = education.date;
            educationDescriptionInputTag.value = education.description;
          }
          user.educations.map(toAutofillEducationInputFields);
          function toAutofillSkillInputFields() {
            skillDescriptionInputTag.value =
              user.technical_skills[0].description;
          }
          toAutofillSkillInputFields();
        }
        toAutofillAllInputFieldsInEditMode();

        loggedInUser.textContent = user.name;

        topContainer.append(loggedInUser);

        function toShowHeader(header) {
          // console.log("header", header);

          title.textContent = header.title;
          personalWebsite.innerHTML = `<a href="${header.personal_website}">Personal Website</a> | `;
          personalGitHub.innerHTML = `| <a href="${header.git_hub}">GitHub</a> |`;
          personalLinkedIn.innerHTML = `| <a href="${header.linked_in}">LinkedIn</a> |`;
          personalEmail.innerHTML = `| <a href="${header.email}">Email</a> |`;
          personalNumber.textContent = `| ${header.phone_number}`;
          missionStatement.textContent = header.mission_statement;

          showHeaderContainer.append(
            title,
            personalWebsite,
            personalGitHub,
            personalLinkedIn,
            personalEmail,
            personalNumber,
            missionStatement
          );
        }
        user.headers.map(toShowHeader);

        function createHeader() {
          event.preventDefault();
          console.log("hi");

          createPersonalTitle.textContent = createPersonalTitleInputTag.value;
          createPersonalWebsite.innerHTML = `<a href="${createPersonalWebsiteInputTag.value}">Personal Website</a> | `;
          createPersonalGitHub.innerHTML = `| <a href="${createPersonalGitHubInputTag.value}">GitHub</a> |`;
          createPersonalLinkedIn.innerHTML = `| <a href="${createPersonalLinkedInInputTag.value}">LinkedIn</a> |`;
          createPersonalEmail.innerHTML = `| <a href="${createPersonalEmailInputTag.value}">Email</a> |`;
          createPersonalNumber.textContent = `| ${createPersonalPhoneNumberInputTag.value}`;
          createMissionStatement.textContent =
            createPersonalMissionStatementInputTag.value;

          showHeaderContainer.append(
            createPersonalTitle,
            createPersonalWebsite,
            createPersonalGitHub,
            createPersonalLinkedIn,
            createPersonalEmail,
            createPersonalNumber,
            createMissionStatement
          );
        }
        createHeaderForm.addEventListener("submit", createHeader);

        function updateHeader() {
          event.preventDefault();
          console.log("input tag", personalWebsiteInputTag);
          title.textContent = personalTitleInputTag.value;
          personalWebsite.innerHTML = `<a href="${personalWebsiteInputTag.value}">Personal Website</a> | `;
          personalGitHub.innerHTML = `| <a href="${personalGitHubInputTag.value}">GitHub</a> |`;
          personalLinkedIn.innerHTML = `| <a href="${personalLinkedInInputTag.value}">LinkedIn</a> |`;
          personalEmail.innerHTML = `| <a href="${personalEmailInputTag.value}">Email</a> |`;
          personalNumber.textContent = `| ${personalPhoneNumberInputTag.value}`;
          missionStatement.textContent = personalMissionStatementInputTag.value;
        }
        updateHeaderForm.addEventListener("submit", updateHeader);

        function createTechnicalProjects() {
          event.preventDefault();
          event.preventDefault();
          createProjectName.innerHTML = `<strong>${createProjectNameInputTag.value}</strong> -`;
          createProjectDescription.innerHTML = `<em>${createProjectDescriptionInputTag.value}</em>`;
          createProjectDeployedApp.innerHTML = `<a href="${createProjectDeployedAppInputTag.value}">Deployed App</a> (username: <em>user</em> , password: <em>123</em> )`;
          createProjectGitHub.innerHTML = `GitHub: <a href="${createProjectGitHubInputTag.value}">${createProjectGitHubInputTag.value}</a> | <a href="${createProjectVideoInputTag.value}">Walk-through Video</a>`;
          createProjectDetailedDescription.textContent =
            createProjectDetailedDescriptionInputTag.value;

          showTechnicalProjectsContainer.append(
            createProjectName,
            createProjectDescription,
            createProjectDeployedApp,
            createProjectGitHub,
            createProjectDetailedDescription
          );
        }
        createProjectForm.addEventListener("submit", createTechnicalProjects);

        function updateTechnicalProjects() {
          event.preventDefault();
          projectName.innerHTML = `<strong>${projectNameInputTag.value}</strong> -`;
          projectDescription.innerHTML = `<em>${projectDescriptionInputTag.value}</em>`;
          projectDeployedApp.innerHTML = `<a href="${projectDeployedAppInputTag.value}">Deployed App</a> (username: <em>user</em> , password: <em>123</em> )`;
          projectGitHub.innerHTML = `GitHub: <a href="${projectGitHubInputTag.value}">${projectGitHubInputTag.value}</a> | <a href="${projectVideoInputTag.value}">Walk-through Video</a>`;
          projectDetailedDescription.textContent =
            projectDetailedDescriptionInputTag.value;
        }
        updateProjectForm.addEventListener("submit", updateTechnicalProjects);

        function toShowTechnicalProjects(project) {
          // console.log("project", project);

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

          showTechnicalProjectsContainer.append(
            projectName,
            projectDescription,
            projectDeployedApp,
            projectGitHub,
            // projectVideo,
            projectDetailedDescription
          );
        }
        user.technical_projects.map(toShowTechnicalProjects);

        function createWorkExperience() {
          event.preventDefault();
          createExperienceJobTitle.innerHTML = `<strong>${createJobTitleInputTag.value}</strong>`;
          createExperienceDate.textContent = createJobDateInputTag.value;
          createExperienceLocation.textContent =
            createJobLocationInputTag.value;
          createExperienceDescription.textContent =
            createJobDescriptionInputTag.value;
          createExperienceDetailedDescription.textContent =
            createJobDetailedDescriptionInputTag.value;

          showWorkExperiencesContainer.append(
            createExperienceJobTitle,
            createExperienceDate,
            createExperienceLocation,
            createExperienceDescription,
            createExperienceDetailedDescription
          );
        }
        createExperienceForm.addEventListener("submit", createWorkExperience);

        function updateWorkExperience() {
          event.preventDefault();
          experienceJobTitle.innerHTML = `<strong>${jobTitleInputTag.value}</strong>`;
          experienceDate.textContent = jobDateInputTag.value;
          experienceLocation.textContent = jobLocationInputTag.value;
          experienceDescription.textContent = jobDescriptionInputTag.value;
          experienceDetailedDescription.textContent =
            jobDetailedDescriptionInputTag.value;
        }
        updateExperienceForm.addEventListener("submit", updateWorkExperience);

        function toShowWorkExperience(experience) {
          // console.log("experience", experience);

          experienceJobTitle.innerHTML = `<strong>${experience.job_title}</strong>`;
          experienceDate.textContent = experience.date;
          experienceLocation.textContent = experience.location;
          experienceDescription.textContent = experience.description;
          experienceDetailedDescription.textContent =
            experience.detailed_description;

          showWorkExperiencesContainer.append(
            experienceJobTitle,
            experienceDate,
            experienceLocation,
            experienceDescription,
            experienceDetailedDescription
          );
        }
        user.work_experiences.map(toShowWorkExperience);

        function createEducation() {
          event.preventDefault();
          createEducationName.innerHTML = `<strong>${createEducationNameInputTag.value}</strong>`;
          createEducationDate.textContent = createEducationDateInputTag.value;
          createEducationDescription.textContent =
            createEducationDescriptionInputTag.value;

          showEducationContainer.append(
            createEducationName,
            createEducationDate,
            createEducationDescription
          );
        }
        createEducationForm.addEventListener("submit", createEducation);

        function updateEducation() {
          event.preventDefault();
          educationName.innerHTML = `<strong>${educationNameInputTag.value}</strong>`;
          educationDate.textContent = educationDateInputTag.value;
          educationDescription.textContent = educationDescriptionInputTag.value;
        }
        updateEducationForm.addEventListener("submit", updateEducation);

        function toShowEducation(education) {
          // console.log("education", education);
          educationName.innerHTML = `<strong>${education.name}</strong>`;
          educationDate.textContent = education.date;
          educationDescription.textContent = education.description;

          showEducationContainer.append(
            educationName,
            educationDate,
            educationDescription
          );
        }
        user.educations.map(toShowEducation);

        function createTechnicalSkills() {
          event.preventDefault();
          createSkillDescription.textContent =
            createSkillDescriptionInputTag.value;

          showTechnicalSkillsContainer.append(createSkillDescription);
        }
        createSkillForm.addEventListener("submit", createTechnicalSkills);

        function updateTechnicalSkills() {
          event.preventDefault();
          skillDescription.textContent = skillDescriptionInputTag.value;
        }
        updateSkillForm.addEventListener("submit", updateTechnicalSkills);

        function toShowTechnicalSkills(skill) {
          skillDescription.textContent = skill.description;
          showTechnicalSkillsContainer.append(skillDescription);
        }
        user.technical_skills.map(toShowTechnicalSkills);
      })
      .catch(error => console.log(error));
  }
}

toShowHeaderForm();
toShowProjectForm();
toShowExperienceForm();
toShowEducationForm();
toShowSkillForm();
toShowCreateHeaderForm();
toShowCreateProjectForm();
toShowCreateExperienceForm();
toShowCreateSkillForm();
toShowCreateEducationForm();
function toShowHeaderForm() {
  updateHeaderButton.addEventListener("click", () => {
    updateHeaderForm.style.display = "block";
    updateHeaderButton.style.display = "none";
    addNewHeaderButton.style.display = "none";
  });
}
function toShowProjectForm() {
  updateProjectButton.addEventListener("click", () => {
    updateProjectForm.style.display = "block";
    updateProjectButton.style.display = "none";
    addNewProjectButton.style.display = "none";
  });
}
function toShowExperienceForm() {
  updateExperienceButton.addEventListener("click", () => {
    updateExperienceForm.style.display = "block";
    updateExperienceButton.style.display = "none";
    addExperienceButton.style.display = "none";
  });
}
function toShowEducationForm() {
  updateEducationButton.addEventListener("click", () => {
    updateEducationForm.style.display = "block";
    updateEducationButton.style.display = "none";
    addEducationButton.style.display = "none";
  });
}
function toShowSkillForm() {
  updateSkillButton.addEventListener("click", () => {
    updateSkillForm.style.display = "block";
    updateSkillButton.style.display = "none";
    addNewSkillButton.style.display = "none";
  });
}
function toShowCreateHeaderForm() {
  addNewHeaderButton.addEventListener("click", () => {
    createHeaderForm.style.display = "block";
    updateHeaderButton.style.display = "none";
    addNewHeaderButton.style.display = "none";
  });
}
function toShowCreateProjectForm() {
  addNewProjectButton.addEventListener("click", () => {
    createProjectForm.style.display = "block";
    updateProjectButton.style.display = "none";
    addNewProjectButton.style.display = "none";
  });
}
function toShowCreateExperienceForm() {
  addExperienceButton.addEventListener("click", () => {
    createExperienceForm.style.display = "block";
    updateExperienceButton.style.display = "none";
    addExperienceButton.style.display = "none";
  });
}
function toShowCreateEducationForm() {
  addEducationButton.addEventListener("click", () => {
    createEducationForm.style.display = "block";
    updateEducationButton.style.display = "none";
    addEducationButton.style.display = "none";
  });
}
function toShowCreateSkillForm() {
  addNewSkillButton.addEventListener("click", () => {
    createSkillForm.style.display = "block";
    updateSkillButton.style.display = "none";
    addNewSkillButton.style.display = "none";
  });
}

toHideHeaderForm();
toHideProjectForm();
toHideExperienceForm();
toHideEducationForm();
toHideSkillForm();
toHideCreateHeaderForm();
toHideCreateProjectForm();
toHideCreateExperienceForm();
toHideCreateEducationForm();
toHideCreateSkillForm();
function toHideHeaderForm() {
  updateHeaderButton.addEventListener("click", () => {
    updateHeaderForm.style.display = "block";
  });
  updateHeaderForm.addEventListener("submit", () => {
    updateHeaderForm.style.display = "none";
  });
}
function toHideProjectForm() {
  updateProjectButton.addEventListener("click", () => {
    updateProjectForm.style.display = "block";
  });
  updateProjectForm.addEventListener("submit", () => {
    updateProjectForm.style.display = "none";
  });
}
function toHideEducationForm() {
  updateEducationButton.addEventListener("click", () => {
    updateEducationForm.style.display = "block";
  });
  updateEducationForm.addEventListener("submit", () => {
    updateEducationForm.style.display = "none";
  });
}
function toHideExperienceForm() {
  updateExperienceButton.addEventListener("click", () => {
    updateExperienceForm.style.display = "block";
  });
  updateExperienceForm.addEventListener("submit", () => {
    updateExperienceForm.style.display = "none";
  });
}
function toHideSkillForm() {
  updateSkillButton.addEventListener("click", () => {
    updateSkillForm.style.display = "block";
  });
  updateSkillForm.addEventListener("submit", () => {
    updateSkillForm.style.display = "none";
  });
}
function toHideCreateHeaderForm() {
  addNewHeaderButton.addEventListener("click", () => {
    createHeaderForm.style.display = "block";
  });
  createHeaderForm.addEventListener("submit", () => {
    createHeaderForm.style.display = "none";
  });
}
function toHideCreateProjectForm() {
  addNewProjectButton.addEventListener("click", () => {
    createProjectForm.style.display = "block";
  });
  createProjectForm.addEventListener("submit", () => {
    createProjectForm.style.display = "none";
  });
}
function toHideCreateExperienceForm() {
  addExperienceButton.addEventListener("click", () => {
    createExperienceForm.style.display = "block";
  });
  createExperienceForm.addEventListener("submit", () => {
    createExperienceForm.style.display = "none";
  });
}
function toHideCreateEducationForm() {
  addEducationButton.addEventListener("click", () => {
    createEducationForm.style.display = "block";
  });
  createEducationForm.addEventListener("submit", () => {
    createEducationForm.style.display = "none";
  });
}
function toHideCreateSkillForm() {
  addNewSkillButton.addEventListener("click", () => {
    createSkillForm.style.display = "block";
  });
  createSkillForm.addEventListener("submit", () => {
    createSkillForm.style.display = "none";
  });
}
