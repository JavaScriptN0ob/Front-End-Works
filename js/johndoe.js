let home = document.getElementById('home');
let resume = document.getElementById('resume');

let homePage = document.getElementById('homePage');
let resumePage = document.getElementById('resumePage');


home.addEventListener('click', () => {
  // console.log('homeBtn clicked');
  home.classList.add('activate');
  resume.classList.remove('activate');
  homePage.classList.remove('hidden');
  resumePage.classList.add('hidden');
});

resume.addEventListener('click', () => {
  // console.log('resumeBtn clicked');
  resume.classList.add('activate');
  home.classList.remove('activate');
  resumePage.classList.remove('hidden');
  homePage.classList.add('hidden');
});