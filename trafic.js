function turnonRed() {
    document.getElementById("stopButton").style.backgroundColor = "#cf1124";
    document.getElementById("stopLight").style.backgroundColor = "#cf1124";

    document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
    document.getElementById("readyLight").style.backgroundColor = "#4b5069";

    document.getElementById("goButton").backgroundColor = "#1f1d41";
    document.getElementById("goLight").style.backgroundColor = "#4b5069";
}

function turnonYellow() {
    document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
    document.getElementById("stopLight").style.backgroundColor = "#4b5069";

    document.getElementById("readyButton").style.backgroundColor = "#f7c948";
    document.getElementById("readyLight").style.backgroundColor = "#f7c948";

    document.getElementById("goButton").style.backgroundColor = "#1f1d41";
    document.getElementById("goLight").style.backgroundColor = "#4b5069";
}

function turnonGreen() {
    document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
    document.getElementById("stopLight").style.backgroundColor = "#4b5069";

    document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
    document.getElementById("readyLight").style.backgroundColor = "#4b5069";

    document.getElementById("goButton").style.backgroundColor = "#199473";
    document.getElementById("goLight").style.backgroundColor = "#199473";
}