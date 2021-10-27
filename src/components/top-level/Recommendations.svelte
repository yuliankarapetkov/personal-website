<script lang="ts">
    import Recommendation from '../Recommendation.svelte';
    import Section from '../Section.svelte';

    const recommendations: any[] = [
        {
            author: {
                name: 'David Mühle',
                role: 'CEO',
                company: 'PlayPilot',
                photoUrl: '/images/recommendations/david.jpeg',
                linkedIn: 'https://www.linkedin.com/in/davidmuhle/',
                email: 'david@playpilot.com'
            },
            text: `Yulian is a very gifted guy who is extremely good at programming. Yulian has lots of integrity and I would dare to say he is a front end genius. On top of that he team player and he is customer focused. Yulian is a professional, helpful, and very positive person. Yulian has been an essential part of the PlayPilot success and he will always be welcome back. It is a true pleasure and honor to recommend Yulian to anyone who wants to hire him.`
        },
        {
            author: {
                name: 'Loic Le Pichoux',
                role: 'CEO',
                company: 'KLEAR',
                photoUrl: '/images/recommendations/loic.jpeg',
                linkedIn: 'https://www.linkedin.com/in/loiclepichoux/',
                email: 'loic@klearlending.com'
            },
            text: `Yuli has strongly contributed to the building from scratch of Klear, the first Bulgarian Peer-to-Peer lending platform.
                    Yuli is a smart person, very respectful of the projects which are assigned to him and at the same time always active to suggest improvements to achieve the best possible result.
                    He is a very serious person, curious and a great team player.
                    It was a pleasure to work with Yuli!`
        }
    ];

</script>

<Section id="recommendations" title="Recommendations">
    <div>
        {#each recommendations as recommendation}
            <Recommendation {recommendation} />
        {/each}
    </div>
</Section>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
