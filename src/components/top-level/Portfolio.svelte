<script lang="ts">
    import type { Project as ProjectType } from '../../models';

    import Project from '../Project.svelte';
    import Section from '../Section.svelte';

    const projects: ProjectType[] = [
        {
            name: 'Todo app with React',
            description: 'Sample todo app built with React, Redux Toolkit and Firebase',
            demoUrl: 'https://todo-react-bb577.web.app/',
            sourceUrl: 'https://github.com/yuliankarapetkov/todo-react',
            imageUrl: '/images/projects/todo-angular.jpeg',
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
            demoUrl: 'https://sample-angular-todo-app.firebaseapp.com/',
            sourceUrl: 'https://github.com/yuliankarapetkov/todo-app',
            imageUrl: '/images/projects/todo-angular.jpeg',
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
            imageUrl: '/images/projects/rentals.jpeg',
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
        }
    ];

</script>

<Section id="portfolio" title="Portfolio" style="accent">
        
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
        }
    }
</style>
