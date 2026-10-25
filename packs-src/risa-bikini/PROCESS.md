# How the Risa (bikini outfit) pack was made

**Risa is an original character.** She does not belong to any company or franchise, and no real person is shown.
Like the rest of this repository and the `risa-dress`, `franzi-dress`, `franzi-casual`, `franzi-pajamas` and `franzi-bikini` packs, these pictures are under the **MIT licence**
(see `NOTICE.md` and the repository's `LICENSE`, including the caveat there about AI-made pictures).

## The process

1. **Design and base picture.** The repository's owner designed Risa (long straight dark red hair with bangs, green eyes,
   a gold hair clip) and made the bikini neutral base picture with xAI's Grok Imagine from her new adult reference picture
   (`ref/risa-adult` in the `anime-character-creator` repository), in the same head-to-mid-thigh framing as the `franzi-bikini`
   base, with her in a white halter bikini and her hair falling straight down past her arms. The pictures came out on a plain
   black background at 1312 × 1504.
2. **Emotions and poses.** Each of the six other emotions (`happy`, `sad`, `angry`, `surprised`, `shy`,
   `thinking`) and the four poses (`wave-1`, `wave-2`, `cheer-1`, `cheer-2`) was made by editing that same base
   picture in Grok Imagine, one change at a time. Every edit started again from the base, never from a previous
   result, with a prompt of the form: "Same character, same outfit, same framing, same black background, same art
   style. Only change <the expression or pose>. Keep everything else identical." One picture was kept per edit.
   The tool zoomed out on `cheer-2`, so her figure is smaller in that picture and her raised hands touch the top edge; it was kept as it came.
3. **Blinks and mouths.** The blink (`<emotion>-blink`) and three mouth openings (`<emotion>-talk1` to `-talk3`)
   for all seven emotions were not made with an image tool. A script drew closed eyes or an open mouth over the
   face of each emotion picture and left every other pixel identical. The eye and mouth positions were measured on each
   Risa emotion picture. For the blinks, the script finds each open eye (the lashes, white and green iris connected to the
   iris) inside a box around it, paints it over with the surrounding skin colour, and draws a closed-eye line across it;
   red hair pixels are never painted, so her bangs, her eyebrows and the hair beside her eyes are left untouched. Her `happy`
   picture already has narrowed, smiling eyes, so its blink closes them with a gently upward-curved line. The open mouths use
   the colours of her own `surprised` mouth. They are simpler than the hand-finished pictures of `risa-dress`.
4. **Transparent background.** A script made the black background transparent, with the method used for Risa's adult
   reference cut-out: near-black pixels connected to the picture's edge, plus the enclosed black gaps between arms and body
   (and between hair and arms, between her raised arms and head in `cheer-2`) that survive a small opening, the narrow gaps
   between her hair strands near her outline, and the gaps between her fingers. The soft edge is matted from the colour of
   the nearby hair or skin and un-premultiplied, so there is no dark fringe and her fine red hair strands are kept.
   Blinks and mouths reuse their emotion picture's mask.
5. **Packaging.** All pictures were scaled to 940 × 1070 (the size of `risa-dress`) and saved as lossless WebP,
   with the same file names as `risa-dress`, `franzi-dress`, `franzi-casual`, `franzi-pajamas` and `franzi-bikini`: 39 pictures, plus `NOTICE.md`, `credit.txt`, `look.txt` and this file.

## The swimming activity (72 pictures: a splashing loop and its talking set)

Replaces the earlier four-picture sample loop. Made on 25 October 2026 on Grok Imagine in the owner's signed-in Chrome, with the owner's Grok allowance (nothing was paid per picture).

1. **Key picture.** The pack's `neutral` picture was put on flat magenta and edited on Grok Imagine into a picture of her standing waist-deep in calm light-blue water, in a soft rounded pool that fades out at its edges into the magenta, with ripples, her hands low and her mouth closed.
   Two other key pictures were made and thrown away: one with a crisply outlined pool (Grok drew a sticker-like outline around her whole figure) and one on flat green (the pool's fade turned bright green).
2. **Video.** One video was made from it (720p, 6 seconds, 896 x 1024, 24 a second): she scoops water in both hands, splashes it up and out in big arcs and settles back. It is two nearly identical 3-second cycles. The pair of frames 72 apart that differ least
   (frames 56 and 128 of the 145; a difference of 0.3 of a 12-a-second step) closes the loop. Every second frame of that stretch is a picture: 36 pictures at 12 a second.
3. **Cutting out the water.** Each frame was cut out of the magenta with the studio's matting (`cutout.ts`, magenta key). Water in front of a key is a mix of the two, which that matting reads as a figure with a violet tint, so a second step solved, for every partly see-through pixel
   that lies between the key colour and a water colour (a mid light blue, or a pale glassy white-blue), how much of it is water, and gave it that opacity and the water's own colour. That gives the pool a soft blue edge and keeps the droplets and ribbons of the splash see-through.
   Faint noise of the video on the key (opacity below 14 %) and specks under 25 pixels were removed. Scaled to 940 x 1070 with premultiplied alpha, saved as lossy WebP (quality 90, lossless transparency), as the app allows for long loops. The lossless versions are kept outside this repository.
4. **Position.** All 36 pictures were moved by one common shift (1 pixel left, 3 down) so that her head sits where it does in `neutral`; her own head movement in the loop is kept.
5. **Talking set.** `activity-swimming-talk-N` is the picture with the same number with her closed mouth erased and an open mouth pasted in, from the `cheer-1` picture's mouth, in three sizes in the order 2, 2, 3, 3, 2, 2, 1, 1, 3, 3, 2, 2 and so on, at the position the closed mouth had. The eye finder cannot find
   Risa's pale iris in the video's small head reliably, so the mouth position comes from the `neutral` picture's eyes, moved with the head movement measured for each frame.

### Faults that are left

- It was looked at as contact sheets, the faces at 3 times zoom for 11 pictures and the loop as a GIF, not every picture. The pool's far rim has a faint lavender where Grok painted a violet glow; the ripples near the start and end of the loop spread to the edges of the picture and are faint.
- The splash arcs up and out and not straight at the viewer, and the water ribbons pass in front of her body, see-through.
- The pictures are heavy for a lossy loop (about 220 KB each) because of the detail of the water.
- Her head moves a few pixels during the loop, and the pictures are soft, as the video is only 896 x 1024.
- The earlier four-picture loop is kept in the owner's `ref/` folder.

## Licence

MIT, the same as the repository and the `risa-dress` pack. The pictures were made with AI, so whether and by whom
they can be copyrighted is not settled everywhere; see the caveat in `NOTICE.md`.
