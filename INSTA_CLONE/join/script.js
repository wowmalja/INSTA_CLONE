let joinBtn = document.getElementById('join-btn');
let animateInput = document.querySelectorAll('.animate-input');

let emailAct = nameAct = idAct = pwAct = false;

let userEmail = document.getElementById('user-email');
let userName = document.getElementById('user-name');
let userId = document.getElementById('user-id');
let userPw = document.getElementById('user-pw');

let pwBtn = document.getElementById('pw-btn');

function updateInputState(val, activeVar){
  if(val.value.trim().length > 0) {
    val.parentElement.classList.add('active');
    activeVar = true;    
  } else {
    val.parentElement.classList.remove('active');
    activeVar = false;
  }

  return activeVar;
}

animateInput.forEach((item) => {
  let input = item.querySelector('input');
  
  input.addEventListener('keyup', () => {
    if(input == userEmail) {
      emailAct = updateInputState(input, emailAct);
    } else if(input == userName) {
      nameAct = updateInputState(input, nameAct);
    } else if(input == userId){
      idAct = updateInputState(input, idAct);
    } else if (input == userPw) {
      pwAct = updateInputState(input, pwAct);      
    }      


    let allTrue = emailAct && nameAct && idAct && pwAct;
    if(allTrue) {
      joinBtn.removeAttribute('disabled');
    
    } else {
      joinBtn.setAttribute('disabled', true);
    }
  })
})

function modeToggle(){

  let pwType = userPw.getAttribute('type') == 'password';
  userPw.setAttribute('type', pwType ? 'text' : 'password');
  pwBtn.innerHTML = pwType ? '숨기기' : '비밀번호 표시';

}
pwBtn.addEventListener('click', modeToggle);
