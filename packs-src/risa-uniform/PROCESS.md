# How the Risa (school uniform) pack was made

**Risa is an original character.** She does not belong to any company or franchise, and no real person is shown.
Like the rest of this repository and the `risa-dress`, `risa-bikini`, `franzi-dress`, `franzi-casual`, `franzi-pajamas` and `franzi-bikini` packs, these pictures are under the **MIT licence**
(see `NOTICE.md` and the repository's `LICENSE`, including the caveat there about AI-made pictures).

## The process

1. **Design and reference picture.** The repository's owner designed Risa (long straight dark red hair with bangs, green eyes,
   a gold hair clip) and her school uniform: a buttoned navy blazer with gold buttons, a white shirt with a light blue ribbon bow
   and a blue-grey pleated skirt. Her full-body uniform reference picture was made with xAI's Grok Imagine from her bikini
   reference picture (`ref/risa-adult` in the `anime-character-creator` repository), on a plain white background.
2. **Emotions and poses.** Each of the seven emotions (`neutral`, `happy`, `sad`, `angry`, `surprised`, `shy`,
   `thinking`) and the four poses (`wave-1`, `wave-2`, `cheer-1`, `cheer-2`) was made by editing that full-body uniform
   picture in Grok Imagine, changing only the expression or the pose and keeping the character, outfit and art style.
   One picture was kept per edit.
3. **Framing.** Each full-body picture was cropped to the head-to-mid-thigh framing of the `risa-bikini` pack and enlarged
   about 1.27 times, so that her face has the same position and size as in the bikini pictures (1312 × 1504; the
   pictures are a little softer for it). Where the crop reached past the top of the original picture, the strip was
   filled with the background colour. For `cheer-2` the crop was moved up so her raised fists stay fully in the frame,
   so her face sits slightly lower in that picture; it was kept that way.
4. **Blinks and mouths.** The blink (`<emotion>-blink`) and three mouth openings (`<emotion>-talk1` to `-talk3`)
   for all seven emotions were not made with an image tool. A script drew closed eyes or an open mouth over the
   face of each emotion picture and left every other pixel identical. The eye and mouth positions were measured on each
   emotion picture. For the blinks, the script finds each open eye (the lashes, white and green iris connected to the
   iris) inside a box around it, paints it over with the surrounding skin colour, and draws a closed-eye line across it;
   red hair pixels are never painted, so her bangs, her eyebrows and the hair beside her eyes are left untouched. Her eyes
   are already closed (smiling) in `happy`, so `happy-blink` is the same picture as `happy`. They are simpler than the
   hand-finished pictures of `risa-dress`.
5. **Transparent background.** A script made the white background transparent, with the method used for Risa's uniform
   reference cut-out: near-white pixels connected to the picture's edge (including the filled strip at the top), plus
   enclosed near-white gaps only where they are surrounded mostly by her red hair or lie between her arms and body and
   between her fingers, and thin white slivers between her hair strands. The soft edge is matted against white and
   un-premultiplied, and the grey anti-aliased outlines of her outer hair strands are matted as semi-transparent hair, so
   no white or grey fringe shows on a dark background. Her white shirt, collar and cuffs, the light blue ribbon, the whites
   of her eyes and the highlights on her skin stay fully opaque. Blinks and mouths reuse their emotion picture's mask.
   **Clean-up (version 2).** A check of the finished pictures found a few small white flecks of the old background left
   in the gap between her left hair and her sleeve (and one or two beside the shoulder). A script cleared them in 29 of the
   39 pictures (about 2,400 pixels in all, nothing else touched): small near-white blobs next to the outline and next to her
   hair, and a box around that gap, where nothing white belongs. The pictures were saved again as lossless WebP.
6. **Packaging.** All pictures were scaled to 940 × 1070 (the size of `risa-dress`) and saved as lossless WebP,
   with the same file names as `risa-bikini` and the other packs: 39 pictures, plus `NOTICE.md`, `credit.txt`, `look.txt` and this file.

## Cooking activity frames (sample)

The pack also has two 4-frame loops of her cooking, `activity-cooking-1` to `-4` (silent) and `activity-cooking-talk-1`
to `-4` (talking, with the same poses), 940 × 1070 lossless WebP like the other frames. They are a sample: the app does not use `activity-*` frames yet.

1. **Pictures.** The key picture was made by editing the pack's full-body uniform picture in Grok Imagine: Risa in her
   uniform with a white apron, holding a black frying pan of vegetables at waist height and stirring with a wooden spatula,
   with a calm smile, on the same white background at 1312 × 1504. Two pose variants were edited from it the same way: the
   spatula pushed to the left of the pan with the steam curling left, and the spatula lifted with a few vegetable pieces
   tossed in the air. A third variant (spatula on the right) was dropped, because the tool had swapped which hand holds the
   spatula and the pan, which would jump in the loop. The loop order is key, left, toss, left; frames 2 and 4 are the same picture.
2. **Scale and position.** The same framing as the rest of the pack (step 3): one common scale of 1.27 and a shift, the same
   for all frames, measured by matching her head to `neutral`, then the same scaling to 940 × 1070. Her eyes land within
   0.6 pixel of `neutral`'s; the pan and both hands are fully in the frame. The left-spatula picture came out stretched
   about 0.4 % taller than the key, so it was squeezed back vertically to line up; the toss picture already lined up within 0.4 pixel.
3. **One face.** The face came out slightly different in each picture, which flickered in the loop. The key picture's head
   (face, bangs and clip, inside a feathered oval) was pasted onto the other pictures, so the face is identical in all frames;
   the hair at the sides, the collar and the ribbon stay each picture's own.
4. **Transparent background.** The white background was made transparent with the same method as the rest of the pack
   (step 5). The apron is white on white, so its left neck strap, which runs beside her hair, is protected from the rule
   that clears white strips between hair and blazer; the apron, shirt, collar and cuffs stay fully opaque. One extra rule
   clears small white slivers between her outer hair strands right at the outline, which the other rules missed in two of
   the pictures. The pan, the spatula and the tossed vegetable pieces stay part of the figure.
5. **Steam.** The steam stays where it is drawn, over the pan and the apron, inside her outline and opaque; none of it
   lies over the background, so nothing was made semi-transparent.
6. **Cleanup.** A scan looked for stray specks away from her figure, faint haze around her outline and white flecks at the
   edge. Per picture it cleared about 210 to 260 isolated faint specks (all nearly transparent), 105 to 195 haze pixels and
   1 to 13 white-fleck pixels.
7. **Talking loop.** The talking frames are the four silent frames with an open mouth cut in. The mouths are the pack's own
   script-drawn `neutral-talk2`, `neutral-talk3`, `neutral-talk2` and `neutral-talk1` mouths (frames 1 to 4), at the same
   position as in `neutral`, with a feathered mask that covers the closed mouth fully and the skin tone matched; every other
   pixel is the same as in the silent frame. The app can play this loop while she speaks.

## Licence

MIT, the same as the repository and the `risa-dress` pack. The pictures were made with AI, so whether and by whom
they can be copyrighted is not settled everywhere; see the caveat in `NOTICE.md`.
