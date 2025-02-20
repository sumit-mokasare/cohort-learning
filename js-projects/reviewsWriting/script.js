const fullName = document.getElementById('fullName')
const profile = document.getElementById('profile')
const message = document.getElementById('message')
const submitReview = document.getElementById('submitReview')
const stars = document.querySelectorAll('.fa-star')

let reviewArray = []
let profileImageURL = '';
let selectedRating = 0;
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
        dates: timeDate(),
        rating: selectedRating
    }
    if (!reviewObject.name) {
        alert('name is empty')
        return
    }   
    if (!reviewObject.review) {
        alert('write your review')
        return
    }
    if (reviewObject.rating === 0) {
        alert('Please select a star rating');
        return;
    }
    reviewArray.unshift(reviewObject)
    displeReviews();
}

function calculateOverallRating() {
    if (reviewArray.length === 0) {
        return { average: 0, stars: '⭐⭐⭐⭐⭐ (0)' };
    }
    const totalStars = reviewArray.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = (totalStars / reviewArray.length).toFixed(1);
    const roundedStars = '⭐'.repeat(Math.round(averageRating));

    return { average: averageRating, stars: `${roundedStars} (${reviewArray.length})` };
}

// star printing code 

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        selectedRating = index + 1;
        highlightStars(index);
    });
});

// Function to highlight stars 
function highlightStars(index) {
    stars.forEach((star, i) => {
        star.classList.toggle('active', i <= index);
    });
}

// function to timedate 

function timeDate() {
    const dates = new Date()
    return dates.toLocaleString().toString().padStart(2, '0')
}

// function to display add card review 

function displeReviews() {
    data = ''
    for (let i = 0; i < reviewArray.length; i++) {
        const starsHtml = '⭐'.repeat(reviewArray[i].rating);
        data += `
    <div class="card">
            <div class="user-info">
                <img src="${reviewArray[i].profile === '' ? 'https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg' : reviewArray[i].profile}"
                            alt="User">
                <strong>${reviewArray[i].name}<span> ✔ </span></strong>
                <p class='date'>${reviewArray[i].dates}</p>
            </div>
            <p class="stars">${starsHtml}</p>
                <p class="contant">${reviewArray[i].review}</p>
                <button class="delete-btn fa fa-trash-o" data-index="${i}"></button>
                </div>
    `
    }
    document.getElementById('reviewCards').innerHTML = data;
    const { average, stars } = calculateOverallRating();
    document.getElementById('rating-overall').innerHTML = `Overall Rating: ${average} ${stars}`;

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
    selectedRating = 0;
    highlightStars(-1);
}

submitReview.addEventListener('click', (e) => {
    getvalue()
})

