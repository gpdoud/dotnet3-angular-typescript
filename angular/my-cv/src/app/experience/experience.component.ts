import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  jobs: any[] = [
    { 
      title: '.NET Boot Camp Instructor', 
      company: 'MAX Technical Training',
      description: 'Taught multiple 10 week immersive boot camps in both .NET and Java.',
      technologies: ["C#", "SQL Server", "EntityFramework", "MVC", "WebAPI"] 
    },
    { 
      title: '.NET Boot Camp Instructor', 
      company: 'The Iron Yard',
      description: 'Taught multiple 10 week immersive boot camps in both .NET and Java.', 
      technologies: ["Java", "MySQL", "Hibernate", "MVC"] 
    },    
    { 
      title: 'Lead Developer - consultant', 
      company: 'Consulting Firm',
      description: '.NET Developer for hire', 
      technologies: ["C#", "SQL Server"] 
    }    
  ];

  constructor() { }

  ngOnInit() {
  }

}
