<script lang="ts">
    import Button from './Button.svelte';
    import Chip from './Chip.svelte';
    import Icon from './Icon.svelte';
    import type { Project } from '../models';
    import { visible } from '../actions';

    export let project: Project;

    let isVisible = false;

    const hasDemo = !!project.demoUrl;

    const onBecomeVisible = () => isVisible = true;

</script>

<div class="project" class:slide-up={isVisible} use:visible={{ onBecomeVisible }}>
    <div class="thumb" style="background-image: url({project.imageUrl});">
        <a href={project.demoUrl || project.sourceUrl} target="_blank" class="overlay">
            {#if hasDemo}
                <Icon icon="fas fa-play" height="1.25rem" />

                Check demo
            {:else}
                <Icon icon="fas fa-code" height="1.25rem" />

                See code
            {/if}
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
            {project.description}
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
        width: calc(50% - 2rem);
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
        border-bottom: 1px solid #f5f5f5;
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
        text-transform: uppercase;
        cursor: pointer;
        border-top-left-radius: calc(2 * var(--border-radius));
        border-top-right-radius: calc(2 * var(--border-radius));
        text-decoration: none;

        opacity: 0;
    }

    .overlay :global(.icon) {
        margin-bottom: 1rem;
    }
    
    .overlay :global(i) {
        color: white;
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
        font-size: 1.25rem;
        color: var(--main-text-color);
        margin: 1rem 0;
    }

    p {
        font-size: 0.9375rem;
        color: var(--secondary-text-color);
    }

    .technologies {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
    }

    @media only screen and (max-width: 1024px) {
        .project {
            width: calc(50% - 1rem);
        }
    }

    @media only screen and (max-width: 768px) {
        .project {
            width: auto;
            margin-bottom: 1rem;
        }

        .name {
            font-size: 1.125rem;
        }

        p {
            font-size: 0.875rem;
        }
    }
</style>
