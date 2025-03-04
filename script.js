let frnd = document.querySelector('h3');
let btn = document.querySelector('button');
check = 0;
btn.addEventListener('click',function(){
    if(check == 0){
    frnd.textContent = 'Friend';
    frnd.style.color = 'green';
    check = 1;
    btn.innerHTML = 'Remove Friend'
    }
    else{
        frnd.textContent = 'Stranger';
        frnd.style.color = 'red';
        check = 0;
        btn.innerHTML = 'Add Friend'
    }
})