<script lang="ts">
    import type { Project } from '../models';

    export let project: Project;

</script>

<div class="project">
    <div class="thumb" style="background-image: url({project.imageUrl});" />

    <div class="content">
        <div class="name">
            {project.name}
        </div>

        <a class="button accent" href={project.sourceUrl} target="_blank">
            Code
        </a>

        {#if project.demoUrl}
            <a class="button accent" href={project.demoUrl} target="_blank">
                Demo
            </a>
        {/if}

        <div class="technologies">
            {#each project.technologies as technology}
                <span>{technology}</span>
            {/each}
        </div>
    </div>
</div>

<style>
    .project {
        width: 40%;
        display: flex;
        flex-direction: column;
    }

    .thumb {
        background-repeat: no-repeat;
        background-size: cover;
        height: 18rem;
    }

    .content {
        text-align: left;
    }

    .name {
        font-size: 1.5rem;
        color: var(--secondary-text-color);
        margin: 1rem 0;
    }

    .technologies {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
    }

    span {
        background-color: white;
        padding: 0.25rem 0.75rem;
        font-size: 0.75rem;
        color: var(--accent-color);
        border: 1px solid var(--accent-color);
        margin-right: 0.25rem;
        margin-bottom: 0.5rem;
        border-radius: 6px;
    }
</style>
