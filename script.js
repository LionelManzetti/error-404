const button = document.querySelector(".homeButton");
const title = document.querySelector("h1");
const menu = document.querySelector(".menu");
const homeDiv = document.querySelector(".home");
const home = document.querySelector("#home");
const wilders = document.querySelector("#wilders");
const wildersDiv = document.querySelector(".wilders");
const teachers = document.querySelector("#teachers");
const teachersDiv = document.querySelector(".teachers");
const projects = document.querySelector("#projects");
const projectsDiv = document.querySelector(".projects");
const contact = document.querySelector("#contact");
const contactDiv = document.querySelector(".contact");
const presentation = document.querySelector(".presentation");
const switchWrapper = document.querySelector(".theme-switch-wrapper");
const screamImg = document.querySelector("#screamImg");
const strike = document.querySelector("#strike");

// Unfolding of the landing page to reveal the navigation bar
button.addEventListener('click', function () {
  menu.classList.add('transform');
  home.classList.add('localisation');
  switchWrapper.style.display = "flex";
  title.style.fontSize = "5em";
  screamImg.style.maxWidth = "0%";
  screamImg.style.opacity = "0%";
  strike.style.textDecoration = "line-through";
  button.style.opacity = "0%";
  presentation.innerHTML = "<b>This was the homepage all along.</b> </br> We are Team Error 404. </br></br> Students of the Wild Code School aka <b>Wilders</b>, on this homepage you'll find our projets and more infos about our team members. Take a look around !";
});

// Dynamic menu on the left
wilders.addEventListener('click', function () {
  homeDiv.style.display = "none";
  wildersDiv.style.display = "flex";
  contactDiv.style.display = "none";
  projectsDiv.style.display = "none";
  teachersDiv.style.display = "none";
  wilders.classList.add('localisation');
  home.classList.remove('localisation');
  teachers.classList.remove('localisation');
  projects.classList.remove('localisation');
  contact.classList.remove('localisation');
});
home.addEventListener('click', function () {
  homeDiv.style.display = "flex";
  wildersDiv.style.display = "none";
  contactDiv.style.display = "none";
  projectsDiv.style.display = "none";
  teachersDiv.style.display = "none";
  home.classList.add('localisation');
  wilders.classList.remove('localisation');
  teachers.classList.remove('localisation');
  projects.classList.remove('localisation');
  contact.classList.remove('localisation');
});
teachers.addEventListener('click', function () {
  teachersDiv.style.display = "flex";
  wildersDiv.style.display = "none";
  homeDiv.style.display = "none";
  contactDiv.style.display = "none";
  projectsDiv.style.display = "none";
  wilders.classList.remove('localisation');
  home.classList.remove('localisation');
  teachers.classList.add('localisation');
  projects.classList.remove('localisation');
  contact.classList.remove('localisation');
});
projects.addEventListener('click', function () {
  projectsDiv.style.display = "flex";
  wildersDiv.style.display = "none";
  homeDiv.style.display = "none";
  contactDiv.style.display = "none";
  teachersDiv.style.display = "none";
  wilders.classList.remove('localisation');
  home.classList.remove('localisation');
  teachers.classList.remove('localisation');
  projects.classList.add('localisation');
  contact.classList.remove('localisation');
});
contact.addEventListener('click', function () {
  contactDiv.style.display = "flex";
  wildersDiv.style.display = "none";
  homeDiv.style.display = "none";
  teachersDiv.style.display = "none";
  projectsDiv.style.display = "none";
  wilders.classList.remove('localisation');
  home.classList.remove('localisation');
  teachers.classList.remove('localisation');
  projects.classList.remove('localisation');
  contact.classList.add('localisation');
});


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);