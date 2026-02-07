import { Component } from '@angular/core';

interface ProjectItem {
  title: string;
  tag: string;
  description: string;
  bullets: string[];
  highlighted?: boolean;
}

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent {
  projects: ProjectItem[] = [
    {
      title: 'Enterprise Wallet Suite',
      tag: 'Angular - SDUI',
      description:
        'Built consumer and admin portals for multi-tenant deployments, including payments, cards, and account modules with shared UI primitives.',
      bullets: ['Reusable feature shells for multi-tenant delivery.', 'Standardized table and pagination patterns.']
    },
    {
      title: 'Dynamic Forms Engine',
      tag: 'JSON-driven - Angular',
      description:
        'Introduced a configurable form framework that reduced development time while keeping validation and layout consistent across teams.',
      bullets: ['Schema-based fields with controlled validation.', 'Designer-friendly configuration workflow.'],
      highlighted: true
    },
    {
      title: 'Performance Refactor',
      tag: 'Optimization - Angular',
      description:
        'Refactored legacy components and reduced UI change effort with modular, Storybook-driven components and a JSON UI parser.',
      bullets: ['Release cycles became smoother and more predictable.', 'Security issues dropped with improved linting and audits.']
    }
  ];
}
