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
    use:visible={{ onBecomeVisible }}
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
        text-transform: uppercase;
        font-size: 0.875rem;
        text-align: left;
        margin-bottom: 1rem;
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
</style>
