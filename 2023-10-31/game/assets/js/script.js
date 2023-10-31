const game = document.getElementById('game');
const hero = document.createElement('div');
const villain = document.createElement('div');

hero.style.width = '50px';
hero.style.height = '100px';
hero.style.background = 'yellow';
hero.style.position = 'absolute';
hero.style.bottom = 0;
hero.style.left = '200px';
game.appendChild(hero);

villain.style.width = '50px';
villain.style.height = '50px';
villain.style.background = 'red';
villain.style.position = 'absolute';
villain.style.bottom = 0;
villain.style.right = '-50px';
game.appendChild(villain);

let jump = false;
let ground = 0;
let up = true;
let timer = 0;

const gameInterval = setInterval(() => {
    const pos = game.style.backgroundPositionX.replace('px', '');
    game.style.backgroundPositionX = (pos - 10) + 'px';
    
    if(jump) {
        if(ground < 200 && up)
            ground += 25;

        if(ground === 200)
            up = false;

        if(ground > 0 && !up)
            ground -= 25;  

        if(ground === 0) {
            jump = false;
            up = true;
        }
    }

    hero.style.bottom = ground + 'px';

    if(timer > 2000) {
        const villainPos = villain.style.right.replace('px', '');
        villain.style.right = +villainPos + 5 + 'px';
       
        if(villainPos > game.offsetWidth + villain.offsetWidth) {
            //Blogiečio pašalinimas
            villain.remove();
        }
        console.log(villain.offsetTop, hero.offsetTop + hero.offsetHeight);
        // if(hero.offsetTop + hero.offsetHeight <= villain.offsetTop)
        //     clearInterval(gameInterval);

        if(
            hero.offsetTop + hero.offsetHeight <= villain.offsetTop &&
            villain.offsetLeft <= hero.offsetLeft + hero.offsetWidth) 
        {
            clearInterval(gameInterval);
        }
    }
    
    timer += 20;
}, 20);

window.addEventListener('keyup', e => {
    e.preventDefault();
    
    if(e.code !== 'Space') 
        return;
    
    // hero.style.bottom = '200px';
    jump = true;
});