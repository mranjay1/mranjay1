let popped = 0;
const sound = document.querySelector('#sound')
document.addEventListener('click', function(e){
    
    if (e.target.className === "balloon"){

                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "DUAR";
                sound.play();

                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('click', function(){
        sound.play()
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
