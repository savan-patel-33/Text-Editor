const textarea = document.getElementById("textarea");
const filename = document.getElementById("filename-input");
function fontsize(e) {
    let value = e.value;
    textarea.style.fontSize = value + "px"
}
function bold(e) {
    let selection = document.getSelection();
    let selRange = selection.getRangeAt(0);
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
    }
    else {
        textarea.style.fontWeight = "bold";
    }
}
function italic(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle = "normal";
    }
    else {
        textarea.style.fontStyle = "italic";
    }
}
function underline(e) {
    if (textarea.style.textDecoration == "underline") {
        textarea.style.textDecoration = "none";
    }
    else {
        textarea.style.textDecoration = "underline";
    }
}
function justify_left(e) {
    textarea.style.textAlign = "left";
}
function justify_center(e) {
    textarea.style.textAlign = "center";
}
function justify_right(e) {
    textarea.style.textAlign = "right";
}
function full(e) {
    textarea.style.textAlign = "justify";
}
function capital(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "none";
    }
    else {
        textarea.style.textTransform = "uppercase";
    }
}
function erase() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}
function font_color(e) {
    let value = e.value;
    textarea.style.color = value;
}

function pdfgenerat() {
    var element = document.getElementById('textarea');
    html2pdf(element).save(filename.value);
}