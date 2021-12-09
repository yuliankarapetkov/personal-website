<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { linkable } from '../actions';

    export let href: string;
    export let cssClass: string = null;
    export let style: string = null;

    const dispatch = createEventDispatcher();

    const click = () => dispatch('click');

</script>

<a {href} {style} class={cssClass} use:linkable={{ onClick: click }}>
    <slot />
</a>
