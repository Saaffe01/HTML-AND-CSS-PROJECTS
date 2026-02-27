// Recipe POP-up Modal Section
// Sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal.button");

// defines all modals for each recipe
var modal = document.querySelectorAll(".recipe-modal");

// Get the span element that closes the modal 
var closeBtn = document.getElementsByClassName("close-btn");

// When the user clicks the recipe button, open the modal

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function() {
        for (let index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

// email validation

document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        event.preventDefault();


        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = docuemt.getElementById('message').value;

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        const valMsg = document.getElementById('validateMsg');

        if(!firstName || !lastName || !email || !phone || !message) {
            valMsg.innerHTML = '<p style="color: red">Please fill out all empty fields</p>';
        } else if (!emailPattern.test(email)) {
            valMsg.innerHTML = `<p style='color: red;'>Please enter a valid email<p>`;
        } else {
            valMsg.innerHTML = '<p stylw="color: red;">Thank you for submitting!</p>';
        }


        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };

        // displays the form data in the console for testing purposes
        console.log(JSON.stringify(formData))


    });


