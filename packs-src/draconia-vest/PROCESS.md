# How the Draconia Malfoid (vest) pack was made

**Draconia Malfoid is an unofficial, non-commercial fan character** loosely inspired by Draco Malfoy from the
*Harry Potter* series, and not affiliated with Warner Bros., Wizarding World Digital or J.K. Rowling. Unlike the
`risa-dress` and Franzi packs, **these pictures are not under the MIT licence**: see `NOTICE.md` for the terms
(non-commercial only, taken down on request by any rights holder).

This is the same character as `draconia-uniform`, without the robe.

## The process

1. **Design and base picture.** The repository's owner designed Draconia (long platinum-blonde hair with a side
   braid, teal-green eyes, an earring; here a white long-sleeved shirt, a green-and-silver striped tie, a flat grey
   vest and a grey pleated skirt, with no robe). The neutral base picture of this pack is the Grok Imagine
   post `3da5bf18-ec9c-45c0-96b8-0248f86eedca`. It was made from the `draconia-uniform` base picture
   (`b719bfd8-ac59-4368-81b1-c71c765a9e4a`) in two edits with xAI's Grok Imagine: first removing the robe
   (post `f2397ca2-2616-4ffc-93c6-6d2e68d4ae8b`), then removing the robe's clasp (`3da5bf18`). It is framed from
   the head to just below the skirt. The pictures came out at 1152 × 1728 on a flat hot-pink background, a deeper
   pink than in the uniform pack (about RGB 188, 4, 74; the neutral picture about 194, 3, 82). Nothing on her is
   pink.
2. **Emotions and poses.** Each of the six other emotions (`happy`, `sad`, `angry`, `surprised`, `shy`,
   `thinking`) and the four poses (`wave-1`, `wave-2`, `cheer-1`, `cheer-2`) was made by editing that same base
   picture in Grok Imagine, one change at a time (the expression or the pose only, with the same outfit, framing,
   background and art style). All the edits start from the base picture. One picture was kept per edit. In
   `thinking` her head and body are slightly turned; it was kept as it came. Her head was measured on every picture
   (the distance between her irises and the top of her head). In ten of the eleven it is the same size and in the
   same place within about 1–2 %. In `cheer-2` the edit had zoomed out a little (head about 5 % smaller and about
   35 px lower), so that picture alone was scaled up by 1.05 around her face and moved so that her eyes, face and
   chin lie on the neutral picture's. Her raised fists still fit inside the picture after this, so nothing was
   cropped. All pictures were then scaled the same way.
3. **Blinks and mouths.** The blink (`<emotion>-blink`) and three mouth openings (`<emotion>-talk1` to `-talk3`)
   for all seven emotions were not made with an image tool. A script drew closed eyes or an open mouth over the
   face of each emotion picture and left every other pixel identical. The eye and mouth positions were measured
   again on each emotion picture. For the blinks, the script finds each open eye with a tight mask: the white and
   teal iris, the lash mass connected to them, its thin lash tips and any lid crease just above. It never takes hair
   (found by its blonde colour), the dark outlines of hair strands, the long face outline by the ear, or the brows.
   It repaints only that mask in flat skin colour taken from the clean skin around the eye, mostly below and beside
   it, so the blush in `shy` and `happy` carries on, and bridges strand outlines that used to pass under the lashes.
   Over the image-left eye her bangs hang in front of the lashes, and there the lash hides where each strand
   ends. For that eye the script repaints the whole lash band below a smooth curve fitted to the top of the
   lashes. Each bang strand that ran into the lashes was then measured by hand at a clean cross-section just
   above them: its two edges, their slant and where its tip should be. The script continued each strand from
   that cross-section, keeping its own colours and outline widths, and narrowed it to a clean pointed tip. It
   redrew the long side-lock outline left of that eye as one continuous line through the repainted band, filled
   the hair beyond it, and cleaned up small leftover lash wisps and line stubs. In `angry` the brow under the
   bangs is protected and keeps its full stroke. On the image-right eye, where her lash wing touched the face
   outline by the ear, the script redrew the inner edge of the outline along a smooth fitted curve with the
   outline's own soft edge. In `angry`, where the image-right brow had merged with the lashes, its new lower edge was also
   smoothed. The script then draws one gently downward-curved closed lid across
   the lower-middle of the old eye. The lid is in her own lash colour, about as thick as her upper lash line, with
   three short lashes and a small wing at the outer end. It ends inside the eye's own corners and is clipped to her
   face skin, so it never crosses the face or hair outline. The mouths are drawn in the colours of her own open mouth in
   the `cheer` pictures (dark outline, white upper teeth, dark-red inside, coral tongue). The `cheer` pictures already have an open mouth
   and, as in the other packs, have no blink or mouth pictures of their own. These pictures are simpler than
   hand-finished ones.
