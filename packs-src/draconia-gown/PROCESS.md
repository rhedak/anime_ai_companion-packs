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

## Dancing activity frames

The pack also has two 4-frame loops of her dancing, `activity-dancing-1` to `-4` (silent) and `activity-dancing-talk-1`
to `-4` (talking, with the same poses), 940 × 1070 lossless WebP like the other frames, meant to play at about 3 frames a second.

1. **Pictures.** The key picture was made by editing the pack's gown base picture in Grok Imagine: Draconia dancing in
   her gown, her left arm raised and the skirt swinging to one side, on the same hot-pink background at 1152 × 1728. Two
   pose variants were edited from it the same way: centred with both arms out at shoulder height, and swaying to the other
   side with the other arm raised. The loop order is key, centred, sway, centred; frames 2 and 4 are the same picture. No
   picture was mirrored, so her side braid stays on its side in every frame.
2. **Scale and position.** The tool drew her zoomed out, so one common scale and shift, the same for all frames, makes her
   bigger and puts her head where it is in `neutral`: the point between her eyes in the key picture lands on `neutral`'s.
   Matching her head size fully (scale 1.76) would have cut off her outstretched hands at the sides, so the scale is 1.57,
   and her head is about 11 % smaller than in the pack's other pictures. Her hands stay inside the frame in every
   picture (the closest, a fingertip in the centred pose, is 8 px from the edge). Then the same packaging as the rest of
   the pack (step 5): scaled to 1070 px high and padded at the sides to 940 × 1070. The lower part of her skirt is cut
   off at the bottom, and in the sway picture the skirt also reaches the left edge.
3. **One face.** The face came out slightly different in each picture, which flickered in the loop. In the centred picture
   her head is in the same place as in the key picture (within 1.5 pixels), so the key picture's head (face, bangs, braid
   top and earring, inside a feathered oval) was pasted onto it. In the sway picture her head is turned and tilted and sits
   further to one side, so that picture keeps its own face.
4. **Transparent background.** The pink background was removed with the same chroma key as the rest of the pack (step 4),
   the key colour sampled on each picture. A scan of the soft edge pixels found no pink left on her blonde hair, her skin
   or the silver embroidery.
5. **Cleanup.** A scan cleared 34 to 55 stray specks away from her figure per picture and faint haze around her outline.
6. **Talking loop.** The talking frames are the four silent frames with an open mouth cut in. The mouths are the pack's own
   script-drawn `neutral-talk2`, `neutral-talk3`, `neutral-talk2` and `neutral-talk1` mouths (frames 1 to 4). They were made
   11 % smaller to match her smaller head, turned to the slight tilt of her head and moved onto her closed mouth (fitted
   separately on the sway picture's own face), with a feathered mask that covers the closed mouth fully and the skin tone
   matched; every other pixel is the same as in the silent frame. The app can play this loop while she speaks.

## Licence

Not MIT. This pack is excluded from the repository's MIT licence and may not be used commercially; see `NOTICE.md`.
