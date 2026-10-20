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

## Licence

MIT, the same as the repository and the `risa-dress` pack. The pictures were made with AI, so whether and by whom
they can be copyrighted is not settled everywhere; see the caveat in `NOTICE.md`.
