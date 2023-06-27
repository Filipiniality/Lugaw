# Site Updates

Previously, I listed all changes in a matter-of-fact, no commentary summary. I've been introduced to the concept of "working in public", so now I'll be including notes and whatnot. Hopefully this can be useful to people other than me!

---

## June, 2023

I'm having a lot of fun making Honeycomb stamps add uploading them to my [graphics collection](../silly-stuff/). I realized that with a 1x1 transparent PNG, you can make the stamps form different shapes! The one on my page looks like a heart because of that.

## May, 2023

I figured out how to put everything on github! [You can look at the source code over here](https://github.com/Filipiniality/lugaw). On top of the standard deploy-to-neocities action, I used [11ty-dependency-tree](https://github.com/11ty/eleventy-dependency-tree). Also, [here's the step-by-step process](https://github.com/M1ssM0ss/deploy-to-neocities-template), if you were as lost as me.

## April, 2023

I'm trying to make my website more accessible, starting with the images. I had to go through all my pages, anyway, because I switched to Eleventy. So, I took the time to add alt text to *most* pictures, but I've certainly missed some.

<br>

To lessen eyestrain (becuase let's be honest, I have a big problem with gifs) I've started implementing [Freezeframe.js](https://github.com/ctrl-freaks/freezeframe.js/tree/master/packages/freezeframe), with some adjustments.

    $(function() {
    const e = new Freezeframe({
            trigger: 'click', /* disables animated on hover. */
            responsive: false, /* preserves image resolution */
            });
        $("#play-gif").on("click", function(){e.start()});
        $("#stop-gif").on("click", function(){e.stop()});
        });
Above constructor modified from [Bechnokid](https://bechnokid.neocities.org/resources/tut_freezeframe).

<br>

By default, Freezeframe allows you to hover over GIFs to play them. I disabled it as a personal preference - to me, the split-second of animation when your mouse passes over an image is jarring.

<br>

Another quirk of Freezeframe is that the images will auto-scale to fit their container. Setting **responsive** to **false** gets rid of that.

<br>

Finally, I noticed that Freezeframe inherently adds **vertical-align: top** as inline CSS to each image. I'm getting around this by setting it to **initial**.

---

## The Olden Days (before Eleventy)
### 2022
* **9/9** - Pok&eacute;log added.
* **7/4** - Pokemon shrine is rehauled and made responsive.
* **5/3** - Longform blog added.
* **4/10** - Created my own 88x31 button and added it to my link directory.
* **4/9** - Evil Listicle added.
* **1/10** - 2022 Microblog added.
* **1/3** - Shrine for the manga "I Want to Hold Aono-kun So Badly I could Die" added.

### 2021
* **8/31** - 2021 Reading List added.
* **7/29** - Yume Nikki shrine added.
* **7/11** - Page dedicated to my dog is added.
* **6/19** - Pokemon shrine added.
* **6/7** - Sitemap, Credits, and About pages added
* **6/9** - Website is created.