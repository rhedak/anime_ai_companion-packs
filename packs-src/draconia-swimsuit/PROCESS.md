# How the Draconia Malfoid (swimsuit) pack was made

**Draconia Malfoid is an unofficial, non-commercial fan character** loosely inspired by Draco Malfoy from the
*Harry Potter* series, and not affiliated with Warner Bros., Wizarding World Digital or J.K. Rowling. Unlike the
`risa-dress` and Franzi packs, **these pictures are not under the MIT licence**: see `NOTICE.md` for the terms
(non-commercial only, taken down on request by any rights holder).

This is the same character as `draconia-uniform`, `draconia-vest` and `draconia-gown`, here in a swimsuit, with a
swimming activity.

## The process

1. **Design and base picture.** The repository's owner designed Draconia (long platinum-blonde hair with a side braid,
   teal-green eyes, an earring). The base picture was made with xAI's Grok Imagine from the `draconia-gown` neutral
   picture (on a plain white background) by asking for an elegant dark emerald-green one-piece swimsuit with thin silver
   trim and a delicate silver necklace, then a second edit that removed the necklace. The first result showed her
   proportions slimmer than in the gown pictures, and a refinement with a fuller figure was tried and not used: the
   owner chose the slimmer one. Grok Imagine returns 1312 × 1504 pictures framed from the head to the upper thighs.
2. **Emotions and poses.** Each of the six other emotions (`happy`, `sad`, `angry`, `surprised`, `shy`, `thinking`) was
   made by editing that same base picture in Grok Imagine, one change at a time (the expression only, with the same
   outfit, framing, background and art style). Every edit started again from the base, never from an earlier result.
   In `thinking` a first, face-only picture was too close to `neutral`, so a second attempt asked for a clearer
   pondering look, and it came back with her right hand raised to her chin; the owner chose that one, so in `thinking`
   her arm and her stance differ slightly from the other emotions. The four poses (`wave-1`, `wave-2`, `cheer-1`,
   `cheer-2`) were edited from the `happy` picture, so they keep its face (`cheer-1` and `cheer-2` have an open
   cheering mouth): the wave with her right hand (the left side of the picture) and an open palm beside her head, the
   cheers with both fists at the shoulders and then both arms thrown up. In `cheer-2` the tool drew her a little
   smaller, so her raised hands stay inside the picture.
3. **Transparent background.** Every picture went through Grok Imagine's own *Remove Background* (a full-size RGBA PNG).
   Her platinum hair is close to the white background, so a colour key would have eaten it; the tool's cutout kept the
   fine hair strands, the dark outline and the gaps between arm and body, with no white fringe (checked on black,
   pink and white backdrops). Its one fault is that it leaves dark cloth partly transparent, so a script filled the
   deep interior of the figure (nothing transparent within 6 pixels) back to fully opaque.
4. **Blinks.** The blink (`<emotion>-blink`) for all seven emotions was not made with an image tool. A script finds
   each iris (its teal colour), takes the connected eye (iris, white, lashes, and the grey pixels of their soft edges)
   inside an ellipse around it, never touching blonde hair or the brows (the mask stops above the lashes' top), paints
   it over with a vertical blend from the skin just above to the skin just below (so the blush in `shy` and `happy`
   carries on), and draws one gently downward-curved closed lid in her lash colour with three short lashes at the outer
   end. `surprised` needed a wider mask. Where her bangs cross her left eye the blink leaves a faint smudge.
5. **Mouths.** The three mouth openings (`<emotion>-talk1` to `-talk3`) were made by script as well: the open mouth
   of the `cheer-1` picture (dark outline, white upper teeth, red inside, coral tongue) was cut out by colour, and for each
   emotion the closed mouth (found as whatever is darker than the skin around it, so a faint smile line goes too) is
   painted over with the surrounding skin and the open mouth is pasted in at 18 × 10, 24 × 15 and 30 × 21 pixels,
   turned to the tilt of that picture's head and opening downward from the old mouth line. Every other pixel is the
   emotion's own.
6. **Packaging.** All pictures were scaled to 940 × 1070 (the size of the other packs) with premultiplied alpha and
   saved as lossless WebP, with the same file names as those packs.

## Swimming activity frames

The pack has two 4-frame loops, `activity-swimming-1` to `-4` (silent) and `activity-swimming-talk-1` to `-4` (talking,
the same poses with her mouth open), 940 × 1070 lossless WebP, meant to play at about 3 frames a second.

1. **Pictures.** Four edits of the base picture in Grok Imagine put her waist-deep in calm water, in a soft rounded
   pool that fades into the white background, with ripples around her: arms held a little out (the key picture), a
   forearm stroke across her body, both hands skimming the water with a small splash, and arms back beside her hips.
   Her face is the base's own (her calm neutral expression) in all four.
2. **Transparent background with water.** *Remove Background* treats the pool as background, so the water was taken from
   the original picture instead: white was converted to transparency, which keeps the pool translucent and fading, and
   it was laid under the figure from the tool's cutout. Dry skin and the dark suit stay opaque, while pale, bluish-white
   pixels near the waterline (the tool's leftover band where she meets the water, and in frame 2 her submerged body kept as
   a pale column) go to the water layer; the water near the hips of frame 2 was softened. The waterline is where each arm and
   hip enters the water.
3. **Talking loop.** The talking frames are the four silent frames with an open mouth cut in (the same mouth method as in
   step 5 above), 24 × 15, 30 × 21, 24 × 15 and 18 × 10 pixels (frames 1 to 4), with every other pixel the same as in
   the silent frame. The app can play this loop while she speaks.

## Licence

Not MIT. This pack is excluded from the repository's MIT licence and may not be used commercially; see `NOTICE.md`.
