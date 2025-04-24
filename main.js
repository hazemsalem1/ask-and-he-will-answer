// browser questions

let h1 = document.getElementById('thequestion')
let parent = document.getElementById('questions')
let answer = document.getElementById('answer')
let ok = document.getElementById('ok')


// your questions


let theanswer = document.getElementById('theanswer')
let answers = document.getElementById('answers')
let thequestions = document.getElementById('thequestions')
let okk = document.getElementById('okk')

// the information

let information = document.getElementById('information')

let place = document.getElementById('place')
let grade = document.getElementById('grade')
let name = document.getElementById('name')
let age = document.getElementById('age')

// the code
let con = confirm('if you want to stop click on the text')


let array = [
    'what is your name?',
    'how old are you?',
    'where are you live?',
    'what grade are you in?'
]
let obj = {
    'name':undefined,
    'age':undefined,
    'place':undefined,
    'grade':undefined
}

onload = () => {
    h1.innerHTML = array[0]
    answer.focus()
}

answer.onkeyup = () => {
    if (answer.value != ''){
        ok.classList.remove('hide')
    }
    else{
        ok.classList.add('hide')
    }
}

ok.onclick = () => {
    if (h1.innerHTML == array[0]){
        obj.name = answer.value
        ok.classList.add('hide')
        setTimeout(() => {
            h1.innerHTML = array[1]
            answer.value = ''
            console.log(obj.name)
        }, 1.1000);
    }
    ok.onclick = () => {
        if(h1.innerHTML == array[1]){
            obj.age = answer.value
            ok.classList.add('hide')
            setTimeout(() => {
                h1.innerHTML = array[2]
                answer.value = ''
                console.log(obj.age)
            }, 1.1000);
        }
         ok.onclick = () => {
         if(h1.innerHTML == array[2]){
             obj.place = answer.value
             ok.classList.add('hide')
             setTimeout(() => {
                 h1.innerHTML = array[3]
                 answer.value = ''
                 console.log(obj.place)
             },1.1000)
         }
         ok.onclick = () => {
            if(h1.innerHTML == array[3]){
                obj.grade = answer.value
                ok.classList.add('hide')
                setTimeout(() => {
                    parent.classList.add('hide')
                    answers.classList.remove('hide')
                    information.classList.remove('hide')
                    thequestions.focus()
                },1.1000)
            }
            
        }
     }
 
    }
}


thequestions.onkeyup = () => {
    if (thequestions.value != ''){
        okk.classList.remove('hide')
    }
    else
    {
        okk.classList.add('hide')

    }
}
name.onclick = () => {
    thequestions.value = name.innerHTML
    okk.classList.remove('hide')

}

age.onclick = () => {
    thequestions.value = age.innerHTML
    okk.classList.remove('hide')

}

place.onclick = () => {
    thequestions.value = place.innerHTML
    okk.classList.remove('hide')

}

grade.onclick = () => {
    thequestions.value = grade.innerHTML
    okk.classList.remove('hide')

}
document.addEventListener('keyup',(e) => {
    switch(e.key){
        case 'Enter':
            okk.click()
            ok.click()
    }
})
function letter(e){
    
}


okk.onclick = () => {
    if (thequestions.value == 'my name'){
        theanswer.innerHTML = obj.name
        thequestions.value = ''
        let speak = new SpeechSynthesisUtterance(theanswer.innerHTML)
        speak.lang = 'en'
        speak.rate = 1.5
        speak.pitch = 2
        speechSynthesis.speak(speak)
        okk.classList.add('hide')

    }
    if (thequestions.value == 'my age'){
        theanswer.innerHTML = obj.age
        thequestions.value = ''

        let speak = new SpeechSynthesisUtterance(theanswer.innerHTML)
        speak.lang = 'en'
        speak.rate = 1.5
        speak.pitch = 2
        speechSynthesis.speak(speak)
        okk.classList.add('hide')

    }
    if (thequestions.value == 'my place'){
        theanswer.innerHTML = obj.place
        thequestions.value = ''

        let speak = new SpeechSynthesisUtterance(theanswer.innerHTML)
        speak.lang = 'en'
        speak.rate = 1.5
        speak.pitch = 2
        speechSynthesis.speak(speak)
        okk.classList.add('hide')

    }
    if (thequestions.value == 'my grade'){
        theanswer.innerHTML = obj.grade
        thequestions.value = ''

        let speak = new SpeechSynthesisUtterance(theanswer.innerHTML)
        speak.lang = 'en'
        speak.rate = 1.5
        speak.pitch = 2
        speechSynthesis.speak(speak)   
        okk.classList.add('hide')

    }
}
theanswer.onclick = () => {
        let con = confirm('do you want to stop and close the window')
        if(con === true){
            location.reload()
            window.close()

        }
        else{
        }
    }
        h1.onclick = () => {
            let con = confirm('do you want to stop and close the window')
            if(con === true){
                location.reload()
                window.close()
    
            }
            else{

            }
        }
        
        