<script lang="ts">
    import type { Job as JobType } from '../../models';
    import Job from '../Job.svelte';
    import Section from '../Section.svelte';

    const jobs: JobType[] = [
        {
            company: 'Playpilot',
            location: 'Remote',
            duration: 'Feb 2020 - Present',
            role: 'Senior Frontend Developer',
            description: `
            
            Worked on developing features and maintaining the frontend of a streaming aggregator platform. 
            
            Used <strong>Svelte</strong> and <strong>Sapper</strong> for the web platform and <strong>React Native</strong> for the mobile apps.

            `,
            technologies: [
                'Svelte',
                'Sapper',
                'React Native',
                'Expo',
                'Firebase',
                'Firebase Cloud Functions',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS'
            ]
        },
        {
            company: 'Slate (Short-Term Project)',
            location: 'Remote',
            duration: 'Nov 2019 - Feb 2020',
            role: 'Senior Frontend Developer',
            description: `
            
            Developed from scratch an admin interface for managing resources like images, videos and fonts of an app that allows you to create on-brand social media content. 
            
            Used <strong>Angular (2+)</strong> and <strong>NgRx</strong>.

            `,
            technologies: [
                'Angular',
                'NgRx',
                'RxJS',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS'
            ]
        },
        {
            company: 'Pikkop',
            location: 'Remote',
            duration: 'Jul 2018 - Jul 2019',
            role: 'Senior Full-Stack Developer',
            description: `
            
            Built a shipping platform from scratch, most importantly the shipment creation flow and the virtual wallet of the user.

            Worked with various technologies, such as <strong>Angular (2+)</strong>, <strong>NgRx</strong>, <strong>Angular Material</strong>, <strong>Express.js</strong>, 
                
            <strong>Firebase Cloud Functions</strong> and <strong>Cloud Firestore</strong>.

            `,
            technologies: [
                'Angular',
                'NgRx',
                'RxJS',
                'Firebase',
                'Cloud Firestore',
                'Firebase Cloud Functions',
                'Express.js',
                'TypeScript',
                'JavaScript',
                'Angular Material',
                'HTML',
                'CSS'
            ]
        },
        {
            company: 'GameLeap',
            location: 'Remote',
            duration: 'Sep 2017 - Jan 2018',
            role: 'Senior Full-Stack Developer',
            description: `

            Built several new features of an existing gaming courses platform, using <strong>Angular (2+)</strong>, <strong>Redux</strong>, <strong>Express.js</strong> and <strong>MongoDB</strong>.

            `,
            technologies: [
                'Angular',
                'Redux',
                'Express.js',
                'MongoDB',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS'
            ]
        },
        {
            company: 'Klear Lending',
            location: 'Sofia, Bulgaria and Remote',
            duration: 'Sep 2015 - Sep 2017',
            role: 'Senior Full-Stack Developer',
            description: `
            
            Developed from scratch and later maintained various modules of a p2p lending platform, 
            
            working with technologies like <strong>ASP.NET MVC</strong>, <strong>Web API</strong>, <strong>Entity Framework</strong>, <strong>MS SQL Server</strong>, <strong>JavaScript</strong>, 
                
            <strong>jQuery</strong> and <strong>AngularJS (1.x)</strong>.

            `,
            technologies: [
                'AngularJS',
                'jQuery',
                'ASP.NET MVC',
                'ASP.NET Web API',
                'SQL',
                'MS SQL Server',
                'Entity Framework',
                'JavaScript',
                'HTML',
                'CSS'
            ]
        },
        {
            company: 'BankSoft',
            location: 'Plovdiv, Bulgaria',
            duration: 'Oct 2013 - Jul 2014',
            role: 'Full-Stack Developer',
            description: `
            
            Worked on several projects within the company, including an insurance application form. 
            
            Used a wide set of technologies such as <strong>ASP</strong>, <strong>ASP.NET WebForms</strong>, <strong>WCF</strong>, <strong>MVC</strong>, <strong>Web API</strong>, <strong>PL-SQL</strong>, <strong>JavaScript</strong> and <strong>jQuery</strong>.

            `,
            technologies: [
                'jQuery',
                'ASP.NET WebForms',
                'ASP',
                'WCF',
                'PL-SQL',
                'Oracle',
                'JavaScript',
                'HTML',
                'CSS'
            ]
        }
    ];

</script>

<Section id="experience" title="Experience">
        
    <div>

        {#each jobs as job}
            <Job {job} />
        {/each}        

    </div>

</Section>

<style>
    div :global(.job):last-child :global(.left) {
        border: none;
    }

</style>
