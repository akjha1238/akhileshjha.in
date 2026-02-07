import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  resumeUrl = '/assets/data/Akhilesh_Kumar_Jha.pdf';

  metaCards = [
    { label: 'Location', value: 'India - Remote friendly' },
    { label: 'Focus', value: 'SDUI - Performance - Design systems' }
  ];

  highlights = [
    'Server-driven UI blocks that scale across deployments.',
    'Storybook-first design system for reusable components.',
    'Performance-focused refactors for faster, cleaner releases.'
  ];
}
