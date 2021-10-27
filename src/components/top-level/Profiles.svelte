<script lang="ts">
    import type { Profile } from '../../models';
    import ProfileLink from '../ProfileLink.svelte';
    import Section from '../Section.svelte';

    const profiles: Profile[] = [
        {
            name: 'GitHub',
            url: 'https://github.com/yuliankarapetkov',
            icon: 'fab fa-github'
        },
        {
            name: 'StackOverflow',
            url: 'https://stackoverflow.com/users/2419808/yulian',
            icon: 'fab fa-stack-overflow'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/yuliankarapetkov/',
            icon: 'fab fa-linkedin'
        },
        {
            name: 'Toptal',
            url: 'https://www.toptal.com/resume/yulian-karapetkov',
            icon: 'toptal.svg'
        },
        {
            name: 'Braintrust',
            url: 'https://app.usebraintrust.com/talent/703/',
            icon: 'fas fa-external-link-alt'
        },
        {
            name: 'Upwork',
            url: 'https://www.upwork.com/freelancers/~01c432b6d9387c83e1',
            icon: 'upwork.svg'
        }
    ];

    const half = Math.ceil(profiles.length / 2); 

</script>

<Section id="profiles" title="Profiles" style="white">
        
    <div class="profiles">
        {#each profiles.slice(0, half) as profile}
            <ProfileLink {profile} />
        {/each}
    </div>

    <div class="profiles">
        {#each profiles.slice(half) as profile}
            <ProfileLink {profile} />
        {/each}
    </div>

</Section>

<style>
    .profiles {
        display: flex;
        width: 100%;
    }

    .profiles:not(:first-of-type) {
        border-top: 1px solid #b2c1ce;
    }

    .profiles :global(.profile-link):last-child {
        border-right: none;
    }
</style>
