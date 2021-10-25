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
        /* max-width: 600px; */
        margin-bottom: 3rem;
        background: #f7f5f5;
        padding: 2rem;
        border-radius: 12px;
        
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
        /* padding: 0.5rem 1rem 0.5rem 3rem; */
        /* border-left: 1px solid var(--main-text-color); */
        /* font-style: italic; */
    }

</style>
