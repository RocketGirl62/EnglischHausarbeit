//variabeln festlegen
function variablesquiz1() {
    localStorage.setItem('richtigeq1', 0);
    localStorage.setItem('statusq1', 1);
    localStorage.setItem('frageq1', 1);
}

function status(statusq1) {
    //durch switch case ändern
    if (statusq1 === 1) {
        frage('frageq1');
    }
    if (statusq1 === 2) {
        antwort('frageq1');
    }
    if (statusq1 === 3) {
        endscreen();
    }

}

function frage(frageq1) {

    //Boxfarbe
    document.getElementById('box').classList.add('boxnormal')
    document.getElementById('box').classList.remove('boxgreen')
    document.getElementById('box').classList.remove('boxyellow')
    document.getElementById('box').classList.remove('boxred')

    //Einblenden benötigter Elemente

    //set class
    document.getElementById('f' + frageq1).classList.add('visible')
    document.getElementById('q' + frageq1).classList.add('visible')
    document.getElementById('af1' + frageq1).classList.add('visible')
    document.getElementById('af2' + frageq1).classList.add('visible')
    document.getElementById('ac' + frageq1).classList.add('visible')
    document.getElementById('af1' + frageq1).classList.add('enabledbutton')
    document.getElementById('af2' + frageq1).classList.add('enabledbutton')
    document.getElementById('ac' + frageq1).classList.add('enabledbutton')

    //remove class
    document.getElementById('f' + frageq1).classList.remove('nonvisible')
    document.getElementById('q' + frageq1).classList.remove('nonvisible')
    document.getElementById('af1' + frageq1).classList.remove('nonvisible')
    document.getElementById('af2' + frageq1).classList.remove('nonvisible')
    document.getElementById('ac' + frageq1).classList.remove('nonvisible')
    document.getElementById('af1' + frageq1).classList.remove('disabledbutton')
    document.getElementById('af2' + frageq1).classList.remove('disabledbutton')
    document.getElementById('ac' + frageq1).classList.remove('disabledbutton')

    //anderes
    document.getElementById('skipp').classList.add('visible')
    document.getElementById('skipp').classList.remove('nonvisible')

    //Ausblenden anderer Elemente
    for (var i = 1; i <= 10; i++) {
        //set class
        if (i === frageq1) {

        } else {
            //set class
            document.getElementById('f' + i).classList.add('nonvisible')
            document.getElementById('q' + i).classList.add('nonvisible')
            document.getElementById('af1' + i).classList.add('nonvisible')
            document.getElementById('af2' + i).classList.add('nonvisible')
            document.getElementById('ac' + i).classList.add('nonvisible')
            document.getElementById('e' + i).classList.add('nonvisible')

            //remove class
            document.getElementById('f' + i).classList.remove('visible')
            document.getElementById('q' + i).classList.remove('visible')
            document.getElementById('af1' + i).classList.remove('visible')
            document.getElementById('af2' + i).classList.remove('visible')
            document.getElementById('ac' + i).classList.remove('visible')
            document.getElementById('e' + i).classList.remove('visible')

        }
    }
    document.getElementById('correct').classList.add('nonvisible')
    document.getElementById('correct').classList.remove('visible')
    document.getElementById('false').classList.add('nonvisible')
    document.getElementById('false').classList.remove('visible')
    document.getElementById('skip').classList.add('nonvisible')
    document.getElementById('skip').classList.remove('visible')
    document.getElementById('weiter').classList.add('nonvisible')
    document.getElementById('weiter').classList.remove('visible')
    document.getElementById('endscreen').classList.add('nonvisible')
    document.getElementById('endscreen').classList.remove('visible')

    //Andere Designtechnische Änderungen
    document.getElementById('ac' + frageq1).classList.remove('correctbutton')

    //Nächste Funktion
    richtige(richtigeq1)
}