<script lang="ts">
    import Section from '../Section.svelte';
    import Skill from '../Skill.svelte';

    const skills = [
        {
            name: 'Svelte/SvelteKit',
            percentage: 100,
            icon: 'svelte.svg'
        },
        {
            name: 'Angular',
            percentage: 100,
            icon: 'fab fa-angular'
        },
        {
            name: 'React',
            percentage: 90,
            icon: 'fab fa-react'
        },
        {
            name: 'React Native',
            percentage: 90,
            icon: 'fab fa-react'
        },
        {
            name: 'Ionic',
            percentage: 80,
            icon: 'ionic.svg'
        },
        {
            name: 'Node.js/Express.js',
            percentage: 70,
            icon: 'fab fa-node-js'
        },
        {
            name: 'NestJS',
            percentage: 80,
            icon: 'nestjs.svg'
        },
        {
            name: 'Firebase',
            percentage: 90,
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

    const half = Math.ceil(skills.length / 2);  

    const description = `I have previously worked with the following technologies as well: <br /> AngularJS, jQuery, C#,
        ASP.NET (Core, Web API, MVC, WCF,
        WebForms), MongoDB,
        Mongoose, Entity Framework, SQL
        (PL/SQL, T-SQL), ASP.`;

</script>

<Section
    id="skills"
    title="Skills"
    {description}
>
    <div class="container">

        <div class="skills">
            {#each skills.slice(0, half) as skill}
                <Skill {...skill} />
            {/each}
        </div>

        <div class="skills">
            {#each skills.slice(half) as skill}
                <Skill {...skill} />
            {/each}
        </div>

    </div>
</Section>

<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .skills {
        flex: calc(50% - 1rem) 0 0;
    }

    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
        }
    }
</style>
