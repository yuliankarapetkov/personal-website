<script lang="ts">
    import type { Job } from '../models';

    export let job: Job;

</script>

<div class="job">

    <div class="left">
        <div class="duration">
            {job.duration}
        </div>

        <div class="role">
            {job.role}
        </div>
    </div>

    <div class="right">
        <div class="company">
            {job.company}
        </div>

        <div class="location">
            {job.location}
        </div>

        <div class="description">
            {@html job.description}
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

    .duration {
        margin-bottom: 1rem;
    }

    .role {
        font-size: 0.875rem;
        color: var(--secondary-text-color);
        text-transform: uppercase;
    }

    .company {
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    .location {
        font-size: 0.875rem;
        color: var(--secondary-text-color);
        margin-bottom: 1rem;
    }

    .description {
        font-size: 0.875rem;
        color: var(--faded-text-color);
    }
</style>
