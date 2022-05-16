
### Specifications
The goal was to build a lightweight site that delivered a consistent experience across devices. Considering longform prose would be the primary content type, effective typography was a must, along with contextual navigation to help readers traverse lengthy columns. Additionally, there would be for visual examples, and I wanted to build in modest experience enhancements using browser-native animation tools.

Accordingly, the site was prototyped in the Sketch app and hand-coded in HTML5 and CSS3 (using flex and grid for brevity and clarity) with responsive breakpoints set via @media and animations handled via @keyframes. Some JS was used for the main menu toggle and the top-of-page button.

Eventually, jQuery was implemented for smooth scrolling and modal gallery effects (which were eventually removed), and to better suport older browsers, which is actually needed less and less as time goes on. Were I starting this project today, I'd definitely eschew jQuery.

Images (except photos) and icons were hand-drawn and inlined as .svg for superior performance and to leverage CSS animation. Many images where avoided altogether by using HTML entities such as ⇧ and ☰.

This project was developed in a highly iterative fashion, going back and forth from manuscript to prototype as the ideas developed. This messy process was entirely necessary because there was no way to know what it should look like until it was written, but at the same time, to know how to write it, I needed to know how it would eventually look.

The practical result of this is that it took a long, time time. The original scaffolds of the site date back several years, and it originally looked very different than it does now. I originally wanted to use git to keep track of every version of the site, but over time as I moved and renamed code repositories, some things eventually got lost.

All the commits to this project can be viewed on the Github repo page.

### Typography

The type is set in a combination of Gentium Book Basic at 400 and 700 weights, for body text and body headings, and Work Sans, at 400 and 900 weights, for navigation text and page titles. The body font size scales by screen size, but on desktop widths it's 24px tall with a line-height of 1.4 (so about 34px total), and paragraphs have a bottom margin of about 29px.

A variety of techniques were eventually included to help break up the lengthy text columns into more managable chunks. The manuscript originally included inter-page navigation (back and next Links on each page), as well as in-page navigation (to various sections and back to the top). I also used section headings and drop caps, and experimented with interstitial characters (but eventially removed them as they created needless visual clutter).

The body text has a color code of #D1D1D1 and the background, at its lightest point, has a value of #25274D which yields a contrast ratio of 12.07, which surpasses WCAG AAA compliance at the smallest sizes. Page headings and body subheadings also pass AAA compliance (4.63 and 5.09, respectively). It would have been easy enough to bump up the contrast significantly, but I was aiming for accessible colors and a muted visual tone. Many thanks to the reviewers who prevented too muted a tone :)

### Other Technologies

A variety of technologies were used in the creation of this project, and I've breifly touched on the major ones below.

#### Twitter Embeds
The decision to embed individual tweets was a tradeoff that came with significant costs, and which I still regret at times. I found myself wondering whether I should take them out up until the end of the project. Below are the primary issues:

Twitter Tracking: Embeded tweets contain tracking scripts that send data to Twitter, and as a result, they are subject to content blocking on devices. In other words, some user's will block the tweets from rendering by default. For this reason, I disabled Twitter's tracking on all pages, which should resolve the issue. However, if you can't view the embedded tweets, check your browser's or adblocker's security settings.

Custom Styles: By detault, tweet styles are quite limited and because of how they are implemented in browsers, a lot of the CSS can't be touched in the stylesheet and needs to accessed by javascript factory functions. I implimented the dark theme and restricted some sizing properties, but mostly left the tweets with their default styling because rewriting them all would require additional javascript on every page.

Benefits: The embedded tweets did probably save some time. Maybe. Rather than having to manually type in all the data, I could simply generate embed code and, with some optimizations, paste it in. I did spend a lot of time trying to style them, disable ad tracking, embed them properly, and so on, so I'm not really sure how much time it actually saved.
Tech Stack

Other than the use of jQuery for the nav menu and the modals, all the code was written by hand without any code generators or CSS frameworks. I do apply the mini-resent.css and the normalize.css stylesheets, both distributed under an MIT license, as a foundation for my code, but these merely reset and normalize regular values, respectively. All the design and layout elements are my own.

I used the Sketch app for prototyping and for authoring the scaled vector (.svg) images used in animations and as design elements.

I used the Atom text editor both for coding and for authoring the manuscript, although some manuscript authoring was eventually comleted using Mac's Pages app and Miscrosoft Word.

I used github and the github client to stage and commit all coding changes. Sometimes I used the github desktop client, but more often, I just used the command line. Sometimes I made notes in markdown, which converts easily to HTML, but mostly I made them in .txt files and converted them to HTML by hand.

### Icons and Graphics
Many hand-drawn images that appear here were based on open-source line drawings posted to the Noun Project, a wonderful resource. Typically, I'd find a few examples of what I wanted and then create my own graphics from those, but sometimes I incorporated elements of the original artwork and I've credited those below.

Other, more involved graphics such as those which appear were adapted from among the many examples presented in Arnheim's text. These images were entire recreated using .svg and Adobe Illustrator's iPad app, along with the Apple Pencil.

All .svgs were edited in both Sketch and Atom. Some are referenced in the file, but most are inlined directly into the html for superior performance and utility.
Credits

The following artists from the Noun Project authored images that inspired either directly or indirectly the work I adapted from them. While each of the icons I drew is my own, it owes a debt to these artists, so I'm acknowledging this here.

“Octopus” by Yuliya Po. The icon for the site uses Po's outer shape. The eye inside, as well as other aspects of implimentation, are my own.

“Bubbles” by Alex Vaughn. Vaughn's bubble collection served as a template for my own bubble drawings.

“Angler Fish” by Chanutis Industries served as inspiration for my own angler fish, at the far bottom right of many pages, although I embelleshed it so significantly it's perhaps no longer recognizable.

Other assorted fish and drawings are my own.

### CSS Reset

    v1.1.0 | https://github.com/sindresorhus/modern-normalize

