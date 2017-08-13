import {
    animate,
    state,
    style,
    transition,
    trigger
    } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SharedService } from '../shared.service';
import { Subject } from 'rxjs/Subject';
// import Timer = NodeJS.Timer;

@Component( {
selector: 'app-testing',
templateUrl: './testing.component.html',
styleUrls: ['./testing.component.css'],
animations: [
        trigger('divAnimate1', [
            state('a', style( {
backgroundColor: 'red',
transform: 'translateX(0)',
})),
state('b', style( {
backgroundColor: 'blue',
transform: 'translateX(100px)',
})),
// state("c",style({
//     backgroundColor:"green",
//     transform: "translateX(200px)",
// })),
// state("d",style({
//     backgroundColor:"black",
//     transform: "translateX(300px)",
// })),
// state("e",style({
//     backgroundColor:"yellow",
//     transform: "translateX(400px)",
// })),
// state("f",style({
//     backgroundColor:"orange",
//     transform: "translateX(500px)",
// })),
//
// state("g",style({
//     backgroundColor:"red",
//     transform: "translateX(500px)",
// })),
// state("h",style({
//     backgroundColor:"blue",
//     transform: "translateX(400px)",
// })),
// state("i",style({
//     backgroundColor:"green",
//     transform: "translateX(300px)",
// })),
// state("j",style({
//     backgroundColor:"black",
//     transform: "translateX(200px)",
// })),
// state("k",style({
//     backgroundColor:"yellow",
//     transform: "translateX(100px)",
// })),
// state("l",style({
//     backgroundColor:"orange",
//     transform: "translateX(0)",
// })),
// transition("a => b",animate(300)),
// transition("b => a",animate(800)),
transition('a <=> *', animate(400)),
transition('a <=> b', animate(400)),
]),
trigger('divAnimate2', [
            state('a', style( {
backgroundColor: 'red',
transform: 'translateX(0) scale(0.5)',
})),
state('b', style( {
backgroundColor: 'blue',
transform: 'translateX(100px) translateY(100px) scale(1.5)',
})),
// state("c",style({
//     backgroundColor:"green",
//     transform: "translateX(200px)",
// })),
// state("d",style({
//     backgroundColor:"black",
//     transform: "translateX(300px)",
// })),
// state("e",style({
//     backgroundColor:"yellow",
//     transform: "translateX(400px)",
// })),
// state("f",style({
//     backgroundColor:"orange",
//     transform: "translateX(500px)",
// })),
//
// state("g",style({
//     backgroundColor:"red",
//     transform: "translateX(500px)",
// })),
// state("h",style({
//     backgroundColor:"blue",
//     transform: "translateX(400px)",
// })),
// state("i",style({
//     backgroundColor:"green",
//     transform: "translateX(300px)",
// })),
// state("j",style({
//     backgroundColor:"black",
//     transform: "translateX(200px)",
// })),
// state("k",style({
//     backgroundColor:"yellow",
//     transform: "translateX(100px)",
// })),
// state("l",style({
//     backgroundColor:"orange",
//     transform: "translateX(0)",
// })),
transition('a <=> *', [
                style( {
'background-color': 'yellow'
}),
animate(1000, style( {
'border-radius': '50px'
})),
animate(500)
]),
// transition("b => a",animate(100)),
])
]
})
export class TestingComponent implements OnInit, OnDestroy {

evento = new Subject<string>()
interval
state1 = 'a'
state2 = 'b'
constructor(private sharedSrv: SharedService) {
}

onAnimate() {
const states = [
            'a', 'b',
// "c","d","e","f",
// 'g',"h","i","j","k","l",
]
        this.interval = setInterval(() =>  {

this.state1 = states[this.sharedSrv.randomIntFromInterval(0, states.length - 1)]
            console.log('state1', this.state1)
this.state2 = states[this.sharedSrv.randomIntFromInterval(0, states.length - 1)]
            console.log('state1', this.state2)
}, 3000)
// this.state= (this.state=="first") ? "second" : "first"
// console.log("state",this.state)

}
ngOnInit() {
}
ngOnDestroy() {
clearInterval(this.interval)
}
}

