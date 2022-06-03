
    

        var P = 0;
        const mario = document.querySelector('.mario');
        const Tubo = document.querySelector('.Tubo');
        const nuvem = document.querySelector('.nuvem');

        const jump = () => {
        P ++;
        r.innerHTML = 'Pontuação: ' + P;  
        mario.classList.add('jump');

        setTimeout( () => {
            mario.classList.remove('jump');

        },500)
    }

    const loop = setInterval(() => {
        const PT = Tubo.offsetLeft;
        const PN = nuvem.offsetLeft;
        const PM = +window.getComputedStyle(mario).bottom.replace('px','');

        if (PT <=120 && PT > 0 && PM < 80) {

            nuvem.style.animation = 'none';
            nuvem.style.left = `${PN}px`;

            Tubo.style.animation = 'none';
            Tubo.style.left = `${PT}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${PM}px`;

            mario.src = 'mario-jump-images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginleft = '50px';

            clearInterval(loop);
        }

    },10)

    document.addEventListener('keydown', jump);

    
