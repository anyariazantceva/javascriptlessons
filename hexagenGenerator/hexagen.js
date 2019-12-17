window.addEventListener('load', () => {
    const randomHexaNumberGenerator = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for(let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const btnCreate = document.querySelector('.btn-create');

    const btnGen = document.querySelector('.btn-gen');
    const pageBlocks = document.querySelectorAll('.page__block-item');

    btnGen.addEventListener('click', () => {
            let colorBlock = randomHexaNumberGenerator();
            pageBlocks.forEach((block) => {
                block.style.background = colorBlock;
            });
        });

});
