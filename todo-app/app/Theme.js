
const html = document.querySelector('html');
html.dataset.theme = `theme-light`;

function switchTheme() {
  let themeSwitch = document.getElementById("theme-switch");
  if ( html.dataset.theme === `theme-light`){
    themeSwitch.src = "./images/icon-sun.svg";
    html.dataset.theme = `theme-dark`;
  }

  else{
    themeSwitch.src = "./images/icon-moon.svg";
    html.dataset.theme = `theme-light`;
    }
  console.log(html.dataset.theme);
}
