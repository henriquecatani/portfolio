function dark() {
    document.body.className = "dark"
    document.getElementById("darktg").style.display = "none"
    document.getElementById("lighttg").style.display = ""
    document.getElementById("darklg").style.display = "none"
    document.getElementById("lightlg").style.display = ""
    localStorage.setItem('modo', '1')
}
function light() {
    document.body.className = "light"
    document.getElementById("lighttg").style.display = "none"
    document.getElementById("darktg").style.display = ""
    document.getElementById("darklg").style.display = ""
    document.getElementById("lightlg").style.display = "none"
    localStorage.setItem('modo', '0')
}

let mode = localStorage.getItem('modo') || '0'
if (mode == '0') {
    light()
} else {
    dark()
}
