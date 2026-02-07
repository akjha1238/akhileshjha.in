import { Component } from '@angular/core';

@Component({
  selector: 'app-writing-section',
  templateUrl: './writing-section.component.html',
  styleUrls: ['./writing-section.component.css']
})
export class WritingSectionComponent {
  cards = [
    {
      title: 'UX microcopy',
      description: 'Labels, validation messages, and workflows that reduce user friction.'
    },
    {
      title: 'Documentation',
      description: 'Component usage, integration guides, and architecture references.'
    },
    {
      title: 'Team alignment',
      description: 'Clear specs for backend contracts and feature behaviors.'
    }
  ];
}
