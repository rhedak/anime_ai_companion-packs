# How the Draconia Malfoid (uniform) pack was made

**Draconia Malfoid is an unofficial, non-commercial fan character** loosely inspired by Draco Malfoy from the
*Harry Potter* series, and not affiliated with Warner Bros., Wizarding World Digital or J.K. Rowling. Unlike the
`risa-dress` and Franzi packs, **these pictures are not under the MIT licence**: see `NOTICE.md` for the terms
(non-commercial only, taken down on request by any rights holder).

## The process

1. **Design and base picture.** The repository's owner designed Draconia (long platinum-blonde hair with a side
   braid, teal-green eyes, an earring, a black hooded robe with green lining over a white shirt, a green-and-silver
   striped tie, a grey vest and a grey pleated skirt) and made the neutral base picture with xAI's Grok Imagine. It is framed from the head to just below the skirt. The pictures came
   out at 1152 × 1728 on a flat hot-pink background (about RGB 213, 3, 107). Nothing on her is pink, and her robe
   is near-black, so the background was cut by its colour rather than by its darkness (step 4).
2. **Emotions and poses.** Each of the six other emotions (`happy`, `sad`, `angry`, `surprised`, `shy`,
   `thinking`) and the four poses (`wave-1`, `wave-2`, `cheer-1`, `cheer-2`) was made by editing that same base
   picture in Grok Imagine, one change at a time (the expression or the pose only, with the same outfit, framing,
   background and art style). One picture was kept per edit. In `thinking` her body is slightly
   turned; it was kept as it came. Her head was measured on every picture (the distance between her irises and the
   top of her head): it is the same size and in the same place in all eleven within about 1–2 %, so all pictures
   were scaled the same way and none needed re-aligning.
3. **Blinks and mouths.** The blink (`<emotion>-blink`) and three mouth openings (`<emotion>-talk1` to `-talk3`)
   for all seven emotions were not made with an image tool. A script drew closed eyes or an open mouth over the
   face of each emotion picture and left every other pixel identical. The eye and mouth positions were measured
   again on each emotion picture. For the blinks, the script finds each open eye with a tight mask: the white and
   teal iris, the lash mass connected to them, its thin lash tips and any lid crease just above. It never takes hair
   (found by its blonde colour), the dark outlines of hair strands, or the brows. It repaints only that mask in flat
   skin colour taken from the clean skin around the eye, mostly below and beside it, so the blush in `shy` and
   `happy` carries on, and bridges strand outlines that used to pass under the lashes. It then draws one gently
   downward-curved closed lid across the lower-middle of the old eye. The lid is in her own lash colour, about as
   thick as her upper lash line, with three short lashes and a small wing at the outer end. It ends inside the eye's
   own corners and is clipped to her face skin, so it never crosses the face or hair outline. The mouths are drawn in the colours of her own open mouth in
   `cheer-1` (dark outline, white upper teeth, dark-red inside, coral tongue). The `cheer` pictures already have an
   open mouth and, as in the other packs, have no blink or mouth pictures of their own. These pictures are simpler
   than hand-finished ones.
4. **Transparent background.** A script removed the pink background by chroma key, not by colour of darkness, so
   her near-black robe and outlines are never touched: pixels close to the background colour anywhere in the
   picture (including the pink seen between her arm and body, between her fingers and between her legs) became
   transparent; for the edge pixels the script estimated how much pink was mixed in against the nearby colour of
   her, removed that pink ("despill"), and kept a soft edge, so her blonde hair has no pink fringe. Her own pinkish
   colours (the blush in `shy`, her lips) are far from the background colour and kept. Blinks and mouths reuse
   their emotion picture's mask.
5. **Packaging.** All pictures were scaled by height to 713 × 1070 (her whole figure, nothing cropped), padded at
   the sides with transparency to 940 × 1070 (the size of `risa-dress` and the Franzi packs) and saved as lossless
   WebP, with the same file names as those packs: 39 pictures, plus `NOTICE.md`, `credit.txt`, `look.txt` and this
   file.

## Licence

Not MIT. This pack is excluded from the repository's MIT licence and may not be used commercially; see `NOTICE.md`.
