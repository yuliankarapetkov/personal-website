<script lang="ts">
    import Chip from './Chip.svelte';
    import type { Job } from '../models';
    import Icon from './Icon.svelte';
    import SmallRecommendation from './SmallRecommendation.svelte';
    import { visible } from '../actions';
    
    export let job: Job;

    let isVisible = false;

    const onBecomeVisible = () => isVisible = true;

</script>

<div class="job" use:visible={{ onBecomeVisible }}>

    <div class="left" >
        <div class:slide-right={isVisible}>
            <div class="duration">
                {job.duration}
            </div>

            <div class="role">
                {job.role}
            </div>
        </div>
    </div>

    <div class="right" class:slide-left={isVisible}>
        <div class="company">
            {job.company}
        </div>

        <div class="location">
            <Icon icon="fas fa-map-marker-alt" alt={job.location} />

            {job.location}
        </div>

        <p class="description">
            {@html job.description}
        </p>

        {#if job.recommendation}
            <SmallRecommendation recommendation={job.recommendation} />
        {/if}

        <div class="technologies">
            {#each job.technologies || [] as technology}
                <Chip variant="accent">{technology}</Chip>
            {/each}
        </div>
    </div>

</div>

<style>
    .job {
        display: flex;
    }

    .left,
    .right {
        flex: 1;
        padding: 0 3rem 6rem;
    }

    .left {
        border-right: 2px solid #b2c1ce;
        text-align: right;
        position: relative;
    }

    .left::after {
        content: '';
        height: 1rem;
        width: 1rem;
        background: var(--accent-color);
        display: block;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: -0.5rem;
    }

    .right {
        text-align: left;
    }

    .role,
    .location {
        color: var(--secondary-text-color);
    }

    .company,
    .duration {
        margin-bottom: 1rem;
        color: #444;
        font-weight: 600;
        font-size: 1.125rem;
    }

    .location {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .location :global(.icon) {
        width: 1rem;
        margin-right: 0.125rem;
    }

    .description {
        color: var(--secondary-text-color);
        margin: 0;
    }

    .technologies {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
    }

    @media only screen and (max-width: 768px) {
        .job {
            flex-direction: column;
        }

        .right {
            padding: 0 1rem 3rem;
        }

        .left {
            border-right: none;
            text-align: left;
            padding: 0 1rem 0.5rem;
        }

        .left::after {
            content: none;
        }

        .duration {
            font-size: 0.9375rem;
            margin-bottom: 0.5rem;
        }

        .role {
            font-size: 0.875rem;
        }

        .company {
            margin-bottom: 0.5rem;
            font-size: 0.9375rem;
        }

        .location {
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
        }

        .location :global(i) {
            font-size: 0.875rem;
        }

        .description {
            font-size: 0.875rem;
        }

        .technologies {
            display: flex;
            flex-wrap: wrap;
            margin-top: 0.5rem;
        }
    }
</style>
