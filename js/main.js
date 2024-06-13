document.onreadystatechange = function() {
    if (document.readyState!== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

const darkMode = document.getElementById('dark');
const gitHubDark = document.getElementById('gitHubDark');
const darkMods = document.querySelectorAll('.dark-mod');

var isDark = false;

darkMode.addEventListener('click', () => {
  darkMode.classList.toggle('bi-sun-fill');
  darkMode.classList.toggle('bi-moon-fill');
  document.body.classList.toggle('dark-mode');
  if (isDark) {
    gitHubDark.style.color = "#111";
    darkMods.forEach((element) => {
      element.style.color = "#111";
    });
  } else {
    gitHubDark.style.color = "#fff";
    darkMods.forEach((element) => {
      element.style.color = "#fff";
    });
  }
  isDark =!isDark;
});

const dropDown = document.querySelector('.dropdown-container');

dropDown.addEventListener("click", function () {
    document.querySelector('.dropdown-container ul').classList.toggle('show')
})

const flag = document.getElementById('flags-container');
const textsToChange = document.querySelectorAll('[data-section]');

function flags() {
    const changeLanguage = async (language) => {
        const requestJson = await fetch(`./lenguajes/${language}.json`);
        const texts = await requestJson.json();
    
        console.log(texts);
    
        for (const text of textsToChange) {
            const section = text.dataset.section;
            const value = text.dataset.value;
                text.innerHTML = texts[section][value];
        }
    };

    flag.addEventListener('click', (e) => {
        changeLanguage(e.target.parentElement.dataset.language)
    });

    changeLanguage('es');
}

flags();
