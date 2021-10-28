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

    <span class="overlay">
        <Icon {icon} alt={name} height="1.5rem" />

        <span class="name">
            {name}
        </span>
    </span>
</a>

<style>
    .profile-link,
    .overlay {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 9rem;
        border-right: 1px solid #b2c1ce;
        text-decoration: none;
        color: var(--secondary-text-color);
    }

    .profile-link {
        position: relative;
    }

    .profile-link :global(i) {
        color: var(--secondary-text-color);
    }

    .profile-link :global(img) {
        filter: var(--secondary-text-color-svg);
    }

    .overlay {
        position: absolute;
        background: var(--accent-color);
        color: white;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        transform: scale(0);
    }

    .overlay :global(i) {
        color: white;
    }

    .overlay :global(img) {
        filter: var(--main-background-color-svg);
    }

    .profile-link:hover .overlay {
        transform: scale(1);
        transition: all .15s ease 0s;
    }

    .name {
        margin-top: 0.5rem;
    }

    @media only screen and (max-width: 768px) {
        .profile-link,
        .overlay {
            border: none;
            margin-bottom: 1.5rem;
        }

        .name {
            font-size: 0.75rem;
        }

        .profile-link:hover .overlay {
            transform: scale(0);
        }
    }
</style>
