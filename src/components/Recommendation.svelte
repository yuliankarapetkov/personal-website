<script>
    export let recommendation;

    const { author } = recommendation;

</script>

<div class="recommendation">
        <img src={author.photoUrl} alt={author.name} />

    <div class="content">
        <div class="name">
            {author.name}
        </div>

        <div class="role">
            {author.role}, {author.company}
        </div>

        <div class="contact">

        </div>

        <blockquote>
            {recommendation.text}
        </blockquote>
    </div>
</div>

<style>
    .recommendation {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: var(--border-radius);
        box-shadow: 0px 24px 36px -11px rgb(0 0 0 / 9%);
    }

    img {
        height: 10rem;
        border-radius: 50%;
        margin-right: 3rem;
    }

    .content {
        text-align: left;
    }

    .name {
        font-size: 1.25rem;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--secondary-text-color);
        margin-bottom: 0.25rem;
    }

    .role {
        font-size: 0.875rem;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--accent-color);
    }

    blockquote {
        margin: 1rem 0 1rem;
    }

</style>
