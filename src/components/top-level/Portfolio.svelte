<script lang="ts">
    import type { Project as ProjectType } from '../../models';

    import Project from '../Project.svelte';
    import Section from '../Section.svelte';

    const projects: ProjectType[] = [
        {
            name: 'Todo App',
            description: 'Sample Todo App built with Angular, NgRx Store and Firebase',
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

<Section id="portfolio" title="Portfolio">
        
    <div>
        {#each projects as project}
            <Project {project} />
        {/each}
    </div>

</Section>

<style>
    div {
        display: flex;
        justify-content: space-evenly;
    }

    @media only screen and (max-width: 768px) {
        div {
            flex-direction: column;
        }
    }
</style>
