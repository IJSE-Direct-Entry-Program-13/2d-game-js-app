import $ from 'jquery';

const character = $("<div></div>");
character.addClass('character');

$("body").append(character);

let dy = 0;
let dx = 0;
let g = 4 ;

setInterval(() => {
    character.css('left', `${character.position().left + dx}px`);
    if ((character.position().top + character.outerHeight()) < innerHeight) {
        dy += g;
        character.css('top', `${character.position().top + dy}px`);
    } else {
        dy = 0;
        character.css('top', `${innerHeight - character.outerHeight()}px`)
    }
}, 50);

$(window).on('keydown', (e)=>{
    switch (e.code){
        case "ArrowRight":
            dx = 10;
            break;
        case "ArrowLeft":
            dx = -10;
            break;
        case "Space":
            if (dy === 0){
                // dy = 20;
                character.css('top', `${innerHeight - 350 }px`);
            }
    }
});

$(window).on('keyup', (e)=>{
    switch (e.code){
        case "ArrowRight": case "ArrowLeft":
            dx = 0;
            break;
        case "Space":
            if (dy === 0){
                character.css('top', `${innerHeight - 350 }px`);
            }
    }
});
