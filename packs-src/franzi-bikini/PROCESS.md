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

## Swimming activity frames

The pack also has two 4-frame loops of her swimming, `activity-swimming-1` to `-4` (silent) and `activity-swimming-talk-1` to
`-4` (talking, with the same poses), 940 × 1070 lossless WebP like the other frames, meant to play at about 3 frames a second.

1. **Pictures.** Four edits of the pack's bikini `neutral` picture (on a plain white background) in xAI's Grok Imagine put
   her waist-deep in calm water, in a soft rounded pool that fades into the white background, with ripples around her:
   arms held a little out (the key picture), a freestyle stroke (one arm reaching forward just above the water, the other
   swept back; her whole body leans a little, so her head sits lower and to one side in this frame), both hands skimming the
   water with a small splash and droplets on one side, and arms swept back beside her hips. Two earlier attempts at the second
   picture (a breaststroke start) came back with her hands clasped at her chest and with her arms crossed over it, neither
   a stroke, so a freestyle pose was asked for instead. Her face is the base's own (her calm gentle smile) in all four.
2. **Transparent background with water.** *Remove Background* treats the pool as background, so the water was taken from the
   original picture instead: white was turned into transparency, which keeps the pool translucent and fading, and it was laid
   under the figure from the tool's cutout. Dry skin and her white bikini stay opaque (a pale pixel only counts as water if it
   is bluish, because her bikini bottom is pale and neutral, which a first attempt had taken for water and cut holes in). Pale
   leftovers of the submerged body near the waterline were removed or softened.
3. **Talking loop.** The talking frames are the four silent frames with an open mouth cut in, 24 × 15, 30 × 21, 24 × 15 and
   18 × 10 pixels (frames 1 to 4). The mouth is the open mouth of the pack's own `cheer-1` picture, cut out and scaled; her
   closed mouth (a faint smile line in two pieces) was painted over with the skin around it first, and the open mouth was
   turned to the tilt of her head in that picture (frame 2 leans, so its mouth does too). Every other pixel is the same as
   in the silent frame. The app can play this loop while she speaks.

## Licence

MIT, the same as the repository and the `risa-dress` pack. The pictures were made with AI, so whether and by whom
they can be copyrighted is not settled everywhere; see the caveat in `NOTICE.md`.
