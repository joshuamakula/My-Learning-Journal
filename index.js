const viewMore = document.getElementById('view-more')

if(viewMore){
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
}

const headerHtml = document.getElementById('header')

headerHtml.innerHTML += `
    <div class="container my-header">
        <img src="./images/logo.png" alt="My learning journal" class="logo" />
        <ul class="my-list">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about.html">about me</a></li>
        </ul>
    </div>
`