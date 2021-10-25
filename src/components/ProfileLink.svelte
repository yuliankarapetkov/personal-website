<script lang="ts">
    import Icon from './Icon.svelte';
    import type { Profile } from '../models';

    export let profile: Profile;

    $: ({ name, url, icon } = profile);

</script>

<a
    href={url}
    target="_blank"
    class="profile-link"
>

    <Icon {icon} alt={name} height="1.5rem" />

    <span class="name">
        {name}
    </span>
</a>

<style>
    .profile-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 9rem;
        border-right: 1px solid #b2c1ce;
        text-decoration: none;
        color: var(--accent-color);
    }

    .name {
        margin-top: 0.5rem;
    }
</style>
