import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        NavbarComponent,
        HomeComponent,
        ProjectsComponent,
        ContactComponent,
        RouterModule,
        FooterComponent
    ]
})

export class AppComponent {
  title = "Thaïs' Portfolio";
}

