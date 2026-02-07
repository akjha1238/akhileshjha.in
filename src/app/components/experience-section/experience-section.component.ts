import { Component } from '@angular/core';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  summary: string;
}

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent {
  roles: ExperienceItem[] = [
    {
      title: 'Senior Frontend Developer',
      company: 'Comviva Technologies',
      period: 'Jan 2025 - Present',
      summary:
        'Designed SDUI components in Storybook, built JSON-driven rendering, and partnered with QA and backend teams to deliver configurable UI across deployments.'
    },
    {
      title: 'Frontend Developer',
      company: 'Comviva Technologies',
      period: 'Aug 2022 - Dec 2024',
      summary:
        'Delivered core payment features, created shared data views, and implemented dynamic forms to speed delivery while improving security posture.'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Comviva Technologies',
      period: 'Jan 2022 - Jul 2022',
      summary:
        'Resolved frontend defects, built responsive UI components, and shortened QA cycles by validating features early.'
    }
  ];
}
