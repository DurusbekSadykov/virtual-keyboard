
const body = document.querySelector('body');



body.innerHTML = `
<div class="container">
<h3>Изменение языка: Alt+Shift</h3>
</div>
`;




const container = document.querySelector('.container');

container.innerHTML += `
<div class="screen" id="screen"><h3 id='str'></h3></div>
<div class="keyboard" id="keyboard"></div>
`;


const keyboard = document.querySelector('#keyboard');
let screen = document.querySelector('#str');
const p = document.createElement('p');

for (let i = 0; i < firstLine.length; i++) {
    if (firstLine[i].code == "Backspace") {
        keyboard.innerHTML += `
        <div class="keys backspace" id="${firstLine[i].code}">
            ${firstLine[i].code}
        </div>
        `
    } else {
        keyboard.innerHTML += `
        <div class="keys keysFirstLine" id="${firstLine[i].code}">
            <div class="keys2">${firstLine[i].key1}</div>
            <div class="keys1">${firstLine[i].key}</div>
        </div>
        `
    }

}

for (let i = 0; i < engKeys.length; i++) {
    if (engKeys[i].code == 'Backspace') {
        keyboard.innerHTML += `
        <div class="keys backspace" id="${engKeys[i].code}">${engKeys[i].code}</div>
        `
    } else if (engKeys[i].code == 'CapsLock') {
        keyboard.innerHTML += `
        <div class="keys capsLock" id="${engKeys[i].code}">${engKeys[i].code}</div>
        `
    } else if (engKeys[i].code == 'Tab') {
        keyboard.innerHTML += `
        <div class="keys tab" id="${engKeys[i].code}">${engKeys[i].code}</div>
        `
    } else if (engKeys[i].code == 'Delete') {
        keyboard.innerHTML += `
        <div class="keys delete" id="${engKeys[i].code}">${engKeys[i].code}</div>
        `
    }


    else if (engKeys[i].code == 'Enter') {
        keyboard.innerHTML += `
        <div class="keys enter" id="${engKeys[i].code}">${engKeys[i].code}</div>
        `
    } else if (engKeys[i].code == 'ShiftLeft') {
        keyboard.innerHTML += `
        <div class="keys shiftLeft" id="${engKeys[i].code}">${engKeys[i].key}</div>
        `
    } else if (engKeys[i].code == 'ShiftRight') {
        keyboard.innerHTML += `
        <div class="keys shiftRight" id="${engKeys[i].code}">${engKeys[i].key}</div>
        `
    } else if (engKeys[i].key == 'Control') {
        keyboard.innerHTML += `
        <div class="keys control" id="${engKeys[i].code}">${engKeys[i].key}</div>
        `
    } else if (engKeys[i].key == 'Alt') {
        keyboard.innerHTML += `
        <div class="keys alt" id="${engKeys[i].code}">${engKeys[i].key}</div>
        `
    } else if (engKeys[i].key == 'Meta') {
        keyboard.innerHTML += `
        <div class="keys meta" id="${engKeys[i].code}">Win</div>
        `
    } else if (engKeys[i].code == 'ArrowUp') {
        keyboard.innerHTML += `
        <div class="keys arrow" id="${engKeys[i].code}">↑</div>
        `
    } else if (engKeys[i].code == 'ArrowDown') {
        keyboard.innerHTML += `
        <div class="keys arrow" id="${engKeys[i].code}">↓</div>
        `
    } else if (engKeys[i].code == 'ArrowLeft') {
        keyboard.innerHTML += `
        <div class="keys arrow" id="${engKeys[i].code}">←</div>
        `
    } else if (engKeys[i].code == 'ArrowRight') {
        keyboard.innerHTML += `
        <div class="keys arrow" id="${engKeys[i].code}">→</div>
        `
    }

    else if (engKeys[i].key == ' ') {
        keyboard.innerHTML += `
        <div class="keys space" id="${engKeys[i].code}">${engKeys[i].key}</div>
        `
    } else {
        keyboard.innerHTML += `
        <div class="keys" id="${engKeys[i].code}">${engKeys[i].key}</div>
        `
    }
}

document.addEventListener('keydown', function (e) {

    document.getElementById(`${e.code}`).classList.add('active')
})

document.addEventListener('keyup', function (e) {
    document.querySelectorAll('.keys').forEach(function (element) {
        element.classList.remove('active')

    })

    if (screen.innerHTML.length % 120 == 0) {
        screen.innerHTML += `\r`
    }
    if (e.key == 'Backspace') {
        screen.innerText = `${screen.innerText.slice(0, screen.innerText.length - 1)}`

    } else if (e.key == 'ArrowUp') {
        screen.innerText += `↑`
    } else if (e.key == 'ArrowDown') {
        screen.innerText += `↓`
    } else if (e.key == 'ArrowRight') {
        screeninnerTextt += `→`
    } else if (e.key == 'ArrowLeft') {
        screen.innerText += `←`
    } else if (e.key == 'Space') {
        screen.innerText += ` `
    } else if (e.key == 'Enter') {
        screen.innerHTML += `<p id='str'><p>`
        let a = document.querySelectorAll('#str');
        screen = a[a.length - 1]
    }
    else if (e.key == 'Control' || e.key == 'Alt' || e.key == 'Shift' || e.key == 'Meta' || e.key == 'CapsLock') {
        screen.textContent += ``
    }
    else {
        screen.textContent += `${e.key}`
    }

})

document.querySelectorAll('.keys').forEach(function (element) {
    element.onmousedown = function (event) {
        let code = this.getAttribute('id');
        this.classList.add('active')

    }
})
document.querySelectorAll('.keys').forEach(function (element) {
    element.onmouseup = function (e) {
        let code = this.getAttribute('id');
        this.classList.remove('active');
        let p = element.innerText;
        if (screen.innerHTML.length % 100 == 0) {
            screen.innerHTML += `\r`
        } else if (p == 'Backspace') {
            screen.innerText = `${screen.innerText.slice(0, screen.innerText.length - 1)}`
        } else if (p == 'Enter') {
            screen.innerHTML += `<p id='str'><p>`
            let a = document.querySelectorAll('#str');
            screen = a[a.length - 1]
        } else if (p == 'Control' || p == 'Alt' || p == 'Shift' || p == 'Meta' || p == 'CapsLock') {
            screen.textContent += ``
        } else {
            screen.innerHTML += p
        }
    }

})












