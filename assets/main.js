let submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', function (e) {
    let age = document.getElementById('age').value;
    let place = document.getElementById('place-dropd').value;
    let day = document.getElementById('day-dropd').value;
    let time = document.getElementById('time').value;
    if (place === 'avm' || place === 'cafe-get') {
        if (age >= 21 && age <= 64) {
            if (day === 'week') {
                if (time <= 10 || time >= 20) {
                    console.log('You cant go out');
                    negMessage();
                } else {
                    posMessage();
                }
            } else if (day === 'week-end') {
                negMessage();
            }
            if ((age >= 21 && age <= 64) && day === 'week-end') {
                if (time >= 10 || time <= 20) {
                    console.log('You cant go out');
                    negMessage();
                }
            }
        }
        if (age <= 20) {
            if (time >= 13 && time <= 16) {
                posMessage();
            } else {
                negMessage();
            }
        }
        if (age >= 65) {
            if (time >= 10 && time <= 13) {
                posMessage();
            } else {
                negMessage();
            }
        }
    } else if (place === 'cafe-sit' || place === 'forbidden') {
        negMessage();
    }
});


function negMessage() {
    let errorMessage = document.querySelector('.negative');
    let approveMessage = document.querySelector('.positive');
    approveMessage.classList.remove('active');
    approveMessage.classList.add('inactive');
    errorMessage.classList.remove('inactive');
    errorMessage.classList.add('active');
}

function posMessage() {
    let errorMessage = document.querySelector('.negative');
    let approveMessage = document.querySelector('.positive');
    approveMessage.classList.remove('inactive');
    approveMessage.classList.add('active');
    errorMessage.classList.remove('active');
    errorMessage.classList.add('inactive');
}