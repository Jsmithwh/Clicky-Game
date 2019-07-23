//Making images active
$("#parent").on("click", "img", event => {

    //increment the score by one or reset the score if the image has already been clicked
    //make array, if clicked, image id will go into array
    //if image has been clicked again, the game will be reset and the array will be cleared of image ids
    //randomly generate a new list for the array of image ids

})

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}

$("#parent").empty();
for (x=0; x < array.length; x++)
$("#parent").append("<img src=" + object[i] + ">")


