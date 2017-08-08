import {Component, OnInit, ViewChild, AfterViewInit, AfterContentInit, AfterViewChecked} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-testing',
    templateUrl: './testing.component.html',
    styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit,AfterViewInit,AfterContentInit,AfterViewChecked {

    @ViewChild("f") f: NgForm
    rand: string
    // input:{
    //   username:string
    //   secret:string
    // }
    constructor() {
        // this.input.username="username_"+this.randStr()
        // this.input.secret="secret_"+this.randStr()
    }

    ngAfterViewInit() {

        setTimeout(
            ()=>{
                this.setValues()
                console.log("View init")
            },
            100
        )

    }
    ngAfterViewChecked(){
        // this.setValues()
        // console.log("View checked")//

    }

    ngAfterContentInit() {
        // this.setValues()
        console.log("content init")
    }

    setValues() {
        this.f.form.patchValue({
            email: "email@mail.com"
        })
        console.log("values setted")
    }

    ngOnInit() {
        // this.input={
        //   username:"username_"+this.randStr(),
        //   secret:"secret_"+this.randStr()
        // }
        // this.rand=this.randStr()
        // console.log("rand",this.rand)
        this.rand = "_";
        // this.f.form.patchValue({
        //   email__:"email@mail.com"
        // })

    }

    randStr(): string {
        var text = "";
        var possible =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
                .split('')
                .sort(() => 0.5 - Math.random())
                .join('')

        for (var i = 0; i < 50; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    onSubmit() {
        console.log(this.f.value)
    }


}
