# How the Risa (casual) pack was made

**Risa is an original character.** She does not belong to any company or franchise, and no real person is shown.
Like the rest of this repository and the `risa-dress`, `risa-bikini` and `risa-uniform` packs, these pictures are under the **MIT licence**
(see `NOTICE.md` and the repository's `LICENSE`, including the caveat there about AI-made pictures).

This pack was made with a local image model rather than with Grok Imagine, apart from the reading loop. The model and the
measurements that led to it are in `docs/pack-image-models.md` of the anime_ai_companion repository, the procedure in its
`pack-image-models` skill, and the cut-out tool in `tools/pack-crop/`.

## The stills (39 pictures)

1. **Neutral.** The `risa-uniform` neutral picture was edited with FLUX.2 [klein] 4B (4 steps, guidance 1.0, on an Apple
   Silicon Mac) with the prompt to change her outfit to a light blue T-shirt tucked into a dark charcoal pleated skirt.
   Four seeds were made; the owner picked seed 1 by eye.
2. **Emotions, blinks, mouths.** Every other picture is an edit of that neutral picture (a blink of a non-neutral emotion is an
   edit of that emotion's picture, so only the eyes change). For these, only a box around her face was pasted back into the
   neutral picture, with a feathered edge, so everything outside the face is identical in all frames. Each picture was checked
   for changes at the edge of the box and outside it. The widest mouth of `neutral` needed a taller box; `thinking-talk3` was
   made from `thinking-talk2` (a mouth a little wider) with only the mouth area pasted back, after four batches of three seeds over four prompts
   in which a wide mouth either moved her finger into her lip or (when the whole face was pasted back) changed where her eyes look.
3. **Poses.** `wave-1`, `wave-2`, `cheer-1`, `cheer-2` and `thinking` (a hand on her chin) are whole-picture edits, because
   a raised arm or a hand at her face leaves the face box. The prompt names her other arm, because without that the model
   drops her lowered hand. `cheer-2` and `wave-2` were made again with another seed after a defect in a finger. The hands were
   looked at by eye at 2 to 3 times zoom; this is the part of the pack a person should look at again.
4. **Transparent background.** The pictures were made on flat white. A script (`tools/pack-crop/` in the anime_ai_companion
   repository) cut her out: a rough mask from the white background (including the white gaps between hair strands and
   between her arm and her skirt), then closed-form alpha matting around it, so edge pixels keep a soft alpha and have the
   white taken out. A faint-alpha floor removes the thin ghost strands the model draws beside her hair; it is not applied
   next to her shoulders, arms or skirt, whose edges keep their soft outline. The blink and talk pictures of a pose share the
   alpha of the pose's main picture, so her outline is the same in every frame. The pictures are 896 x 1024 as made and
   were scaled to 940 x 1070 (the size of the other Risa packs) and saved as lossless WebP.

## The reading activity (73 pictures)

1. **Key picture.** A picture of her sitting on a wooden chair with an open book was made with FLUX.2 from the neutral
   picture, then her eyes were opened and her mouth closed with two further edits, and the white background was changed to
   flat magenta (#ff00ff, a colour nothing of her has) so that it could be removed cleanly.
2. **Loop.** The key picture was animated in xAI's Grok Imagine (video, loop mode: the last frame leads back to the first),
   6 seconds, and the owner chose the result. The video is 464 x 688 and was enlarged about 1.5 times, so these pictures are
   softer than the stills.
3. **Frames.** ffmpeg took 12 pictures a second (73 frames, the last leads back to the first). Each frame was placed on a
   magenta canvas, the magenta was removed with the same matting as for the stills (magenta regions are background even where
   they are enclosed, such as between the chair slats), and the frames were scaled to 940 x 1070 and saved as lossy WebP
   (quality 90, lossless transparency), as the app allows for long loops. The lossless versions are kept outside this repository.

## Faults that are left

- The loop has head and body movement and the framing drifts a little over its six seconds; it was accepted as it is.
- The loop's hair edge shows the pixels of the enlarged video (a slightly stepped edge), and her left hand has a faint yellowish fringe.
- A few tiny white ticks sit inside her hair strands in the stills; they look like painted highlights and were not removed.
- The finest flyaway hair of the stills is thinner than the model drew it, because the faint ghost strands are cleared.
- There is no talking set for the reading activity (`activity-reading-talk-N`): the silent loop goes on while she speaks.
- Her expressions are subtle in places. Everything was checked by eye and with measurements, not by a study.

## Files

`neutral`, `happy`, `sad`, `angry`, `surprised`, `shy`, `thinking`, each with `-blink` and `-talk1` to `-talk3`, `wave-1`, `wave-2`,
`cheer-1`, `cheer-2` (39 pictures); `activity-reading-1` to `-73`; `NOTICE.md`, `credit.txt`, `look.txt` and this file.
