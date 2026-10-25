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

## The swimming activity (76 pictures: a splashing loop and its talking set)

Replaces the earlier four-picture sample loop. Made on 25 October 2026 on Grok Imagine in the owner's signed-in Chrome, with the owner's Grok allowance (nothing was paid per picture). The same method as the `risa-bikini` loop (see its `PROCESS.md`).

1. **Key picture.** The pack's `neutral` picture was put on flat magenta and edited on Grok Imagine into a picture of her standing waist-deep in calm light-blue water, in a soft rounded pool that fades out into the magenta, with ripples, her hands low and her mouth closed (one try).
2. **Video.** The first video (720p, 6 seconds) had her close her eyes in a smile for the whole time, so it was thrown away; the second asked for her eyes to stay open, and they did. It is two splash cycles of about 76 frames (24 a second): she scoops water in both hands,
   splashes it up and out in a wide arc and settles back. The pair of frames 76 apart that differ least (frames 69 and 145 of the 145; a difference of 0.5 of a 12-a-second step) closes the loop. Every second frame of that stretch is a picture: 38 pictures at 12 a second.
3. **Cutting out the water.** Each frame was cut out of the magenta with the studio's matting, and the water was un-mixed from the key (see the `make-activity-pack` skill, "Water on a key"), which keeps the pool's soft blue edge and the see-through droplets and ribbons. Scaled to 940 x 1070, lossy WebP (quality 90, lossless transparency).
4. **Position.** One common shift (5 pixels down) puts her head where it is in `neutral`; her own head movement in the loop is kept.
5. **Talking set.** `activity-swimming-talk-N`: her closed mouth erased and an open mouth from her `cheer-1` pasted in, three sizes in the order 2, 2, 3, 3, 2, 2, 1, 1, 3, 3, 2, 2 and so on, at the place the closed mouth had (moved with the head's own movement).

### Faults that are left

- Looked at as contact sheets, the faces at 3 times zoom for 12 pictures, and the loop as a GIF, not every picture.
- The splash arcs up and out and the water ribbons pass in front of her body, see-through; the loop starts in the middle of a splash. The pool's rim has a faint lavender in places where the video painted a violet glow.
- The pictures are heavy for a lossy loop because of the water; the pictures are soft, as the video is only 896 x 1024.
- The earlier four-picture loop is kept in the owner's `ref/` folder.

## Licence

Not MIT. This pack is excluded from the repository's MIT licence and may not be used commercially; see `NOTICE.md`.
