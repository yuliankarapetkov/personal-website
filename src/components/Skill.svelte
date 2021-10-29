<script lang="ts">
    import Icon from "./Icon.svelte";
	import { cubicOut } from 'svelte/easing';
    import { tweened } from 'svelte/motion';
    import { visible } from '../actions';

    export let name: string;
    export let percentage: number;
    export let icon: string;

    const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

    const onBecomeVisible = () => progress.set(percentage);

</script>

<div
    class="skill"
    use:visible={{ desktopOnly: false, onBecomeVisible }}
>
    <span class="name">
        {#if icon}
            <Icon {icon} alt={name} />
        {/if}

        {name}
    </span>

    <div class="bar">
        <div class="progress" style="width: {$progress}%;" />
    </div>
</div>

<style>
    .skill {
        display: flex;
        flex-direction: column;
        margin-bottom: 2.5rem;

        --bar-height: 0.5rem;
    }

    .name {
        display: flex;
        align-items: center;
        font-size: 0.9375rem;
        text-align: left;
        margin-bottom: 1rem;
        color: #333;
    }

    .name :global(.icon) {
        margin-right: 0.25rem;
    }

    .bar {
        border: 1px solid var(--accent-color);
        border-radius: var(--border-radius);
        height: var(--bar-height);
        background: white;
    }

    .progress {
        background-color: var(--accent-color);
        height: var(--bar-height);

        border-radius: var(--border-radius);
    }

    @media only screen and (max-width: 768px) {
        .skill {
            margin-bottom: 1.5rem;
            --bar-height: 0.25rem;
        }

        .name {
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
        }

        .name :global(.icon) {
            top: -1px;
            position: relative;
        }
    }
</style>
