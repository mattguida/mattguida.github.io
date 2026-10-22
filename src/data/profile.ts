import { FaGoogleScholar, FaRegIdBadge, FaGithub } from "react-icons/fa6";

export const profile = {
  name: `Matteo Guida`,
  headline: `PhD Candidate @ University of Melbourne`,
  email: `matteo.guidaa@gmail.com`,
  location: `Melbourne, Australia`,
  profileImage: `/images/second_profile.png`,
  links: [
    {
      name: `Google Scholar`,
      url: `https://scholar.google.com/citations?user=Z4WLFFIAAAAJ&hl=en&oi=ao`,
      icon: FaGoogleScholar
    },
    {
      name: `Résumé`,
      url: `/pdf/MatteoGuida_Resume_I.pdf`,
      icon: FaRegIdBadge
    },
    {
      name: `Github`,
      url: `https://github.com/mattguida`,
      icon: FaGithub
    }
  ],
  biography: `<figure style="float: right; max-width: 220px; margin-left: 1.5em; margin-bottom: 1em;">
  <img src="/images/platos-cave-social-media.jpg" alt="A modern take on Plato's Cave: figures absorbed in glowing screens" style="border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.15); width: 100%;">
  <figcaption style="font-size: 0.7em; text-align: center; opacity: 0.65; margin-top: 0.5em;">Art by <a href="https://parablevisions.com" target="_blank" rel="noopener noreferrer">Cameron Gray</a>, via <a href="https://philosophynow.org/issues/165/Platos_Cave_and_Social_Media" target="_blank" rel="noopener noreferrer">Philosophy Now</a></figcaption>
</figure>
<blockquote>How do humans navigate information in online spaces? What kind of content do we engage with most, and why do we react differently to apparently identical stimuli?</blockquote>
My research uses computational methods drawing from <em>natural language processing</em> and statistical methods to understand human behaviour through vast collections of online data — looking at how framing, moral values, and argumentation shape the way we read the news, respond to it, and reshape each other's views in the comments.
<div class="my-2"></div>
I'm a Ph.D. candidate at the University of Melbourne's School of Computing and Information Systems, supervised by <a href="https://www.frermann.de/" target="_blank" rel="noopener noreferrer">Prof. Lea Frermann</a>, <a href="https://findanexpert.unimelb.edu.au/profile/887453-eduard-hovy" target="_blank" rel="noopener noreferrer">Prof. Ed Hovy</a>, and <a href="https://scholar.google.com/citations?user=yzaozUUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Yulia Otmakhova</a>. Before this, I completed a Masters in Speech and Language Processing at the University of Konstanz.
<div class="my-2"></div>
I'm currently looking for opportunities to apply my experience in natural language processing, machine learning, and large-scale data analysis — ideally in media intelligence, media analytics, audience insights, or a related field. Feel free to <a href="mailto:matteo.guidaa@gmail.com" target="_blank" rel="noopener noreferrer">reach out</a> to connect.`
};