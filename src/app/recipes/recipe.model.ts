
export class Recipe  {
    name:string;
    description:string;
    imagePath:string;

    constructor(nm:string, dsc:string,img:string){
        this.name=nm;
        this.description=dsc;
        this.imagePath=img;
    }

}
