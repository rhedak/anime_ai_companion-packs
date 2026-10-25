# How the Risa (green coat) pack was made

**Risa is an original character.** She does not belong to any company or franchise, and no real person is shown.
Like the rest of this repository and the `risa-dress`, `risa-bikini`, `risa-uniform` and `risa-casual` packs, these pictures are under the **MIT licence**
(see `NOTICE.md` and the repository's `LICENSE`, including the caveat there about AI-made pictures).

The pack was made with the pack studio of the anime_ai_companion app (`docs/pack-studio.md` in that repository), on 25 October 2026, with the
**browser backend**: for every picture the app started `claude -p --chrome`, which opened grok.com/imagine in the owner's signed-in Chrome, uploaded the
picture to edit and typed the prompt, and pressed Download; the app took the downloaded file. Nothing was paid per picture; it used the owner's Grok Imagine allowance.

## The stills (39 pictures)

1. **Neutral.** The neutral picture of the unpublished hot pants draft (on flat magenta, 896 x 1024) was edited with the prompt to change her outfit to a
   dark green hooded winter coat over a white knitted sweater and a grey wool skirt, keeping her face, hair, clip, pose, expression and framing and the background.
   One picture was asked for and used (the studio can ask for up to four to choose from).
2. **Emotions, blinks, mouths.** Every other picture is an edit of that neutral picture (a blink of a non-neutral emotion is an edit of that emotion's picture). For these,
   only a box around her face (learned from the blink and mouth pictures of the source pack) was pasted back into the neutral picture with a feathered edge. Each picture
   was checked by the studio for changes at the edge of the box and for the background staying flat magenta, and had up to three tries; none needed a second try and none was flagged.
3. **Poses.** `wave-1`, `wave-2`, `cheer-1`, `cheer-2` and `thinking` are whole-picture edits. The studio's lower-body check (size and overlap of her lower half with the neutral picture) passed for all.
4. **Transparent background.** The pictures were cut out of the magenta with the studio's matting (the unknown band of a few pixels around the background is matted against the figure's own colours;
   a faint-alpha floor clears ghost strands away from the body), the face pictures share the outline of their group, and the result was scaled from 896 x 1024 to 940 x 1070 and saved as lossless WebP.

## Faults that are left

- It was looked at as a contact sheet of the eleven main pictures and in the app; the blinks and mouth openings were **not** each looked at at full size. This is the part a person should look at again.
- The hands of the poses were not examined at 2 to 3 times zoom.
- Like the other AI-made packs, the finest flyaway hair is thinner than the model drew it, because faint ghost strands are cleared.
- There is no activity in this pack.

## Files

`neutral`, `happy`, `sad`, `angry`, `surprised`, `shy`, `thinking`, each with `-blink` and `-talk1` to `-talk3`, `wave-1`, `wave-2`,
`cheer-1`, `cheer-2` (39 pictures); `NOTICE.md`, `credit.txt`, `look.txt` and this file.
