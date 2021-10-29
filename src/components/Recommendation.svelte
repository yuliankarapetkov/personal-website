<script>
    import Icon from "./Icon.svelte";
    import { visible } from '../actions';

    export let recommendation;

    let isVisible = false;

    const { author } = recommendation;

    const onBecomeVisible = () => isVisible = true;

</script>

<div
    class="recommendation"
    class:slide-up={isVisible}
    use:visible={{ onBecomeVisible }}
>
    <blockquote>
        <Icon icon="fas fa-quote-right" />

        "{recommendation.text}"
    </blockquote>

    <div class="author">
        <img src={author.photoUrl} alt={author.name} />
        
        <div class="details">
            <div class="name">
                {author.name}
            </div>
    
            <div class="role">
                {author.role}, {author.company}
            </div>

            <div class="contacts">
                <a href={author.linkedIn} target="_blank">
                    <Icon icon="fab fa-linkedin" height="1.125rem" />
                </a>
    
                <a href={`mailto:${author.email}`}>
                    <Icon icon="fas fa-envelope" height="1.125rem" />
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    .recommendation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 3rem;
        background: white;
        padding: 2.5rem;
        border-radius: calc(2 * var(--border-radius));
        box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 5%);
        max-width: 500px;
    }

    .author {
        display: flex;
        margin-right: 2rem;
    }

    .name {
        font-size: 1.125rem;
        color: var(--main-text-color);
        font-weight: 500;
    }

    .role {
        font-size: 0.875rem;
        font-weight: 400;
        text-transform: uppercase;
        color: #888;
        margin: 0.25rem;
    }

    img {
        height: 6rem;
        border-radius: 50%;
        margin-right: 1.5rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .contacts {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contacts a :global(.icon) {
        margin-right: 0.25rem;
    }

    .contacts a :global(i) {
        color: var(--secondary-text-color);
    }

    .contacts a:hover :global(i) {
        color: var(--accent-color);
        transition: all .3s ease 0s;
        transform: scale(1.05);
    }

    blockquote {
        margin: 0 0 2.5rem;
        color: var(--secondary-text-color);
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: left;
    }

    blockquote :global(.icon) {
        text-align: left;
        margin-bottom: 0.5rem;
    }

    blockquote :global(i) {
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 768px) {
        .recommendation {
            flex-direction: column;
            margin-bottom: 1rem;
            padding: 1rem;
        }

        .author {
            margin: 0;
            align-items: center;
        }

        .name {
            font-size: 1rem;
        }

        .role {
            font-size: 0.75rem;
        }

        blockquote {
            font-size: 0.875rem;
            margin: 0.5rem 0 0;
        }
    }
</style>
