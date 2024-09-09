// document.getElementById("button").mouseover = func
const button = document.getElementById('button');
button.addEventListener('mouseover', func) 
function func(){
    const button = document.getElementById('button');
  
            // Gera posições aleatórias dentro da janela
            const randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
            const randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
            // Aplica as novas posições ao botão
            button.style.left = randomX + 'px';
            button.style.top = randomY + 'px';
}
document.getElementById("ru").onclick = aaaaa
function aaaaa(){
    alert ("gay")
}