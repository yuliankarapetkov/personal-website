<script lang="ts">
    import Recommendation from '../Recommendation.svelte';
    import Section from '../Section.svelte';

    const recommendations: any[] = [
        {
            author: {
                name: 'Jackson Holiday Wheeler',
                role: 'CTO',
                company: 'PlayPilot',
                photoUrl: '/images/recommendations/jackson.jpg',
                linkedIn: 'https://www.linkedin.com/in/jackson-holiday-wheeler/',
                email: 'jackson@playpilot.com'
            },
            text: `Yulian is an excellent developer. His positive attitude and solution-oriented way of approaching the world has made working with him for the past 2 years one of the best professional experiences I’ve had in my career. He excels at solving problems quickly and creating robust solutions that stand the test of time. Moreover, he has superb communication skills: he expresses himself clearly and succinctly, and he is particularly skilled at clarifying complex specifications. I wholeheartedly recommend him!`
        },
        {
            author: {
                name: 'David Mühle',
                role: 'CEO',
                company: 'PlayPilot',
                photoUrl: '/images/recommendations/david.jpg',
                linkedIn: 'https://www.linkedin.com/in/davidmuhle/',
                email: 'david@playpilot.com'
            },
            text: `Yulian is a very gifted guy who is extremely good at programming. He has lots of integrity and I would dare to say he is a frontend genius. On top of that, he's a team player and he is customer-focused. Yulian is a professional, helpful, and very positive person. He has been an essential part of the PlayPilot success and he will always be welcome back. It is a true pleasure and honor to recommend Yulian to anyone who wants to hire him.`
        },
        {
            author: {
                name: 'Michael Horton',
                role: 'CEO',
                company: 'Slate',
                photoUrl: '/images/recommendations/michael.jpg',
                linkedIn: 'https://www.linkedin.com/in/mshorto/',
                email: 'michael@slatehq.com',
            },
            text: `Yulian is a skilled developer as well as a great communicator. We hired Yulian to lead the front-end development of the initial version of our web product and he did an amazing job. He was knowledgeable, skilled and detail oriented. He got the job done in a very reasonable timetable and was a pleasure to work with the entire time.`
        },
        {
            author: {
                name: 'Lucas Introne',
                role: 'CTO',
                company: 'Pikkop',
                photoUrl: '/images/recommendations/lucas.jpg',
                linkedIn: 'https://www.linkedin.com/in/lintrone/',
                email: 'lucas@entronic.com'
            },
            text: `Yulian won me over with his great attitude and communication, and backed it up with solid skills. He is intelligent, proactive, pays attention to detail, and delivers high quality work. A great human being, a great coder, and a great communicator, Yulian possesses a wide range of skills and is always open and looking to improve. Certainly a top talent, I can't wait to hire him again.`
        },
        {
            author: {
                name: 'Loic Le Pichoux',
                role: 'CEO',
                company: 'KLEAR',
                photoUrl: '/images/recommendations/loic.jpg',
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

<Section id="recommendations" title="Recommendations" style="accent">
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
