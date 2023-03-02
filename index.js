const viewMore = document.getElementById('view-more')

viewMore.addEventListener('click', function(){
    const view = document.getElementsByClassName('view')
    
    for( let show of view){
        if(show.style.display === 'none'){
            show.style.display = 'block'
            viewMore.textContent = 'View Less'
        } else {
            show.style.display = 'none'
            viewMore.textContent = 'View More'
        }
    }
})