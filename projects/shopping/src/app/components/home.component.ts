import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `<h2>{{title}}</h2><p>Welcome to Angular </p>`,
    styles: ['h2{color:red; text-align:center}']
})
export class HomeComponent
{
public title:string ="Home page"
}