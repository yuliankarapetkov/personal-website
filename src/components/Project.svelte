<script lang="ts">
    import Button from './Button.svelte';
    import Chip from './Chip.svelte';
    import Icon from './Icon.svelte';
    import type { Project } from '../models';

    export let project: Project;

    const hasDemo = !!project.demoUrl;

</script>

<div class="project">
    <div class="thumb" style="background-image: url({project.imageUrl});">
        <a href={project.demoUrl || project.sourceUrl} target="_blank" class="overlay">
            <span>
                {#if hasDemo}
                    <Icon icon="fas fa-play" />

                    Check demo
                {:else}
                    <Icon icon="fas fa-code" />

                    See code
                {/if}
            </span>

        </a>
    </div>

    <div class="content">
        <div class="name">
            {project.name}
        </div>

        {#if hasDemo}
            <Button
                href={project.demoUrl}
                target="_blank"
                variant="accent"
                size="small"
                icon="fas fa-play"
            >
                Demo
            </Button>
        {/if}

        <Button
            href={project.sourceUrl}
            target="_blank"
            variant="accent"
            size="small"
            icon="fas fa-code"
        >
            Code
        </Button>
        
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </p>

        <div class="technologies">
            {#each project.technologies as technology}
                <Chip>{technology}</Chip>
            {/each}
        </div>
    </div>
</div>

<style>
    .project {
        width: 40%;
        display: flex;
        flex-direction: column;
        background: white;
        box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 5%);
        border-radius: calc(2 * var(--border-radius));
    }

    .thumb {
        background-repeat: no-repeat;
        background-size: cover;
        height: 18rem;
        position: relative;
        border-top-left-radius: calc(2 * var(--border-radius));
        border-top-right-radius: calc(2 * var(--border-radius));
    }

    .overlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background: var(--accent-color);
        color: white;
        /* font-size: 1.5rem; */
        cursor: pointer;
        border-top-left-radius: calc(2 * var(--border-radius));
        border-top-right-radius: calc(2 * var(--border-radius));
        text-decoration: none;

        opacity: 0;
    }

    .overlay span {
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        text-transform: uppercase;
    }

    .thumb:hover .overlay {
        opacity: 0.7;
        transition: all .3s ease 0s;
    }

    .content {
        text-align: left;
        padding: 0 2rem 2rem;
    }

    .name {
        font-size: 1.5rem;
        color: var(--secondary-text-color);
        margin: 1rem 0;
    }

    p {
        font-size: 0.9375rem;
        color: var(--faded-text-color);
    }

    .technologies {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
    }
</style>
