<script lang="ts">
    import Button from '../Button.svelte';
    import Section from '../Section.svelte';

    const CV_HREF = 'https://firebasestorage.googleapis.com/v0/b/yulian-karapetkov.appspot.com/o/Files%2FCV_Yulian_Karapetkov.pdf?alt=media&token=59466abe-27e1-4c49-88dc-40e6eaf2046d';

</script>

<Section id="about" title="About me" style="white">

    <div class="content">
        <p>
            I have over seven years of professional experience as a software developer, having worked across the entire tech stack. For the last couple of years I have been using Svelte, React Native, and Angular; however, I have previously worked with Firebase, Express.js, ASP.NET, 
            
            and <a href="#skills">various other technologies</a>.

            <br /> <br />

            I am also a member of <a href="https://www.toptal.com/top-3-percent">the Toptal network</a>, where only 3% of the applicants get accepted. In addition, I feel confident working in a fully remote environment as I have been doing so since August 2017.
        </p>

        <div class="details">
            <div class="label">
                <span>Name:</span> Yulian Karapetkov
            </div>

            <div class="label">
                <span>Email:</span> <a href="mailto:yulian.karapetkov@gmail.com">yulian.karapetkov at gmail.com</a>
            </div>

            <div class="label">
                <span>Location:</span> Sofia, Bulgaria
            </div>
        </div>
    
        <Button href={CV_HREF} target="_blank" variant="accent" icon="fas fa-cloud-download-alt">
            Download CV
        </Button>
    </div>

</Section>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    p {
        text-align: left;
        color: #666;
        margin-bottom: 2rem;
    }

    .details {
        margin-bottom: 2rem;
    }

    .label {
        display: flex;
        margin-bottom: 0.5rem;
    }

    .label a {
        color: var(--secondary-text-color);
    }

    .label span {
        font-weight: 500;
        margin-right: 7px;
        color: #333;
    }

    @media only screen and (max-width: 768px) {
        
    }
</style>
