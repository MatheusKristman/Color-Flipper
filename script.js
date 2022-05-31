const btn = document.querySelector('#clickMe');
const colors = ['aqua', 'bisque', 'brown', 'crimson', 'darkorange', '#B22222', '#1E90FF', '#FFD700', '#ADFF2F', '#F0E68C', 'rgb(144, 238, 144)', 'rgb(255, 160, 122)',
                'rgb(173, 216, 230)', 'rgb(255, 228, 181)', 'rgb(240, 128, 128)'];

let prev = 0;


btn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * colors.length);    
    while(random === prev){
        random = Math.floor(Math.random() * colors.length);
    }
    prev = random;
    document.body.style.backgroundColor = colors[random];
    document.querySelector('.box-title h1 span').textContent = colors[random];
})