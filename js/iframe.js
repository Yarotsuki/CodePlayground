function rafraichir() {
    var code_html = document.getElementById("code-HTML").value
    var code_css = "<style>" + document.getElementById("code-CSS").value + "</style>"
    var code_js = "<scri" + "pt>" + document.getElementById("code-JS").value + "</scr" + "ipt>"
    var page = document.getElementById('res').contentWindow.document
    page.open();
    page.write(code_html + code_css + code_js)
    page.close();

    var isDarkMode = document.body.classList.contains('dark-mode-theme')

    var iframe = document.getElementById('res')
    if (iframe) {
        var color
        if (isDarkMode) {
            color = '#fff'
    
        } else {
            color = 'black'
          
        }
        var body = iframe.contentDocument.body
        if (body) {
            body.style.color = color
        }
    }
}

