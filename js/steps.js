// platform - go to step 2 
const connectBtn = document.getElementById('connect-btn');
const bottomSection = document.getElementById('bottom')
const userNameInput = document.getElementById('username')
const userNameError = document.getElementById('username-error')
const step1 = document.getElementById('step1')
const step2 = document.getElementById('step2')
const step3 = document.getElementById('step3')
const processingTexts = document.querySelectorAll('.process-text')


goToStep2 = () => {
    if(userNameInput.value == "") {
        userNameError.classList.add('show')
    } else {
        step1.classList.remove('show')
        step2.classList.add('show')
        userNameError.classList.remove('show')
        bottomSection.classList.remove('step1')
        bottomSection.classList.add('step2')
        processing()
    }
}

connectBtn.addEventListener('click', goToStep2);




// Step 2 procesing 
processing = () => {
    let i = 0
    let interval = 1000;
    iterate = () => {
        interval =  Math.floor(Math.random() * (2000 - 500 + 1)) + 500;
        if(i >= 9) {
            clearInterval(iterateInterval)
            setTimeout(goToStep3, 5000);
        } else {
            processingTexts[i].classList.remove('hide')
            i++
        }
    }

    let iterateInterval = setInterval(() => {
        setTimeout(iterate,interval) 
    }, 1000);
}

goToStep3 = () => {
    step2.classList.remove('show')
    step3.classList.add('show')
    bottomSection.classList.remove('step2')
    bottomSection.classList.add('step3')
}

