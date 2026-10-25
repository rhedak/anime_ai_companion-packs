# How the Franzi (bikini outfit) pack was made

**Franzi is an original character.** She does not belong to any company or franchise, and no real person is shown.
Like the rest of this repository and the `risa-dress`, `franzi-dress`, `franzi-casual` and `franzi-pajamas` packs, these pictures are under the **MIT licence**
(see `NOTICE.md` and the repository's `LICENSE`, including the caveat there about AI-made pictures).

## The process

1. **Design and base picture.** The repository's owner designed Franzi (black hair, amber eyes) and made the bikini neutral base picture
   with xAI's Grok Imagine from her existing full-body bikini reference picture (from the `anime-character-creator` repository):
   the picture was cropped to the same head-to-mid-thigh framing as the casual base, with her in a white halter bikini and her hair
   in a low ponytail with no bow. The pictures came out on a plain black background at 1312 × 1504.
2. **Emotions and poses.** Each of the six other emotions (`happy`, `sad`, `angry`, `surprised`, `shy`,
   `thinking`) and the four poses (`wave-1`, `wave-2`, `cheer-1`, `cheer-2`) was made by editing that same base
   picture in Grok Imagine, one change at a time. Every edit started again from the base, never from a previous
   result, with a prompt of the form: "Same character, same outfit, same framing, same black background, same art
   style. Only change <the expression or pose>. Keep everything else identical." One picture was kept per edit.
   The tool zoomed out on `cheer-2`, so her figure is smaller in that picture and her raised hands touch the top edge; it was kept as it came.
3. **Blinks and mouths.** The blink (`<emotion>-blink`) and three mouth openings (`<emotion>-talk1` to `-talk3`)
   for all seven emotions were not made with an image tool. A script drew closed eyes or an open mouth over the
   face of each emotion picture and left every other pixel identical. The eye and mouth positions were measured again on each bikini
   emotion picture, since the face sits slightly higher and further right than in the pajamas pictures. For the blinks, the script
   finds each open eye (the lashes, white and iris connected to the iris) inside a box around it, paints it over with the
   surrounding skin colour, and draws a closed-eye line across it, so her eyebrows and the hair beside her eyes are left untouched.
   They are simpler than the hand-finished pictures of `risa-dress`.
4. **Transparent background.** A script made the black background transparent: near-black pixels connected to the
   picture's edge, plus the enclosed black gaps between arms and body (and between hair, neck and shoulder, and between her raised
   arms and head in `cheer-2`) and the gaps between her fingers, with a 1 px soft edge and the dark fringe removed. Her black hair and
   outlines are kept: next to her hair a gentler, slightly smoothed threshold is used so thin strands are not eaten.
   Blinks and mouths reuse their emotion picture's mask.
5. **Packaging.** All pictures were scaled to 940 × 1070 (the size of `risa-dress`) and saved as lossless WebP,
   with the same file names as `risa-dress`, `franzi-dress`, `franzi-casual` and `franzi-pajamas`: 39 pictures, plus `NOTICE.md`, `credit.txt` and this file.

## The swimming activity (72 pictures: a splashing loop and its talking set)

Replaces the earlier four-picture sample loop. Made on 25 October 2026 on Grok Imagine in the owner's signed-in Chrome, with the owner's Grok allowance (nothing was paid per picture). The same method as the `risa-bikini` loop (see its `PROCESS.md`).

1. **Key picture.** The pack's `neutral` picture was put on flat magenta and edited on Grok Imagine into a picture of her standing waist-deep in calm light-blue water, in a soft rounded pool that fades out into the magenta, with ripples, her hands low and her mouth closed (one try).
2. **Video.** One video (720p, 6 seconds, 896 x 1024, 24 a second): she scoops water in both hands, splashes it up and out and settles back, and then the pool stays at rest for the second half. The pair of frames that closes the loop best
   (frames 5 and 113 of the 145, 108 apart; a difference of 0.9 of a 12-a-second step) is a little looser than in Risa's. To keep the pack under the 120-file limit with a talking set, every third frame was taken (36 pictures at 12 a second), so the loop plays one and a half times faster than the video.
3. **Cutting out the water.** Each frame was cut out of the magenta with the studio's matting, and the water was un-mixed from the key (see the `make-activity-pack` skill, "Water on a key"), which keeps the pool's soft blue edge and the see-through droplets and ribbons. Scaled to 940 x 1070, lossy WebP (quality 90, lossless transparency).
4. **Position.** One common shift (2 pixels left, 3 down) puts her head where it is in `neutral`; her own head movement in the loop is kept.
5. **Talking set.** `activity-swimming-talk-N`: her closed mouth erased and an open mouth from her `cheer-1` pasted in, three sizes in the order 2, 2, 3, 3, 2, 2, 1, 1, 3, 3, 2, 2 and so on, at the place the closed mouth had (moved with the head's own movement).

### Faults that are left

- Looked at as contact sheets, the faces at 3 times zoom for 12 pictures, and the loop as a GIF, not every picture. The loop point is a little visible in the ripples of the pool.
- The splash arcs up and out, not at the viewer, and the water ribbons pass in front of her body, see-through. The loop is one and a half times faster than the video.
- The pictures are heavy for a lossy loop (about 160 KB each) because of the water; the pictures are soft, as the video is only 896 x 1024.
- The earlier four-picture loop is kept in the owner's `ref/` folder.

## Licence

MIT, the same as the repository and the `risa-dress` pack. The pictures were made with AI, so whether and by whom
they can be copyrighted is not settled everywhere; see the caveat in `NOTICE.md`.
