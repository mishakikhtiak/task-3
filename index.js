const main_div = document.createElement('div');
main_div.setAttribute('class', 'cmaindiv');
main_div.setAttribute('id', 'maindiv');

const pass_form = document.createElement('form');
pass_form.setAttribute('class', 'cpassform');
pass_form.setAttribute('id', 'passform');
main_div.appendChild(pass_form);

const pass_input = document.createElement('input');
pass_input.setAttribute('class', 'cpassinput');
pass_input.setAttribute('id', 'passinput');
pass_input.setAttribute('type', 'text');
pass_form.appendChild(pass_input);

const pass_submit = document.createElement('input');
pass_submit.setAttribute('class', 'cpasssubmit');
pass_submit.setAttribute('id', 'passsubmit');
pass_submit.setAttribute('type', 'button');
pass_submit.setAttribute('value', 'click');
pass_submit.setAttribute('onClick', '');
pass_form.appendChild(pass_submit);

const error_label = document.createElement('p');
error_label.setAttribute('id', 'errorlabel');
error_label.setAttribute('class', 'cerrorlabel')
pass_form.appendChild(error_label);

const async_error_label = document.createElement('p');
async_error_label.setAttribute('id', 'asyncerrorlabel');
async_error_label.setAttribute('class', 'cerrorlabel')
pass_form.appendChild(async_error_label);


const ten_pass_button = document.createElement('input');
ten_pass_button.setAttribute('id', 'tenpassbutton');
ten_pass_button.setAttribute('class', 'ctenpassbutton');
ten_pass_button.setAttribute('type', 'button');
ten_pass_button.setAttribute('value', 'Checktenpass (console)');
main_div.appendChild(ten_pass_button);



document.body.appendChild(main_div);



// Асинхронна функція

document.getElementById('passsubmit')
    .addEventListener('click', () => {
        setTimeout(function Checkpass() {
            let password = document.getElementById('passinput').value;
            document.getElementById('errorlabel').innerHTML = " ";
            if (!/[a-zA-Z]/.test(password)) {
                document.getElementById('errorlabel').innerHTML = "Pass must contain letters."
            };
            if (!/[0-9]/.test(password)) {
                document.getElementById('errorlabel').innerHTML += "\n Pass must contain numbers."
            }
            if (password.length < 6) {
                document.getElementById('errorlabel').innerHTML += "\n Pass must contain 6 or more symbols."
            }
            else if (password.length > 16) {
                document.getElementById('errorlabel').innerHTML += "\n Pass must contain less than 16 symbols."
            }
            else {
                document.getElementById('errorlabel').innerHTML = " ";
            }
            passinput.value = "";
        }, 500);
    });


// async await

document.getElementById('passsubmit')
    .addEventListener('click', async () => {

        let password = document.getElementById('passinput').value;
        let res = " "
        if (!/[a-zA-Z]/.test(password)) {
            res = "Pass must contain letters."
        };
        if (!/[0-9]/.test(password)) {
            res += "\n Pass must contain numbers."
        }
        if (password.length < 6) {
            res += "\n Pass must contain 6 or more symbols."
        }
        else if (password.length > 16) {
            res += "\n Pass must contain less than 16 symbols."
        }
        else {
            res = " ";
        }

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(res), 1000)
        });

        let result = await promise;

        document.getElementById('asyncerrorlabel').innerHTML = result;


    });


debugger;


// Генерація десяти паролів для перевірки

let passarray = [];
let passgensymols = 'qwertyuiopasdfghjklzxcvbnm1234567890'

for (let i = 0; i < 10; i++) {
    let rand = 1 - 0.5 + Math.random() * (20 - 1 + 1);
    passarray[i] = '';
    for (let j = 0; j < rand; j++) {
        passarray[i] += passgensymols.charAt(Math.floor(Math.random() * (passgensymols.length)));
    }
}
console.log(passarray);


function Checkpassword(password) {
    let res = "";
    if (!/[a-zA-Z]/.test(password)) {
        res = "Pass must contain letters."
    };
    if (!/[0-9]/.test(password)) {
        res += "\n Pass must contain numbers."
    }
    if (password.length < 6) {
        res += "\n Pass must contain 6 or more symbols."
    }
    else if (password.length > 16) {
        res += "\n Pass must contain less than 16 symbols."
    }
    else {
        res = " ";
    }
    return res;
}



document.getElementById('tenpassbutton')
    .addEventListener('click', () => {
        console.time('Promise.all');
        let prom1 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[0])));
        });
        let prom2 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[1])));
        });
        let prom3 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[2])));
        });
        let prom4 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[3])));
        });
        let prom5 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[4])));
        });
        let prom6 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[5])));
        });
        let prom7 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[6])));
        });
        let prom8 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[7])));
        });
        let prom9 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[8])));
        });
        let prom10 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[9])));
        });

        Promise.all([prom1, prom2, prom3, prom4, prom5, prom6, prom7, prom8, prom9, prom10]).then(values => {
            console.log(values);
            console.timeEnd('Promise.all');
        });
    });

document.getElementById('tenpassbutton')
    .addEventListener('click', async () => {
        console.time('async/await');
        let prom1 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[0])));
        });
        let prom2 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[1])));
        });
        let prom3 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[2])));
        });
        let prom4 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[3])));
        });
        let prom5 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[4])));
        });
        let prom6 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[5])));
        });
        let prom7 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[6])));
        });
        let prom8 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[7])));
        });
        let prom9 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[8])));
        });
        let prom10 = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, (Checkpassword(password = passarray[9])));
        });

        try {
            const result1 = await prom1;
            const result2 = await prom2;
            const result3 = await prom3;
            const result4 = await prom4;
            const result5 = await prom5;
            const result6 = await prom6;
            const result7 = await prom7;
            const result8 = await prom8;
            const result9 = await prom9;
            const result10 = await prom10;

            let newarr = [result1, result2, result3, result4, result5, result6, result7, result8, result9, result10];
            console.log(newarr);

        } catch (err) {
            console.log(err);
        }
        console.timeEnd('async/await');
    });

// Перевірка активності користувача

function ActivityReg() {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function logout() {
        alert("Are you here?");
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 5000);
    }
}
ActivityReg();
