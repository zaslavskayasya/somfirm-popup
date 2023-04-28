

console.log('test');


localStorage.setItem('test', 1);


let chooseBtn = document.querySelectorAll('.choose');
let popup = document.querySelector('.popup-wrap');


chooseBtn.forEach(function(elem){
    elem.addEventListener('click', function(e){
        if(e.target.classList.contains('yes')){
            localStorage.setItem('has18', true);
        } else{
            localStorage.setItem('has18', false);
        };

        popup.classList.add('hide');

        
    })
})