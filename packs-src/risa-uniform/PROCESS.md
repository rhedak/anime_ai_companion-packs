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

## The cooking activity (72 pictures: a pancake-tossing loop and its talking set)

Replaces the earlier four-picture sample loop. Made on 25 October 2026 on Grok Imagine in the owner's signed-in Chrome, with the owner's Grok allowance (nothing was paid per picture). The same method as the `risa-bikini` loop (see its `PROCESS.md`), for a prop activity.

1. **Key picture.** The pack's `neutral` picture was put on flat magenta and edited on Grok Imagine into a picture of her holding a black frying pan with one pancake in her right hand and a wooden spatula in her other hand. The first key picture held the pan up beside her, its face toward the viewer, which looked unnatural (and so did the video made from it, which was thrown away).
   The second one has her arm stretched forward and a little down, the pan held out in front of her pointing away from her toward the viewer, the spatula low at her side. The owner approved it before the video was made.
2. **Video.** One video (720p, 6 seconds, 896 x 1024, 24 a second): she flicks the pancake up, it flips in the air and she catches it, twice. The pair of frames 72 apart that differ least (frames 69 and 141 of the 145; a difference of 0.4 of a 12-a-second step) closes the loop.
   Every second frame of that stretch is a picture: 36 pictures at 12 a second.
3. **Cutting out.** Each frame was cut out of the magenta with the studio's matting (key magenta, with the cleaning of pink leftovers), scaled to 940 x 1070 and saved as lossy WebP (quality 90, lossless transparency).
4. **Position.** One common shift (1 pixel left, 1 down) puts her head where it is in `neutral`; her own movement is kept.
5. **Talking set.** `activity-cooking-talk-N`: her closed mouth erased and an open mouth from her `cheer-1` pasted in, three sizes in the order 2, 2, 3, 3, 2, 2, 1, 1, 3, 3, 2, 2 and so on. In four pictures (18, 20, 25, 26) the flying pancake covers her mouth, so the talking picture is the silent one.
   The mouth position comes from the `neutral` picture's eyes moved with her head's own movement (the eye finder cannot find her pale iris in a small video head); the area erased around the closed mouth was widened, and a second pass erases the darkest pixels around it, because the smile line of some frames was wider than the first pass.

### Faults that are left

- Looked at as contact sheets, every talking face at small size and the loop as a GIF, not every picture at full size.
- The pancake passes in front of her face and eyes for about ten pictures of the loop (it is thrown up in front of her), so her face is hidden for a moment each time; her head and the pan move a little.
- The pictures are soft, as the video is only 896 x 1024. The earlier four-picture loop is kept in the owner's `ref/` folder.

## Licence

MIT, the same as the repository and the `risa-dress` pack. The pictures were made with AI, so whether and by whom
they can be copyrighted is not settled everywhere; see the caveat in `NOTICE.md`.
