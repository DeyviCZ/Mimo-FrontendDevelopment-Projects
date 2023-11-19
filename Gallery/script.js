const zoom = document.querySelectorAll('#img');
const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modal-img');
const close = document.querySelector('#close-btn');

zoom.forEach(function(image){
    image.addEventListener('mouseover',function(){
        // image.style.width = '200px';
        // image.style.height = '200px';
        image.style.transform = 'scale(1.2)';
    });
    image.addEventListener('mouseout',function(){
        image.style.transform = 'scale(1)';
    });

    image.addEventListener('click',function(){
        modal.style.display = 'block';
        modalImg.src = image.src;
        modalImg.style.width = '300px';
        modalImg.style.height = '300px';
    });
});

close.addEventListener('click', function(){
    modal.style.display = 'none';
})

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#modal').style.display = 'none';
});