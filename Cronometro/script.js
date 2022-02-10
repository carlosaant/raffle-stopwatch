const timer = document.querySelector("#timer");
const bt_iniciar = document.getElementById("bt-iniciar");
const bt_parar = document.getElementById("bt-pausar");
const bt_zerar = document.getElementById("bt-zerar");

let timeInterval;
let _cronometro = {
    seg: 0,
    min: 0,
    hour: 0,
    ativo: false
};

onload = function(){
    timer.innerHTML = "00:00:00";

    bt_iniciar.addEventListener("click", iniciarCron);
    bt_parar.addEventListener("click", pararCron);
    bt_zerar.addEventListener("click", zerarCron);
}

//------------------------------------------------------

function iniciarCron(){
    if(!_cronometro.ativo){
      _cronometro.ativo = true;
      timeInterval = setInterval(timerExibe, 1000);
    }
}

function pararCron(){
    clearInterval(timeInterval);
    _cronometro.ativo = false;
}

function zerarCron(){
    clearInterval(timeInterval);
    _cronometro.seg = 0;
    _cronometro.min = 0;
    _cronometro.hour = 0;
    _cronometro.ativo = false;
    timer.innerHTML = "00:00:00";
}

function timerExibe(){
    incrementaCronometro();
    timer.innerHTML = (_cronometro.hour>=10?_cronometro.hour:"0"+_cronometro.hour)+":"+
                    (_cronometro.min>=10?_cronometro.min:"0"+_cronometro.min)+":"+
                    (_cronometro.seg>=10?_cronometro.seg:"0"+_cronometro.seg);
}

function incrementaCronometro(){
    if(_cronometro.seg>=59){
        _cronometro.seg = 0;
        _cronometro.min++;
    }else
        _cronometro.seg++;

    if(_cronometro.min==60){
        _cronometro.min = 0;
        _cronometro.hour++;
    }
}