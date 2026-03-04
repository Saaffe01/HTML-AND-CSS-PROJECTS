// initialize popover component
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    let imgSrc = element.getAttribute('data-bs-img');
    let content = "<img class='star-rating' src=' " + imgSrc +"' >";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hoever'
    });
});


// initial toast 
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))

// function to display toast with selected options 
function displaySelectedMovieOptions() {
    let movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    let time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    let quantity = document.getElementById('quantity').value;

    let meessage = "Purchase confirmed for: " + movie + " \nTime: " + time + " \nTickets: " + quantity;

    // display toast 
    let toastBody = document.getElementById('toastBody');
    toastBody.textContent = meessage;
    let toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show();
}

function buyTickets() {
    displaySelectedMovieOptions();
}

const toastTrigger = document.getElementById('buyTicketsBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

// JQUERY 

// Shrinks header size when the document is scrolleed down by 80 pixels 
$(document).on("scroll", function () {
    if ($(document).srollTop() > 50) {
        $("nav").addClass("nav-shrink");

        $("div.navbar-collapse").css("margin-top", "-6px");
    }
    else {
        ("nav").removeClass("nav-shrink");
        $("div.navbar-collapse").css("margin-top", "14px");
    }
})

// close mobile menu when a navigation link is clicked
$(document).ready(function () {
    $(".navbar-nav").onclick('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function () { 
        $(".navbar-collapse").collapse('hide');
    });
})