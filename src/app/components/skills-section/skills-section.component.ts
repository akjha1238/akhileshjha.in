import { Component } from '@angular/core';

interface SkillItem {
  name: string;
  level: string;
  description: string;
}

interface SkillGroup {
  title: string;
  items: SkillItem[];
}

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
  groups: SkillGroup[] = [
    {
      title: 'Frontend core',
      items: [
        {
          name: 'Angular',
          level: 'Advanced',
          description: 'Building enterprise modules, reusable components, and SDUI layers.'
        },
        {
          name: 'React',
          level: 'Proficient',
          description: 'Crafting responsive dashboards with clean state boundaries.'
        },
        {
          name: 'JavaScript',
          level: 'Advanced',
          description: 'Modern ES6+ patterns for scalable component architecture.'
        },
        {
          name: 'TypeScript',
          level: 'Advanced',
          description: 'Typed interfaces that keep large UI systems reliable.'
        },
        {
          name: 'HTML and CSS',
          level: 'Advanced',
          description: 'Accessible layouts with modern CSS, tokens, and fluid grids.'
        }
      ]
    },
    {
      title: 'State, async, and architecture',
      items: [
        {
          name: 'RxJS',
          level: 'Advanced',
          description: 'Stream-based data flow for complex UIs and real-time updates.'
        },
        {
          name: 'Redux',
          level: 'Working',
          description: 'Predictable state with clear action boundaries.'
        },
        {
          name: 'SDUI',
          level: 'Advanced',
          description: 'JSON-driven UI for faster configuration and reuse.'
        }
      ]
    },
    {
      title: 'Performance and optimization',
      items: [
        {
          name: 'Profiling',
          level: 'Advanced',
          description: 'Finding render bottlenecks and improving frame consistency.'
        },
        {
          name: 'Refactoring',
          level: 'Advanced',
          description: 'Incremental rewrites that reduce risk and improve speed.'
        }
      ]
    },
    {
      title: 'Tooling and build systems',
      items: [
        {
          name: 'Webpack',
          level: 'Proficient',
          description: 'Custom builds for enterprise apps and modular delivery.'
        },
        {
          name: 'Vite',
          level: 'Proficient',
          description: 'Fast iteration cycles for modern UI development.'
        }
      ]
    },
    {
      title: 'Content writing',
      items: [
        {
          name: 'UX writing',
          level: 'Proficient',
          description: 'Clear microcopy that guides users through complex workflows.'
        },
        {
          name: 'Documentation',
          level: 'Proficient',
          description: 'Readable guides for handoff, onboarding, and system clarity.'
        }
      ]
    }
  ];
}
