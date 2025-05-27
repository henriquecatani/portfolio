function dark() {
    document.body.className = "dark"
    document.getElementById("darktg").style.display = "none"
    document.getElementById("lighttg").style.display = ""
}
function light() {
    document.body.className = "light"
    document.getElementById("lighttg").style.display = "none"
    document.getElementById("darktg").style.display = ""
}
light()