function makeBigger(){
    alert("Hello, world!")
    document.getElementById("textInput").style.fontSize = "24pt";
}

function fancifyText(){
    let fancy = document.getElementById("fancy");
    let boring = document.getElementById("boring");
    let textArea = document.getElementById("textInput");

    if (fancy.checked){
        alert("FancySchmancy picked!");
        textArea.style.fontWeight = "bold";    
        textArea.style.color ="blue";
        textArea.style.textDecoration = "underline";
    }
    else if (boring.checked){
        alert("BoringBetty picked...");
        textArea.style.fontWeight = "normal";
        textArea.style.color ="black";
        textArea.style.textDecoration = "none";
        
    }
}

function mooText(){
    let textArea = document.getElementById("textInput");
    alert("Mooooooo");
    textArea.value = textArea.value.toUpperCase();

    let sentenceSplit = textArea.value.split(".");
    // for every sentence
    for (let i = 0; i < sentenceSplit.length; i++){
        let words = sentenceSplit[i].trim().split(" ");
        if (words.length > 0 && words[0] !== ""){
            // change last word to add -MOO
            words[words.length - 1] = words[words.length - 1] + "-MOO";
            sentenceSplit[i] = words.join(" ");
        }
    }

    textArea.value = sentenceSplit.join(". ");
}