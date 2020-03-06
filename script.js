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
const resetPasswordButton = document.querySelector("#reset-password-button");
const enterPasswordInput = document.querySelector("#enter-password-input");
const enterEmailInput = document.querySelector("#enter-email-input");
const enterUsernameInput = document.querySelector("#enter-username-input");
const topContainer = document.querySelector(".top-container");
const editMode = document.querySelector("#edit-mode");
const exitEditMode = document.querySelector("#exit-edit-mode");
// const login_url = "http://localhost:3000/login"
const headerForm = document.querySelector("#header-form");
const projectForm = document.querySelector("#project-form");
const experienceForm = document.querySelector("#experience-form");
const educationForm = document.querySelector("#education-form");
const skillForm = document.querySelector("#skill-form");

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
const technicalProjects = document.createElement("h2");
const workExperiences = document.createElement("h2");
const educations = document.createElement("h2");
const technicalSkills = document.createElement("h2");

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

// inputs!!!!!!!
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
toExitEditMode();
toSwitchToSignupForm();
toSwitchToLoginForm();
toSignupUser();
toLoginUser();
ifForgotPassword();
ifRememberPassword();
toAccessResume();
toAccessEditMode();
function ifRememberPassword() {
  rememberPasswordButton.addEventListener("click", () => {
    enterPasswordInput.style.display = "block";
    forgotPasswordButton.style.display = "block";
    loginButton.style.display = "block";
    enterUsernameInput.style.display = "block";
    rememberPasswordButton.style.display = "none";
    resetPasswordButton.style.display = "none";
    enterEmailInput.style.display = "none";
  });
}
function ifForgotPassword() {
  forgotPasswordButton.addEventListener("click", () => {
    enterPasswordInput.style.display = "none";
    enterUsernameInput.style.display = "none";
    loginButton.style.display = "none";
    forgotPasswordButton.style.display = "none";
    enterEmailInput.style.display = "block";
    resetPasswordButton.style.display = "block";
    rememberPasswordButton.style.display = "block";
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
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("token");
    logoutButton.style.display = "none";
    resumeContainer.style.display = "none";
    editMode.style.display = "none";
    loginForm.style.display = "block";
    loginContainer.style.display = "block";
  });
}
function toExitEditMode() {
  exitEditMode.addEventListener("click", () => {
    headerForm.style.display = "none";
    educationForm.style.display = "none";
    experienceForm.style.display = "none";
    projectForm.style.display = "none";
    skillForm.style.display = "none";
    exitEditMode.style.display = "none";
    editMode.style.display = "block";
    logoutButton.style.display = "block";
  });
}
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
function toAccessEditMode() {
  editMode.addEventListener("click", () => {
    // console.log("event", event);
    headerForm.style.display = "block";
    educationForm.style.display = "block";
    experienceForm.style.display = "block";
    projectForm.style.display = "block";
    skillForm.style.display = "block";
    exitEditMode.style.display = "block";
    editMode.style.display = "none";
    logoutButton.style.display = "none";
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

        function toAutofillAllInputFieldsInEditMode() {
          personalWebsiteInputTag.value = user.headers[0].personal_website;
          personalGitHubInputTag.value = user.headers[0].git_hub;
          personalLinkedInInputTag.value = user.headers[0].linked_in;
          personalEmailInputTag.value = user.headers[0].email;
          personalPhoneNumberInputTag.value = user.headers[0].phone_number;
          personalMissionStatementInputTag.value =
            user.headers[0].mission_statement;

          user.technical_projects.map(project => {
            // console.log("project for input tags!", project);
            projectNameInputTag.value = project.name;
            projectDescriptionInputTag.value = project.description;
            projectDeployedAppInputTag.value = project.deployed_app;
            projectGitHubInputTag.value = project.git_hub;
            projectVideoInputTag.value = project.video;
            projectDetailedDescriptionInputTag.value =
              project.detailed_description;
          });

          user.work_experiences.map(experience => {
            // console.log(experience);
            jobTitleInputTag.value = experience.job_title;
            jobDateInputTag.value = experience.date;
            jobLocationInputTag.value = experience.location;
            jobDescriptionInputTag.value = experience.description;
            jobDetailedDescriptionInputTag.value =
              experience.detailed_description;
          });

          user.educations.map(education => {
            // console.log(education);
            educationNameInputTag.value = education.name;
            educationDateInputTag.value = education.date;
            educationDescriptionInputTag.value = education.description;
          });

          skillDescriptionInputTag.value = user.technical_skills[0].description;
        }
        toAutofillAllInputFieldsInEditMode();
      })
      .catch(error => console.log(error));
  });
}
function toAccessResume() {
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
        // console.log("user", user);
        toLogout();
        loggedInUser.textContent = user.name;
        technicalProjects.textContent = "Technical Projects";
        workExperiences.textContent = "Work Experience";
        educations.textContent = "Education";
        technicalSkills.textContent = "Technical Skills";

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
        }
        // createHeaderForm.addEventListener("submit", createHeader);

        function updateHeader() {
          event.preventDefault();
          // console.log("user", user);
          // console.log("website", user.headers[0].personal_website);
          console.log("input tag", personalWebsiteInputTag);
          personalWebsite.innerHTML = `<a href="${personalWebsiteInputTag.value}">Personal Website</a> | `;
          personalGitHub.innerHTML = `| <a href="${personalGitHubInputTag.value}">GitHub</a> |`;
          personalLinkedIn.innerHTML = `| <a href="${personalLinkedInInputTag.value}">LinkedIn</a> |`;
          personalEmail.innerHTML = `| <a href="${personalEmailInputTag.value}">Email</a> |`;
          personalNumber.textContent = `| ${personalPhoneNumberInputTag.value}`;
          missionStatement.textContent = personalMissionStatementInputTag.value;
          console.log(
            personalWebsite,
            personalGitHub,
            personalLinkedIn,
            personalEmail,
            personalNumber,
            missionStatement
          );
        }
        headerForm.addEventListener("submit", updateHeader);

        function updateTechnicalProjects() {
          event.preventDefault();
          projectName.innerHTML = `<strong>${projectNameInputTag.value}</strong> -`;
          projectDescription.innerHTML = `<em>${projectDescriptionInputTag.value}</em>`;
          projectDeployedApp.innerHTML = `<a href="${projectDeployedAppInputTag.value}">Deployed App</a> (username: <em>user</em> , password: <em>123</em> )`;
          projectGitHub.innerHTML = `GitHub: <a href="${projectGitHubInputTag.value}">${projectGitHubInputTag.value}</a> | <a href="${projectVideoInputTag.value}">Walk-through Video</a>`;
          projectDetailedDescription.textContent =
            projectDetailedDescriptionInputTag.value;
        }
        projectForm.addEventListener("submit", updateTechnicalProjects);

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
            technicalProjects,
            projectName,
            projectDescription,
            projectDeployedApp,
            projectGitHub,
            // projectVideo,
            projectDetailedDescription
          );
        }
        user.technical_projects.map(toShowTechnicalProjects);

        function updateWorkExperience() {
          event.preventDefault();
          experienceJobTitle.innerHTML = `<strong>${jobTitleInputTag.value}</strong>`;
          experienceDate.textContent = jobDateInputTag.value;
          experienceLocation.textContent = jobLocationInputTag.value;
          experienceDescription.textContent = jobDescriptionInputTag.value;
          experienceDetailedDescription.textContent =
            jobDetailedDescriptionInputTag.value;
        }
        experienceForm.addEventListener("submit", updateWorkExperience);

        function toShowWorkExperience(experience) {
          // console.log("experience", experience);

          experienceJobTitle.innerHTML = `<strong>${experience.job_title}</strong>`;
          experienceDate.textContent = experience.date;
          experienceLocation.textContent = experience.location;
          experienceDescription.textContent = experience.description;
          experienceDetailedDescription.textContent =
            experience.detailed_description;

          showWorkExperiencesContainer.append(
            workExperiences,
            experienceJobTitle,
            experienceDate,
            experienceLocation,
            experienceDescription,
            experienceDetailedDescription
          );
        }
        user.work_experiences.map(toShowWorkExperience);

        function updateEducation() {
          event.preventDefault();
          educationName.innerHTML = `<strong>${educationNameInputTag.value}</strong>`;
          educationDate.textContent = educationDateInputTag.value;
          educationDescription.textContent = educationDescriptionInputTag.value;
        }
        educationForm.addEventListener("submit", updateEducation);

        function toShowEducation(education) {
          // console.log("education", education);
          educationName.innerHTML = `<strong>${education.name}</strong>`;
          educationDate.textContent = education.date;
          educationDescription.textContent = education.description;

          showEducationContainer.append(
            educations,
            educationName,
            educationDate,
            educationDescription
          );
        }
        user.educations.map(toShowEducation);

        function updateTechnicalSkills() {
          event.preventDefault();
          skillDescription.textContent = skillDescriptionInputTag.value;
        }
        skillForm.addEventListener("submit", updateTechnicalSkills);

        function toShowTechnicalSkills(skill) {
          // console.log("skill", skill);
          skillDescription.textContent = skill.description;

          showTechnicalSkillsContainer.append(
            technicalSkills,
            skillDescription
          );
        }
        user.technical_skills.map(toShowTechnicalSkills);
      })
      .catch(error => console.log(error));
  }
}
