import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {
  cards = [
    {
      title: 'System thinker',
      description:
        'I build reusable UI architectures, set patterns for teams, and create foundations that scale across deployments.'
    },
    {
      title: 'Performance minded',
      description:
        'From refactoring Angular components to optimizing network and rendering paths, I ship fast and stable interfaces.'
    },
    {
      title: 'Collaborative delivery',
      description:
        'I partner with backend and QA teams to deliver configurable, testable, and maintainable products.'
    }
  ];
}
