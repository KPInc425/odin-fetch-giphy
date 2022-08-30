import './style.css';

const img = document.querySelector('img');
const btnRandomImg = document.querySelector('#btnRandomImg');
const inputSearchText = document.querySelector('.inputSearch');
const btnSearch = document.querySelector('#btnSearch');


fetch('https://api.giphy.com/v1/gifs/random?api_key=0JvtDfunbRZAukBB5R94oBnUtDprGS0i', {mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response.data.images.original.url);
    img.src = response.data.images.original.url;
})
.catch(function(error) {
    console.log(error);
    img.src = 'https://media4.giphy.com/media/l0HUjDphISoMMCMPm/giphy.gif?cid=bbfc1e498djkmm9q38jdt5tdzvq5a41cf28x7z2cfyw4m6q7&rid=giphy.gif&ct=g';
});


btnRandomImg.addEventListener('click', () => {
    console.log('click');
    fetch('https://api.giphy.com/v1/gifs/random?api_key=0JvtDfunbRZAukBB5R94oBnUtDprGS0i', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response.data.images.original.url);
        img.src = response.data.images.original.url;
    })
    .catch(function(error) {
        console.log(error);
        img.src = 'https://media4.giphy.com/media/l0HUjDphISoMMCMPm/giphy.gif?cid=bbfc1e498djkmm9q38jdt5tdzvq5a41cf28x7z2cfyw4m6q7&rid=giphy.gif&ct=g';
    });
})

btnSearch.addEventListener('click', () => {
    console.log(inputSearchText.value);
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=0JvtDfunbRZAukBB5R94oBnUtDprGS0i&s=' + inputSearchText.value, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response.data.images.original.url);
            img.src = response.data.images.original.url;
        })
        .catch(function(error) {
            console.log(error);
            img.src = 'https://media4.giphy.com/media/l0HUjDphISoMMCMPm/giphy.gif?cid=bbfc1e498djkmm9q38jdt5tdzvq5a41cf28x7z2cfyw4m6q7&rid=giphy.gif&ct=g';
        });
})

