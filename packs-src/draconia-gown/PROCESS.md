# How the Draconia Malfoid (Yule Ball gown) pack was made

**Draconia Malfoid is an unofficial, non-commercial fan character** loosely inspired by Draco Malfoy from the
*Harry Potter* series, and not affiliated with Warner Bros., Wizarding World Digital or J.K. Rowling. Unlike the
`risa-dress` and Franzi packs, **these pictures are not under the MIT licence**: see `NOTICE.md` for the terms
(non-commercial only, taken down on request by any rights holder).

This is the same character as `draconia-uniform` and `draconia-vest`, here in a ball gown for the Yule Ball.

## The process

1. **Design and base picture.** The repository's owner designed Draconia (long platinum-blonde hair with a side
   braid, teal-green eyes, an earring; here an elegant emerald-green off-the-shoulder ball gown with silver
   embroidery and a silver necklace). The neutral base picture was made by editing the `draconia-uniform` base picture
   with xAI's Grok Imagine, changing the outfit to the gown. It is framed
   from the head down to the lower part of the skirt. The pictures came out at 1152 × 1728 on a flat hot-pink
   background (about RGB 193, 1, 84; the neutral picture about 203, 1, 95). Nothing on her is pink.
2. **Emotions and poses.** Each of the six other emotions (`happy`, `sad`, `angry`, `surprised`, `shy`,
   `thinking`) and the four poses (`wave-1`, `wave-2`, `cheer-1`, `cheer-2`) was made by editing that same base
   picture in Grok Imagine, one change at a time (the expression or the pose only, with the same outfit, framing,
   background and art style). All the edits start from the base picture. One picture was kept per edit. In
   `thinking` her head and body are turned about three-quarters; it was kept as it came. `wave-1` and `wave-2` are
   meant to be nearly identical. Her head was measured on every picture
   (the distance between her irises and the top of her head). In ten of the eleven it is the same size and in the
   same place within about 1–2 %. In `cheer-2` the edit had zoomed out a little (head about 8 % smaller and about
   75 px lower). That picture is used unscaled, as it came, so she looks a little smaller there. Scaling it up to
   match the others would have cut off her raised hands at the top edge; this way they stay fully in the picture. All pictures were then scaled the same way.
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
   lashes (the curve was set by hand where the lash band is slanted or the eye sits
   higher or lower, as in `sad`, `angry` and `thinking`). Each bang strand that ran into the lashes was then measured by hand at a clean cross-section just
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
   separately on each picture (from its border), because the pink differs a little between pictures. Her
   emerald-green gown, silver embroidery and necklace are far from that colour and are never touched. Pixels close to the background
   colour anywhere in the picture (including the pink seen between her arms and body, between her fingers
   and around her hair and skirt) became transparent. For the edge pixels the script estimated how much pink was
   mixed in against the nearby colour of her, removed that pink ("despill"), and kept a soft edge, so her blonde
   hair has no pink fringe. Her own pinkish colours (the blush in `shy`, her lips) are far from the background
   colour and kept. Blinks and mouths reuse their emotion picture's mask.
5. **Packaging.** All pictures were scaled by height to 713 × 1070 (her whole figure, nothing cropped), padded at
   the sides with transparency to 940 × 1070 (the size of `risa-dress` and the Franzi packs) and saved as lossless
   WebP, with the same file names as those packs: 39 pictures, plus `NOTICE.md`, `credit.txt`, `look.txt` and this
   file.

## Licence

Not MIT. This pack is excluded from the repository's MIT licence and may not be used commercially; see `NOTICE.md`.
