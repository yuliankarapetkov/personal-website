<script lang="ts">
    import Contact from '../components/top-level/Contact.svelte';
    import Experience from '../components/top-level/Experience.svelte';
    import Hero from '../components/top-level/Hero.svelte';
    import Nav from '../components/top-level/Nav.svelte';
    import Portfolio from '../components/top-level/Portfolio.svelte';
    import Profiles from '../components/top-level/Profiles.svelte';
    import Recommendations from '../components/top-level/Recommendations.svelte';
    import Resume from '../components/top-level/Resume.svelte';
    import Skills from '../components/top-level/Skills.svelte';

    const title = 'Yulian Karapetkov - Full-Stack Developer, Toptal member';

</script>

<svelte:head>

    <title>
        {title}
    </title>

    <meta name="title" content={title} />
    <meta name="description" content={title}>

</svelte:head>

<div>
    <Nav />

    <Hero />

    <Resume />

    <Skills />

    <Experience />

    <Portfolio />

    <Profiles />

    <Recommendations />

    <Contact />
</div>
