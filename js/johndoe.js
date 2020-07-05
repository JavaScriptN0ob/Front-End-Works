let home = document.getElementById('home');
let resume = document.getElementById('resume');
let services = document.getElementById('services');
let blog = document.getElementById('blog');

let homePage = document.getElementById('homePage');
let resumePage = document.getElementById('resumePage');
let servicesPage = document.getElementById('servicesPage');
let blogPage = document.getElementById('blogPage');


home.addEventListener('click', () => {
  // console.log('homeBtn clicked');
  home.classList.add('activate');
  resume.classList.remove('activate');
  services.classList.remove('activate');
  blog.classList.remove('activate');
  homePage.classList.remove('hidden');
  resumePage.classList.add('hidden');
  servicesPage.classList.add('hidden');
  blogPage.classList.add('hidden');
});

resume.addEventListener('click', () => {
  // console.log('resumeBtn clicked');
  home.classList.remove('activate');
  resume.classList.add('activate');
  services.classList.remove('activate');
  blog.classList.remove('activate');
  homePage.classList.add('hidden');
  resumePage.classList.remove('hidden');
  servicesPage.classList.add('hidden');
  blogPage.classList.add('hidden');
});

services.addEventListener('click', () => {
  // console.log('servicesBtn clicked');
  home.classList.remove('activate');
  resume.classList.remove('activate');
  services.classList.add('activate');
  blog.classList.remove('activate');
  homePage.classList.add('hidden');
  resumePage.classList.add('hidden');
  servicesPage.classList.remove('hidden');
  blogPage.classList.add('hidden');
});

blog.addEventListener('click', () => {
  home.classList.remove('activate');
  resume.classList.remove('activate');
  services.classList.remove('activate');
  blog.classList.add('activate');
  homePage.classList.add('hidden');
  resumePage.classList.add('hidden');
  servicesPage.classList.add('hidden');
  blogPage.classList.remove('hidden');
})


// let blogCardHover = () => {
//   let blogArea = document.getElementsByClassName('blog__card--top');
//   let blogBackground = document.getElementsByClassName('blog__card-hover');

//   blogArea.addEventListener('mouseenter', () => {
//     blogBackground.classList.remove('hidden');
//     console.log('mouse in blogCard');
//   });
//   blogArea.addEventListener('mouseleave', () => {
//     blogBackground.classList.add('hidden');
//     console.log('mouse out blogCard');
//   });
// }

// above is not the effective way to solve mouse actions, as all 6 cards need add event listners, as the result I need
// to use Array for each function to add event listners. also with the children node array list to choose class from.

document
  .querySelectorAll('.blog__card--top')
  .forEach(function(element) {
    element.addEventListener('mouseenter', () => {
      // console.log('mouse moved in');
      element.childNodes[3].classList.remove('hidden');
    }),
    element.addEventListener('mouseleave', () => {
      // console.log('mouse left');
      element.childNodes[3].classList.add('hidden');
    })
  });

  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  name.addEventListener('click', () => {
    name.classList.add('green_up');
  });
  name.addEventListener('mouseleave', () => {
    setInterval( () => {name.classList.remove('green_up')}, 2000);
  })

  email.addEventListener('click', () => {
    email.classList.add('green_up');
  });
  email.addEventListener('mouseleave', () => {
    setInterval( () => {email.classList.remove('green_up')}, 2000);
  });

  message.addEventListener('click', () => {
    message.classList.add('green_up');
  });
  message.addEventListener('mouseleave', () => {
    setInterval( () => {message.classList.remove('green_up')}, 2000);
  });
