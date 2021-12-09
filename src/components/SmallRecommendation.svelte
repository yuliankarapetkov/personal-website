<script lang="ts">
    import type { Recommendation } from '../models';

    export let recommendation: Recommendation;

</script>

<div class="recommendation">
    <img src={recommendation.author.photoUrl} alt={recommendation.author.name} />

    <p>
        <span class="author">
            {recommendation.author.name}, {recommendation.author.role}:
        </span>

        {recommendation.text}
    </p>
</div>

<style>
    .recommendation {
        display: flex;
        margin: 1rem 0;
        padding: 1rem;
        background: var(--main-background-color);
        border-radius: var(--border-radius);
        cursor: pointer;

        box-shadow: 0px 0 8px 0px rgb(0 0 0 / 8%);
    }

    .recommendation:hover {
        transform: translateY(-4px);
        transition: all .5s;
        box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 8%);
    }

    .recommendation img {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
        margin-right: 1rem;
    }

    .recommendation p {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 0;
        line-height: 1.375;
        font-size: 0.875rem;
    }

    .recommendation span {
        font-weight: bold;
    }
</style>
