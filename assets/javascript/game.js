
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

function myFunction(){
    document.getElementById("guess_word").innerHTML = "OTHER WORD";
}

var cut = {
    "word" : [
        "ribeye",
        "ribs",
        "porterhouse",
        "t-bone",
        "sirloin",
        "picanha",
        "brisket",
        "bistek",
        "skirtsteak"
    ],
    "where" : [
        "This cut comes for the ribs of the beef",
        "This cut comes for the ribs of the beef (obiously)",
        "This cut comes from the Short Loin",
        "This cut comes from the Short Loin",
        "This cut comes from the Round",
        "This cut comes from the Round. Also known as Tip Sirloin",
        "This cut comes from the Brisket",
        "This cut comes from hte Chuck. Also knwon as 7 Bistek",
        "This cut comes from the Flank. Also known as Arrachera"
    ] 
};

function startgame (){
    console.log("start")
    var index = Math.floor((Math.random() * cut.word.length) + 1);
    var w = cut.word[index];
    var p = cut.where[index];
    var step = $("<newdiv>");
    step.addCass("beef0");
    $(".cow").append(step);
    console.log(w);
    console.log(p);
    return {w:w,p:p}
};




