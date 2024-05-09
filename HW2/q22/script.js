window.onload = function() {
    const QUOTES = [ "An unexamined like is not worth living.", "Wise men speak because they have something to say; fools because they have to say something.",
    "Happiness depends upon ourselves.", "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
    "Men are disturbed not by things, but by the views which they take of them.", "Happiness resides not in possessions, and not in gold, happiness dwells in the soul.",
    "Friends are as companions on a journey, who ought to aid each other to persevere in the road to a happier life.",
    "The foundation of every state is the education of its youth.", "The sun is a mass of incandescent metal and not a fiery ball.",
    "What-is is unchanging, for it is complete in itself, while What-is-not is utterly nonexistent."
    ];                                              // array of 10 quotes
    let chooser = Math.floor(10*Math.random());     // chooses num for quote indices
    document.getElementById("quote").innerHTML = "<strong>Quote: </strong><i>\"" + QUOTES[chooser] + "\"</i>";
    // adds respective quote to html element

    function currentTime() {
        updateTime();
        setInterval(updateTime, 10000);
        function updateTime() {
            let clock = document.getElementById("time");
            const d = new Date();
            const hours = d.getHours();
            const minutes = d.getMinutes();
            const seconds = d.getSeconds();
            let timeString;

            if (hours < 10) {                                               // adds a 0 to front if any number are below 10
                timeString = "0" + hours + ":" + minutes + ":" + seconds;
            } else if (minutes < 10) {
                timeString = hours + ":0" + minutes + ":" + seconds;
            } else if (seconds < 10) {
                timeString = hours + ":" + minutes + ":0" + seconds;
            } else if (hours < 10 && minutes < 10) {
                timeString = "0" + hours + ":0" + minutes + ":" + seconds;
            } else if (hours < 10 && seconds < 10) {
                timeString = "0" + hours + ":" + minutes + ":0" + seconds;
            } else if (minutes < 10 && seconds < 10) {
                timeString = hours + ":0" + minutes + ":0" + seconds;
            } else if (hours < 10 && minutes < 10 && seconds < 10) {
                timeString = "0" + hours + ":0" + minutes + ":0" + seconds;
            } else {
                timeString = hours + ":" + minutes + ":" + seconds;
            }
            clock.innerHTML = timeString;
        }
    }
currentTime();
};