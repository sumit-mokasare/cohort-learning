const fullName = document.getElementById('fullName')
const profile = document.getElementById('profile')
const message = document.getElementById('message')
const submitReview = document.getElementById('submitReview')
const stars = document.querySelectorAll('.fa-star')

let reviewArray = []

let profileImageURL = ''
profile.addEventListener("change", function (event) {
    const file = event.target.files[0]; // Get the selected file  
    if (file) {
        profileImageURL = URL.createObjectURL(file); // Create a temporary URL
    }
});
function getvalue() {
    const reviewObject = {
        name: fullName.value.trim(),
        review: message.value.trim(),
        profile: profileImageURL,
        dates: timeDate()
    }
    if (!reviewObject.name) {
        alert('name is empty')
        return
    }
    if (!reviewObject.profile) {
        alert('profile is image empty')
        return
    }
    if (!reviewObject.review) {
        alert('write your review')
        return
    }

    reviewArray.unshift(reviewObject)
    displeReviews();
}

stars.forEach((star, index1) => {
    star.addEventListener('click', (e) => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
            if (!star.classList.contains('active')) {
                console.log('acitve');
                
                star.classList.remove('active')
            }
        })
    })
})
function timeDate() {
    const dates = new Date()
    return dates.toLocaleString().toString().padStart(2, '0')
}

submitReview.addEventListener('click', (e) => {
    getvalue()
})

function displeReviews() {
    data = ''
    for (let i = 0; i < reviewArray.length; i++) {
        data += `
    <div class="card">
            <div class="user-info">
                <img src="${reviewArray[i].profile}"
                            alt="User">
                <strong>${reviewArray[i].name}<span>✔</span></strong>
                <p class='date'>${reviewArray[i].dates}</p>
            </div>
            <p class="stars">⭐⭐⭐⭐⭐</p>
                <p class="contant">${reviewArray[i].review}</p>
                <button class="delete-btn fa fa-trash-o" data-index="${i}"></button>
                </div>
    `
    }
    document.getElementById('reviewCards').innerHTML = data;
    document.getElementById('totalReview').innerHTML = `(${reviewArray.length})`;

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            let index = this.getAttribute('data-index')
            console.log(index);
            reviewArray.splice(index, 1)
            displeReviews();
        })
    });
    clearInputs();
}


function clearInputs() {
    fullName.value = ''
    profile.value = ''
    message.value = ''
    profileImageURL = ''
}
