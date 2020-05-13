//events 

const EventEmitter = require('events');


class Emissor extends EventEmitter{

}

const emissor = new Emissor;
const nameEvent = 'user:click';

emissor.on(nameEvent, function(click){
    console.log('user clicou', click);
})

setInterval(()=>{

     emissor.emit(nameEvent, 'barra de rolagem');
    emissor.emit(nameEvent, 'no ok');

} ,2000)

const stdin = process.openStdin();

stdin.addListener('data', function (value){
    console.log(`você digitou: ${value.toString().trim()}`)
})