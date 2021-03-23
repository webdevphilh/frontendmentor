


const html = document.querySelector('html');
html.dataset.theme = `theme-light`;

function switchTheme() {
  let themeSwitch = document.getElementById("theme-switch");
  if ( html.dataset.theme === `theme-light`){
    themeSwitch.src = "./images/icon-sun.svg";
    html.dataset.theme = `theme-dark`;
    // mobile vs desktop einstellen
    document.body.style.setProperty("background-image", "url(\"../images/bg-mobile-dark.jpg\")");
  }

  else{
    themeSwitch.src = "./images/icon-moon.svg";
    html.dataset.theme = `theme-light`;
    document.body.style.setProperty("background-image", "url(\"../images/bg-mobile-light.jpg\")");
    }
  console.log(html.dataset.theme);
}
