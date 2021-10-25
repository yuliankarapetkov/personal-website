<script lang="ts">
    import Section from '../Section.svelte';
    import Skill from '../Skill.svelte';

    const skills = [
        {
            name: 'React',
            percentage: 80,
            icon: 'fab fa-react'
        },
        {
            name: 'React Native',
            percentage: 80,
            icon: 'fab fa-react'
        },
        {
            name: 'Svelte/Sapper',
            percentage: 100,
            icon: 'svelte.svg'
        },
        {
            name: 'Angular',
            percentage: 100,
            icon: 'fab fa-angular'
        },
        {
            name: 'Ionic',
            percentage: 80,
            icon: 'ionic.svg'
        },
        {
            name: 'NestJS',
            percentage: 60,
            icon: 'nestjs.svg'
        },
        {
            name: 'Firebase',
            percentage: 80,
            icon: 'firebase.svg'
        },
        {
            name: 'JavaScript/TypeScript',
            percentage: 100,
            icon: 'fab fa-js-square'
        },
        {
            name: 'HTML/CSS',
            percentage: 100,
            icon: 'fab fa-html5'
        }
    ];

</script>

<Section title="Skills">
    {#each skills as skill}
        <Skill {...skill} />
    {/each}
</Section>

<style>

</style>
