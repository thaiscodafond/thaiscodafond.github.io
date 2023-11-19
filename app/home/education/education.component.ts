import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationItemComponent } from './education-item/education-item.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, EducationItemComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educations = [
    {
      title: 'Engineering Degree',
      where: 'IMT Atlantique',
      duration: '2021-2024',
      description: 
        'Majoring in "Computer Science and Collaborative Software Development" and "Data Science Analysis".'
      
    },
    {
      title: 'National Student Entrepreneur Status',
      where: 'Delivered by the French Ministry of Education and Research',
      duration: '2022',
      description: 
        'The national status of student-entrepreneur allows any student or young graduate who wishes to create his own business to be supervised within a PEPITE, a student center which accompanies young entrepreneurs. This was delivered to me due to my work as a quality manager & my dedication to getting the ISO 9001 norm in the Junior-Entreprise of my school.'
      
    },
    {
      title: 'STEM Preparatory Classes',
      where: 'MPSI/MP, Chateaubriant High School',
      duration: '2019-2021',
      description: 
        'Two years of study in excellence programs called “Classes Préparatoires": Intensive classes focused primarily on maths and physics.'
      
    }
  ];
}
