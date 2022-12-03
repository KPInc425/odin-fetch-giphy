import './reset.css';
import './style.css';

const img = document.querySelector('img');
const btnRandomImg = document.querySelector('#btnRandomImg');
const inputSearchText = document.querySelector('.inputSearch');
const btnSearch = document.querySelector('#btnSearch');
const btnCopyLink = document.querySelector('#btnCopyLink');



randomFetch();
// random button click fetches random gif
btnRandomImg.addEventListener('click', randomFetch);


// gets value from input for search term in fetch 
btnSearch.addEventListener('click', searchFetch);
inputSearchText.addEventListener('keyup', (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
        searchFetch() 
    }
});
btnCopyLink.addEventListener('click', () => {
    navigator.clipboard.writeText(img.src);
    // console.log("Copied the Link!");
})

async function randomFetch(){
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=0JvtDfunbRZAukBB5R94oBnUtDprGS0i', {mode: 'cors'});
        const randomData = await response.json();
        // console.log(randomData.data.images.original.url);
        img.src = randomData.data.images.original.url;
    } catch (error) {
        console.log(error);
        img.src = 'https://media4.giphy.com/media/l0HUjDphISoMMCMPm/giphy.gif?cid=bbfc1e498djkmm9q38jdt5tdzvq5a41cf28x7z2cfyw4m6q7&rid=giphy.gif&ct=g';
    }
}

async function searchFetch() {
    try {
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=0JvtDfunbRZAukBB5R94oBnUtDprGS0i&s=' + inputSearchText.value, {mode: 'cors'});
        const searchData = await response.json()
        // console.log(searchData.data.images.original.url);
        img.src = searchData.data.images.original.url;
    } catch (error) {
        console.log(error);
        img.src = 'https://media4.giphy.com/media/l0HUjDphISoMMCMPm/giphy.gif?cid=bbfc1e498djkmm9q38jdt5tdzvq5a41cf28x7z2cfyw4m6q7&rid=giphy.gif&ct=g';
    }
}