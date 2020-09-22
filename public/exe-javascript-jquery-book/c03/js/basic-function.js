var msg = 'Hello Guys, JavaScript e sensacional !';

function updateMessage() {

    /*
        Bloco de instruções da função updateMessage
     */
    var el = document.getElementById('message');
    el.textContent = msg;
}

//chamada da função
updateMessage();