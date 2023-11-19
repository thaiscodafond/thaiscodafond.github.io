import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from "./education/education.component";
import { AboutComponent } from "./about/about.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, EducationComponent, AboutComponent]
})
export class HomeComponent {

}
