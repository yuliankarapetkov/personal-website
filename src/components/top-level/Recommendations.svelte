<script lang="ts">
    import Recommendation from '../Recommendation.svelte';
    import Section from '../Section.svelte';
    import { RECOMMENDATIONS } from '../../constants';

    const recommendations = Object.values(RECOMMENDATIONS);

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
