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