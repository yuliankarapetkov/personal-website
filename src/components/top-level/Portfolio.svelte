<script lang="ts">
    import type { Project as ProjectType } from '../../models';

    import Project from '../Project.svelte';
    import Section from '../Section.svelte';

    const projects: ProjectType[] = [
        {
            name: 'Masterpeace',
            description: 'Mobile app that teaches you how to meditate. Built with SvelteKit & Capacitor',
            imageUrl: '/images/projects/masterpeace.webp',
            technologies: [
                'Svelte',
                'SvelteKit',
                'Capacitor',
                'Glassfy',
                'Firebase',
                'Cloud Firestore',
                'TypeScript',
                'HTML',
                'SCSS'
            ]
        },
        {
            name: 'TruthSense',
            description: 'Browser extension that shows news outlets\' credibility scores. Built with Svelte & CRXJS',
            sourceUrl: 'https://github.com/yuliankarapetkov/truthsense',
            imageUrl: '/images/projects/truthsense.webp',
            technologies: [
                'Svelte',
                'CRXJS',
                'TypeScript',
                'HTML',
                'SCSS'
            ]
        },
        {
            name: 'Todo app with React',
            description: 'Sample todo app built with React, Redux Toolkit and Firebase',
            demoUrl: 'https://todo-react-bb577.web.app/',
            sourceUrl: 'https://github.com/yuliankarapetkov/todo-react',
            imageUrl: '/images/projects/todo-react.webp',
            technologies: [
                'React',
                'Redux Toolkit',
                'Redux-Observable',
                'RxJS',
                'Firebase',
                'Cloud Firestore',
                'TypeScript',
                'HTML',
                'CSS'
            ]
        },
        {
            name: 'Todo app with Angular',
            description: 'Sample todo app built with Angular, NgRx Store and Firebase',
            demoUrl: 'https://sample-angular-todo-app.web.app/',
            sourceUrl: 'https://github.com/yuliankarapetkov/todo-app',
            imageUrl: '/images/projects/todo-angular.webp',
            technologies: [
                'Angular',
                'NgRx',
                'RxJS',
                'Firebase',
                'Cloud Firestore',
                'TypeScript',
                'HTML',
                'CSS'
            ]
        },
        {
            name: 'Rentals',
            description: 'Sample project for apartment rentals built with Angular, NgRx Store, NestJS and PostgreSQL',
            sourceUrl: 'https://github.com/yuliankarapetkov/rentals',
            imageUrl: '/images/projects/rentals.webp',
            technologies: [
                'Angular',
                'NgRx',
                'RxJS',
                'Node.js',
                'NestJS',
                'PostgreSQL',
                'TypeScript',
                'Angular Material',
                'HTML',
                'CSS'
            ]
        },
        {
            name: 'GitHub Viewer',
            description: 'Sample project for previewing code repositories built with Angular, NgRx Store, Firebase and Angular Material',
            sourceUrl: 'https://github.com/yuliankarapetkov/github-viewer',
            demoUrl: 'https://githubviewer-mvp.web.app/',
            imageUrl: '/images/projects/github-viewer.webp',
            technologies: [
                'Angular',
                'NgRx',
                'RxJS',
                'Firebase',
                'Cloud Firestore',
                'TypeScript',
                'Angular Material',
                'HTML',
                'CSS'
            ]
        }
    ];

</script>

<Section id="portfolio" title="Portfolio" style="accent" description="This website and my resume are both powered by Svelte & SvelteKit 🚀">
        
    <div>
        {#each projects as project}
            <Project {project} />
        {/each}
    </div>

</Section>

<style>
    div {
        justify-content: space-between;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 3rem;
    }

    @media only screen and (max-width: 768px) {
        div {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            grid-gap: 0.5rem;
        }
    }
</style>
