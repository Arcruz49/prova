document.getElementById('square').addEventListener('mouseenter', function() {
    this.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`; 
});

function randomNumber(){
    return Math.floor(Math.random() * 256)
}

const squares = document.getElementsByClassName('square');

for (let i = 0; i < squares.length; i++) {
    let width = 50;
    let height = 50;

    squares[i].addEventListener('mouseenter', function() {
        let maxWidth = 400;
        let maxHeight = 400;

        let interval = setInterval(function() {
            width += 5;
            height += 5;
            
            squares[i].style.width = width + 'px';
            squares[i].style.height = height + 'px';
            
            if (width >= maxWidth || height >= maxHeight) {
                clearInterval(interval); 
            }
        }, 30); 
    });

    squares[i].addEventListener('mouseleave', function() {
        let interval = setInterval(function() {
            width -= 5;
            height -= 5;
            
            squares[i].style.width = width + 'px';
            squares[i].style.height = height + 'px';
            
            if (width <= 50 || height <= 50) {
                clearInterval(interval); 
            }
        }, 30); 
    });
}



var buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseenter', function() {
        var space = document.getElementById('space');
        
        var spaceRect = space.getBoundingClientRect();
        var spaceLeft = spaceRect.left;
        var spaceTop = spaceRect.top;
        
        var spaceWidth = space.offsetWidth;
        var spaceHeight = space.offsetHeight;
        
        var randomLeft = Math.floor(Math.random() * (spaceWidth - this.offsetWidth));
        var randomTop =  Math.floor(Math.random() * (spaceHeight - this.offsetHeight));
        
        var adjustedLeft = randomLeft + spaceLeft;
        var adjustedTop = randomTop + spaceTop;
        
        this.style.position = 'absolute';
        this.style.left = adjustedLeft + 'px';
        this.style.top = adjustedTop + 'px';
    });
}


function mudaTexto(textArea) {
    debugger
    let text = textArea.value;
    var titulo = document.getElementById('tituloDinamico');
    if(text == "") titulo.innerHTML = '<h3 id="tituloDinamico">Digite no textarea</h3>'
    else titulo.innerHTML = '<h3 id="tituloDinamico">'+ text +'</h3>';
}
