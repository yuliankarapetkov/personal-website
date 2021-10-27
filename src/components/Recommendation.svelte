<script>
import Icon from "./Icon.svelte";

    export let recommendation;

    const { author } = recommendation;

</script>

<div class="recommendation">
    <div class="profile">
        <img src={author.photoUrl} alt={author.name} />

        <div class="contacts">
            <a href={author.linkedIn} target="_blank">
                <Icon icon="fab fa-linkedin" height="1.125rem" />
            </a>

            <a href={`mailto:${author.email}`}>
                <Icon icon="fas fa-envelope" height="1.125rem" />
            </a>
        </div>
    </div>

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
        justify-content: center;
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: calc(2 * var(--border-radius));
        box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 5%);
        max-width: 680px;
    }

    .profile {
        display: flex;
        flex-direction: column;
        margin-right: 2rem;
    }

    img {
        height: 6rem;
        border-radius: 50%;
        margin-bottom: 0.5rem;
        box-shadow: 0px 0px 8px 2px rgb(0 0 0 / 5%);
    }

    .contacts {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contacts a :global(i) {
        color: var(--faded-text-color);
    }

    .contacts a:hover :global(i) {
        color: var(--accent-color);
        transition: all .3s ease 0s;
        transform: scale(1.05);
    }

    .content {
        text-align: left;
        margin-top: 1rem;
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
        color: var(--faded-text-color);
        font-size: 0.9375rem;
    }

</style>
