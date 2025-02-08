
// Get values

var btnStartQuiz = document.getElementById('btnStartQuiz')

btnStartQuiz.addEventListener('click', (event) => {

    event.preventDefault(); // Prevent form submission

    var nameRegex = /^[a-zA-Z]+$/
    var emailRegex = /^[a-zA-Z0-9]+@gmail\.com/

    var sname = document.getElementById('sname').value.trim();
    var mail = document.getElementById('mail').value.trim();

    var validate = true

    if (nameRegex.test(sname) == false) {
        alert('Name must contain only alphabets.')
        var validate = false
    }

    if (nameRegex.test(sname) == true && emailRegex.test(mail) == false) {
        alert('Email must be the correct format')
        var validate = false
    }

    if (validate == true) {
        sessionStorage.setItem("sname", sname);
        sessionStorage.setItem("mail", mail);

        window.location.href = "instructions.html";
    }

})





