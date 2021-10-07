
//to fetch an api
fetch('https://icanhazdadjoke.com/slack')
//it will convert joke data to json data
.then(data=>data.json())
//it will fetch only joke
.then(jokeData =>{
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');

    jokeElement.innerHTML = jokeText;
})