4. **Transparent background.** A script removed the pink background by chroma key. The key colour was sampled
   separately on each picture (from its border), because the pink differs a little between pictures. Her white
   shirt and grey vest and skirt are far from that colour and are never touched. Pixels close to the background
   colour anywhere in the picture (including the pink seen between her arms and body, between her fingers, between
   her legs and around her hair) became transparent. For the edge pixels the script estimated how much pink was
   mixed in against the nearby colour of her, removed that pink ("despill"), and kept a soft edge, so her blonde
   hair has no pink fringe. Her own pinkish colours (the blush in `shy`, her lips) are far from the background
   colour and kept. Blinks and mouths reuse their emotion picture's mask.
5. **Packaging.** All pictures were scaled by height to 713 × 1070 (her whole figure, nothing cropped), padded at
   the sides with transparency to 940 × 1070 (the size of `risa-dress` and the Franzi packs) and saved as lossless
   WebP, with the same file names as those packs: 39 pictures, plus `NOTICE.md`, `credit.txt`, `look.txt` and this
   file.

## The cooking activity (66 pictures: a fried-rice loop and its talking set)

Replaces the earlier four-picture sample loop. Made on 25 October 2026 on Grok Imagine in the owner's signed-in Chrome, with the owner's Grok allowance (nothing was paid per picture). The same method as the `risa-bikini` loop (see its `PROCESS.md`), for a prop activity. She cooks fried rice in a wok instead of the pancake of the earlier sample.

1. **Key picture.** The pack's `neutral` picture was put on flat magenta and edited on Grok Imagine into a picture of her holding a black wok in her right hand, stretched forward and a little down, pointing away from her toward the viewer, with fried rice in it (golden rice with egg, carrot and peas),
   and a wooden spatula low in her other hand. A first try with a frying pan and a pancake was not used: the owner asked for fried rice instead. The owner approved the key picture before the video was made. Her hair came out a little darker than in `neutral`.
2. **Video.** One video (720p, 6 seconds, 896 x 1024, 24 a second): she tosses the rice up out of the wok and catches it, twice, with a long rest in between. The tosses are about 96 frames apart; the pair of frames 97 apart that differ least (frames 40 and 137 of the 145;
   a difference of 0.5 of a 12-a-second step) closes the loop. To keep the pack under the 120-file limit with a talking set, every third frame of that stretch was taken (33 pictures at 12 a second), so the loop plays one and a half times faster than the video.
3. **Cutting out.** Each frame was cut out of the magenta with the studio's matting (key magenta, with the cleaning of pink leftovers), scaled to 940 x 1070 and saved as lossy WebP (quality 90, lossless transparency).
4. **Position.** One common shift (4 pixels left, 2 down) puts her head where it is in `neutral`; her own movement is kept.
5. **Talking set.** `activity-cooking-talk-N`: her closed mouth erased and an open mouth from her `cheer-1` pasted in, three sizes in the order 2, 2, 3, 3, 2, 2, 1, 1, 3, 3, 2, 2 and so on. In two pictures (25 and 26) flying rice covers her mouth, so the talking picture is the silent one.

### Faults that are left

- Looked at as contact sheets, every talking face at small size and the loop as a GIF, not every picture at full size. The loop starts and ends at rest with the wok held out; the toss happens once per loop and is faster than in the video.
- Her hair is a little darker than in her other pictures, and her head and the wok move a little. The pictures are soft, as the video is only 896 x 1024.
- The earlier four-picture loop is kept in the owner's `ref/` folder.

## Licence

Not MIT. This pack is excluded from the repository's MIT licence and may not be used commercially; see `NOTICE.md`.
