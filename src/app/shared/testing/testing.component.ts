import {Component, OnInit, ViewChild, AfterViewInit, AfterContentInit, AfterViewChecked} from '@angular/core';
import {
    NgForm, FormGroup, FormControl, Validators, FormArray, ValidatorFn, AbstractControl,
    ValidationErrors
} from "@angular/forms";

@Component({
    selector: 'app-testing',
    templateUrl: './testing.component.html',
    styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

    rctForm: FormGroup
    forbiddenNames=[
        'roberto','fernando'
    ]

    constructor() {
        this.rctForm = new FormGroup({
            'username': new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
                this.forbiddenNamesValidator.bind(this)
            ]),
            'email': new FormControl(null, [
                Validators.required,
                Validators.email,
                Validators.minLength(6),
            ]),
            'secret': new FormControl(null, [
                    Validators.required,
                    Validators.minLength(6),
                ]
            ),
            'hobbies': new FormArray([],
                // this.forbiddenNamesValidator.bind(this)
            )
        })
    }


    ngOnInit() {
        // (<FormControl>this.rctForm.get("username")).errors
    }

    onSubmit() {
        console.log(this.rctForm)
    }

    addHobby() {
        const hobby = new FormControl(null, [
           // Validators.required
            Validators.minLength(5)
        ]);

        // console.log(<FormArray>this.rctForm['hobbies']);
        let hobbies= (<FormArray>this.rctForm.get('hobbies'));
        if(hobbies.length<5){
            hobbies.push(hobby);
        }
        // (<FormArray>this.rctForm.get('hobbies')).push(hobby)
    }

    forbiddenNamesValidator(ctrl:AbstractControl)
    /*:{
        [key: string]: any;
    }*/
    :ValidationErrors
    {
        let index=this.forbiddenNames.indexOf(ctrl.value)
        // if(this.forbiddenNames.indexOf(ctrl.value)>-1){
        // console.log("indexOf",index)//
        if(index>-1){
            return {'forbiddenName':true}
        }
        return null;
    }

}
