let home = document.getElementById('home');
let resume = document.getElementById('resume');
let services = document.getElementById('services');
let blog = document.getElementById('blog');
let contact = document.getElementById('contact');

let homePage = document.getElementById('homePage');
let resumePage = document.getElementById('resumePage');
let servicesPage = document.getElementById('servicesPage');
let blogPage = document.getElementById('blogPage');
let contactPage = document.getElementById('contactPage');


home.addEventListener('click', () => {
  // console.log('homeBtn clicked');
  home.classList.add('activate');
  resume.classList.remove('activate');
  services.classList.remove('activate');
  blog.classList.remove('activate');
  contact.classList.remove('activate');
  homePage.classList.remove('hidden');
  resumePage.classList.add('hidden');
  servicesPage.classList.add('hidden');
  blogPage.classList.add('hidden');
  contactPage.classList.add('hidden');
});

resume.addEventListener('click', () => {
  // console.log('resumeBtn clicked');
  home.classList.remove('activate');
  resume.classList.add('activate');
  services.classList.remove('activate');
  blog.classList.remove('activate');
  contact.classList.remove('activate');
  homePage.classList.add('hidden');
  resumePage.classList.remove('hidden');
  servicesPage.classList.add('hidden');
  blogPage.classList.add('hidden');
  contactPage.classList.add('hidden');
});

services.addEventListener('click', () => {
  // console.log('servicesBtn clicked');
  home.classList.remove('activate');
  resume.classList.remove('activate');
  services.classList.add('activate');
  blog.classList.remove('activate');
  contact.classList.remove('activate');
  homePage.classList.add('hidden');
  resumePage.classList.add('hidden');
  servicesPage.classList.remove('hidden');
  blogPage.classList.add('hidden');
  contactPage.classList.add('hidden');
});

blog.addEventListener('click', () => {
  home.classList.remove('activate');
  resume.classList.remove('activate');
  services.classList.remove('activate');
  blog.classList.add('activate');
  contact.classList.remove('activate');
  homePage.classList.add('hidden');
  resumePage.classList.add('hidden');
  servicesPage.classList.add('hidden');
  blogPage.classList.remove('hidden');
  contactPage.classList.add('hidden');
})

contact.addEventListener('click', () => {
  home.classList.remove('activate');
  resume.classList.remove('activate');
  services.classList.remove('activate');
  blog.classList.remove('activate');
  contact.classList.add('activate');
  homePage.classList.add('hidden');
  resumePage.classList.add('hidden');
  servicesPage.classList.add('hidden');
  blogPage.classList.add('hidden');
  contactPage.classList.remove('hidden');
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

  // let name = document.getElementById('name');
  // let email = document.getElementById('email');
  // let message = document.getElementById('message');

  // name.addEventListener('click', () => {
  //   name.classList.add('green_up');
  // });
  // name.addEventListener('mouseleave', () => {
  //   setInterval( () => {name.classList.remove('green_up')}, 2000);
  // })

  // email.addEventListener('click', () => {
  //   email.classList.add('green_up');
  // });
  // email.addEventListener('mouseleave', () => {
  //   setInterval( () => {email.classList.remove('green_up')}, 2000);
  // });

  // message.addEventListener('click', () => {
  //   message.classList.add('green_up');
  // });
  // message.addEventListener('mouseleave', () => {
  //   setInterval( () => {message.classList.remove('green_up')}, 2000);
  // });

let name = document.querySelector('#name');
let nameInputBox = name.parentNode.parentNode;
let email = document.querySelector('#email');
let emailInputBox = email.parentNode.parentNode;
var emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let message = document.querySelector('#message');
let messageInputBox = message.parentNode.parentNode;

nameInputBox.addEventListener('click', () => {
  nameInputBox.childNodes[1].childNodes[0].classList.add('form_head--success');
  if(name.value == "") {
    nameInputBox.classList.remove('form--success');
    nameInputBox.classList.add('form--fail');
    nameInputBox.childNodes[1].classList.add('name--error');
  } else {
    nameInputBox.classList.remove('form--fail');
    nameInputBox.classList.add('form--success');
    nameInputBox.childNodes[1].classList.remove('name--error');
  }
});

emailInputBox.addEventListener('click', () => {
  emailInputBox.childNodes[1].childNodes[0].classList.add('form_head--success');
  if(emailRegex.test(email.value)) {
    emailInputBox.classList.remove('form--fail');
    emailInputBox.classList.add('form--success');
    emailInputBox.childNodes[1].classList.remove('email--error');
  } else {
    emailInputBox.classList.remove('form--success');
    emailInputBox.classList.add('form--fail');
    emailInputBox.childNodes[1].classList.add('email--error');
  }
});

messageInputBox.addEventListener('click', () => {
  messageInputBox.childNodes[1].childNodes[0].classList.add('form_head--success');
  if(message.value == "") {
    messageInputBox.classList.remove('form--success');
    messageInputBox.classList.add('form--fail');
    messageInputBox.childNodes[1].classList.add('message--error');    
  } else {
    messageInputBox.classList.remove('form--fail');
    messageInputBox.classList.add('form--success');
    messageInputBox.childNodes[1].classList.remove('message--error');
  }
});

 
// interval not working properly;
// document
// .querySelectorAll('.contact_form')
// .forEach( (element) => {
//   element.addEventListener('mouseleave', () => {
//     setInterval( () => {element.classList.remove('form--active')}, 2000);
//     clearInterval();
//   });
// });

document
  .querySelectorAll('.contact_form')
  .forEach( (element) => {
    element.addEventListener('mouseleave', () => {
      element.classList.remove('form--success');
      element.classList.remove('form--fail');
      element.childNodes[1].childNodes[0].classList.remove('form_head--success');
    });
  });

document.querySelector('.submit_button').addEventListener('click', () => {
  alert(`Due to the unfinished of reCAPTCHA system, you couldn't send me a message, sorry!`);
})