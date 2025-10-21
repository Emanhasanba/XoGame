let title = document.querySelector('.title');
let turn = 'x';
let squares = [];

function end(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} is the winner`;
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';
    setInterval(function () { title.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 4000);
}

function winner() {
    for (let i = 1; i <= 16; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    // Rows
    for (let i = 1; i <= 16; i += 4) {
        if (
            squares[i] === squares[i + 1] &&
            squares[i + 1] === squares[i + 2] &&
            squares[i + 2] === squares[i + 3] &&
            squares[i] !== ''
        ) {
            end(i, i + 1, i + 2, i + 3);
            return;
        }
    }

    // Columns
    for (let i = 1; i <= 4; i++) {
        if (
            squares[i] === squares[i + 4] &&
            squares[i + 4] === squares[i + 8] &&
            squares[i + 8] === squares[i + 12] &&
            squares[i] !== ''
        ) {
            end(i, i + 4, i + 8, i + 12);
            return;
        }
    }

    // Diagonals
   
    // Diagonals
if (
    (squares[1] === squares[6] &&
        squares[6] === squares[11] &&
        squares[11] === squares[16] &&
        squares[1] !== '')
) {
    document.getElementById('item1').style.background = '#000';
    document.getElementById('item6').style.background = '#000';
    document.getElementById('item11').style.background = '#000';
    document.getElementById('item16').style.background = '#000';

    end(1, 6, 11, 16);
    return;
}
else if(
    (squares[1] === squares[6] &&
        squares[6] === squares[11] &&
        squares[11] === squares[16] &&
        squares[1] !== '') ||
    (squares[4] === squares[7] &&
        squares[7] === squares[10] &&
        squares[10] === squares[13] &&
        squares[4] !== '')
) {
    end(4, 7, 10,13 );
    return;
}

    // else if (
    //     (squares[1] === squares[6] &&
    //         squares[6] === squares[11] &&
    //         squares[11] === squares[16] &&
    //         squares[1] !== '') ||
    //     (squares[4] === squares[7] &&
    //         squares[7] === squares[10] &&
    //         squares[10] === squares[13] &&
    //         squares[4] !== '')
    // ) {
    //     end(1, 6, 11,16 );
    //     return;
    // }

    // Check for tie
    let isTie = true;
    for (let i = 1; i <= 16; i++) {
        if (squares[i] === '') {
            isTie = false;
            break;
        }
    }
    if (isTie) {
        title.innerHTML = 'لايوجد فائز';
        setInterval(function () { title.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML === '') {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    } else if (turn === 'o' && element.innerHTML === '') {
        element.innerHTML = 'O';
        turn = 'e';
        title.innerHTML = 'E';
    } else if (turn === 'e' && element.innerHTML === '') {
        element.innerHTML = 'E';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winner();
}
