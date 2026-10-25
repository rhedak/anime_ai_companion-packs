# How the Risa (tennis) pack was made

**Risa is an original character.** She does not belong to any company or franchise, and no real person is shown.
Like the rest of this repository and the other Risa packs, these pictures are under the **MIT licence**
(see `NOTICE.md` and the repository's `LICENSE`, including the caveat there about AI-made pictures).

The pack was made on 25 October 2026 with the pack studio of the anime_ai_companion app (`docs/pack-studio.md` in that repository), with its **browser backend**:
for every picture the app started `claude -p --chrome`, which opened the website in the owner's signed-in Chrome, uploaded the picture to edit, typed the prompt and pressed Download.
Nothing was paid per picture; it used the owner's ChatGPT (free) and Grok Imagine allowances.

## The stills (39 pictures)

1. **Neutral.** The `risa-bikini` neutral picture (cropped at the thigh) was edited on the ChatGPT website. The first try asked for tennis shoes and socks too, and ChatGPT
   redrew her full length and smaller, which breaks the layout every other picture relies on; the studio's prompt was then changed to say that a cropped picture stays cropped, the shoes were left out of the outfit,
   and the second try kept the framing exactly. Two pictures were asked for in each of the two tries; the free ChatGPT account then reached its daily image limit, so the neutral picture is the first picture of the second try.
2. **Emotions, blinks, mouths and poses.** As for the green coat pack, on Grok Imagine (the neutral picture was uploaded there), with only a face box pasted back for the face pictures, up to three tries each,
   and the studio's checks (face-box edge, flat background, lower-body size and overlap for poses): all 38 pictures passed the first time.
3. **Transparent background, size.** Matting on the magenta key; 896 x 1024 scaled to 940 x 1070, lossless WebP.

## The tennis activity (70 pictures)

1. **Key picture.** A picture of her holding a tennis racket in her right hand was made on Grok Imagine from the neutral picture (three edits: the racket low at her side, a black racket, and finally a white racket held up at chest height with her mouth closed;
   the first two rackets had pink-looking strings because the magenta shows through a string mesh).
2. **Video.** Two videos were made from it (720p, 6 seconds). The first ended with both hands on the racket, which did not match its start. The second prompt said that the video ends exactly the way it starts, and its last frame
   matched its first closely (the difference between the two was a little under one frame step), so that one was used.
3. **Frames.** ffmpeg took every second picture of the stretch from the second frame to the 140th (12 a second, 70 pictures, the last leads back to the first), each was cut out of the magenta with the studio's matting, the racket's strings are see-through,
   scaled to 940 x 1070 and saved as lossy WebP (quality 90, lossless transparency), as the app allows for long loops. The lossless versions are kept outside this repository.

## Faults that are left

- It was looked at as contact sheets and in the app, not frame by frame. In a few frames the racket's strings keep a faint pink tint from the background.
- The ball passes in front of her body on its way toward the viewer, and she is not looking at it; the swing is a forehand with the racket going out of the picture on her side.
- Her hair moves a lot during the swing, and the framing drifts a little.
- The loop is soft, as the video is only 896 x 1024.
- There is no talking set for the activity (`activity-tennis-talk-N`): the silent loop goes on while she speaks.
- The blinks and mouth openings of the stills were not each looked at at full size; the hands of the poses were not examined at 2 to 3 times zoom.

## Files

`neutral`, `happy`, `sad`, `angry`, `surprised`, `shy`, `thinking`, each with `-blink` and `-talk1` to `-talk3`, `wave-1`, `wave-2`,
`cheer-1`, `cheer-2` (39 pictures); `activity-tennis-1` to `-70`; `NOTICE.md`, `credit.txt`, `look.txt` and this file.
