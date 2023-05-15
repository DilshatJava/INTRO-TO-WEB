function toSave() {
    let m = JSON.parse(localStorage.getItem('data')) || [];

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let fullName = document.getElementById('fullName').value
    let country = document.getElementById('country').value
    let birthday = document.getElementById('birthday').value

    let newUser = { e: email, p: password, f: fullName, c: country, b: birthday };

    m.push(newUser);

    localStorage.setItem('data', JSON.stringify(m))

    alert("SUCCESS")
}

let tweets = 0;

function toTweets() {
    let email = document.getElementById('em').value
    let password = document.getElementById('pas').value

    let data = JSON.parse(localStorage.getItem('data')) || [];

    for (let i = 0; i < data.length; i++) {
        let user = data[i];

        if (password === user.p && email === user.e) {
            localStorage.setItem('n', i)
            alert("Success")
            window.location.href = "Tweets.html";
            break
        }
    }
}



function toLoad() {
    let data = JSON.parse(localStorage.getItem('data'));
    let i = parseInt(localStorage.getItem('n'))
    console.log(i);
    ema.innerHTML = data[i].e;
    fuNa.innerHTML = "Welcome " + data[i].f;
    fuNam.innerHTML = data[i].f;
    coun.innerHTML = data[i].c;
    birth.innerHTML = data[i].b;

}
