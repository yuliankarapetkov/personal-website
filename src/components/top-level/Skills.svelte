<script lang="ts">
	import Section from '../Section.svelte';
	import Skill from '../Skill.svelte';

	const skills = [
		{
			name: 'Svelte/SvelteKit',
			percentage: 100,
			icon: 'svelte.svg'
		},
		{
			name: 'React/Next.js',
			percentage: 95,
			icon: 'fab fa-react'
		},
		{
			name: 'Angular',
			percentage: 90,
			icon: 'fab fa-angular'
		},
		{
			name: 'Ionic/Capacitor',
			percentage: 90,
			icon: 'ionic.svg'
		},
		{
			name: 'Node.js/Express.js',
			percentage: 85,
			icon: 'fab fa-node-js'
		},
		{
			name: 'Firebase',
			percentage: 90,
			icon: 'firebase.svg'
		},
		{
			name: 'GitHub Actions (CI/CD)',
			percentage: 85,
			icon: 'fab fa-github'
		},
		{
			name: 'Jest/Vitest (Unit Testing)',
			percentage: 85,
			icon: 'fa-solid fa-flask'
		},
		{
			name: 'JavaScript/TypeScript',
			percentage: 100,
			icon: 'fab fa-js-square'
		},
		{
			name: 'HTML/CSS',
			percentage: 100,
			icon: 'fab fa-html5'
		}
	];

	const description = `I have previously worked with the following technologies as well: <br /> React Native, NestJS, AngularJS, jQuery, C#,
        ASP.NET (Core, Web API, MVC, WCF,
        WebForms), MongoDB,
        Mongoose, Entity Framework, SQL
        (PL/SQL, T-SQL), ASP.`;
</script>

<Section id="skills" title="Skills" {description}>
	<div class="container">
		{#each skills as skill}
			<Skill {...skill} />
		{/each}
	</div>
</Section>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 4rem;
	}

	@media only screen and (max-width: 768px) {
		.container {
			grid-template-columns: 1fr;
		}
	}
</style>
