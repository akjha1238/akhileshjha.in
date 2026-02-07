
# Akhilesh Kumar Jha – Portfolio

A modern, single-page portfolio built with Angular, featuring parallax effects, modular components, and content sourced from Akhilesh Kumar Jha's resume.

## Features

- **Component-based Angular SPA**: Each section (navbar, hero, about, skills, projects, experience, writing, contact, footer) is a dedicated Angular component for easy maintenance and scalability.
- **Modern UI/UX**: Clean, responsive design with parallax/depth effects and smooth scrolling.
- **Resume Download**: Downloadable PDF resume from the hero section.
- **Branding**: Custom logo (AKJ) and full name in the navbar.
- **Content-rich**: All content is based on the provided resume, including projects, experience, and writing.
- **Easy Customization**: Update content by editing the relevant Angular components.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### Installation
1. **Clone the repository:**
	```sh
	git clone <your-repo-url>
	cd akhileshjha.in
	```
2. **Install dependencies:**
	```sh
	npm install
	```

### Running Locally
Start the development server:
```sh
npm start
```
Visit [http://localhost:4200](http://localhost:4200) in your browser.

### Building for Production
```sh
ng build --configuration production
```
Output will be in the `dist/` directory.

## Project Structure

```
akhileshjha.in/
├── angular.json
├── package.json
├── README.md
├── tsconfig*.json
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── app/
│       ├── app.component.*
│       ├── app.module.ts
│       └── components/
│           ├── site-nav/
│           ├── hero-section/
│           ├── about-section/
│           ├── skills-section/
│           ├── projects-section/
│           ├── experience-section/
│           ├── writing-section/
│           ├── contact-section/
│           └── site-footer/
│       └── assets/
│           └── data/Akhilesh_Kumar_Jha.pdf
```

## Customization
- **Content**: Edit the relevant component files in `src/app/components/`.
- **Resume**: Replace `src/assets/data/Akhilesh_Kumar_Jha.pdf` with your own PDF.
- **Branding/Logo**: Update the `site-nav` component for logo or name changes.
- **Parallax/Styling**: Adjust CSS in `app.component.css` or component styles.

## Deployment
You can deploy the built `dist/` folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## License
This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio.

---

**Made with Angular & ❤️ by Akhilesh Kumar Jha**
