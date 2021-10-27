<script lang="ts">
    import Icon from '../Icon.svelte';
    import Section from '../Section.svelte';

    const labels = [
        {
            text: 'Sofia, Bulgaria',
            icon: 'fas fa-map-marker-alt'
        },
        {
            text: '30 years old',
            icon: 'fas fa-birthday-cake'
        },
        {
            text: '7+ years experience',
            icon: 'fas fa-laptop'
        },
        {
            text: '4+ years working remotely',
            icon: 'fas fa-laptop-house'
        },
        {
            text: 'Avid learner',
            icon: 'fas fa-brain'
        }
    ];

    const hobbies = [
        {
            text: 'Music Production',
            icon: 'fas fa-music'
        },
        {
            text: 'Traveling',
            icon: 'fas fa-plane'
        },
        {
            text: 'Photography',
            icon: 'fas fa-camera'
        },
        {
            text: 'Fitness',
            icon: 'fas fa-dumbbell'
        },
        {
            text: 'Mindfulness and Meditation',
            icon: 'fas fa-spa'
        }
    ];

</script>

<Section id="about" title="About me">

    <div class="content">
        <div class="profile">
            <div>
                {#each labels as { icon, text }}
                    <div class="label">
                        <Icon {icon} />

                        {text}
                    </div>
                {/each}
            </div>

            <div class="hobbies-wrapper">

                I also love:

                <div class="hobbies">
                    {#each hobbies as { text, icon }}
                        <Icon {icon} alt={text} />
                    {/each}                  
                </div>
            </div>
        </div>

        <p class="description">
            I have over seven years of professional experience as a software developer, having worked across the entire tech stack. For the last couple of years I have been using Svelte, React Native, and Angular; however, I have previously worked with Firebase, Express.js, ASP.NET, 
            
            and <a href="#skills">various other technologies</a>.

            <br /> <br />

            I am also a member of 
            
            <a href="https://www.toptal.com/top-3-percent">the Toptal network</a>, where only 3% of the applicants get accepted. In addition, I feel confident working in a fully remote environment as I have been doing so since August 2017.
        </p>
    </div>

</Section>

<style>
    .content {
        display: flex;
        
    }

    .profile {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .label {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
    }

    .label :global(.icon) {
        margin-right: 0.25rem;
        width: 1.5rem;
    }

    .label :global(i) {
        color: var(--secondary-text-color);
    }

    .hobbies-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 1rem;
    }

    .hobbies {
        display: flex;
        margin-top: 0.5rem;
    }

    .hobbies :global(.icon) {
        margin-right: 0.5rem;
    }

    .hobbies :global(i) {
        font-size: 1.125rem;
        color: var(--secondary-text-color);
    }

    .description {
        color: var(--faded-text-color);
        text-align: left;
        flex: 2;
        margin: 0;
    }
</style>
