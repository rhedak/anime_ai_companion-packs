# How the Franzi (casual outfit) pack was made

**Franzi is an original character.** She does not belong to any company or franchise, and no real person is shown.
Like the rest of this repository and the `risa-dress` and `franzi-dress` packs, these pictures are under the **MIT licence**
(see `NOTICE.md` and the repository's `LICENSE`, including the caveat there about AI-made pictures).

## The process

1. **Design and base picture.** The repository's owner designed Franzi (black hair in a low ponytail, amber eyes,
   a pastel pink cardigan over a white T-shirt, a cream pleated skirt, and a red bow clip at her ponytail) and made the casual neutral base picture with xAI's Grok Imagine, as a different outfit for the same character as `franzi-dress`. The pictures came out on a plain black background.
2. **Emotions and poses.** Each of the six other emotions (`happy`, `sad`, `angry`, `surprised`, `shy`,
   `thinking`) and the four poses (`wave-1`, `wave-2`, `cheer-1`, `cheer-2`) was made by editing that same base
   picture in Grok Imagine, one change at a time. Every edit started again from the base, never from a previous
   result, with a prompt of the form: "Same character, same outfit, same framing, same black background, same art
   style. Only change <the expression or pose>. Keep everything else identical." One picture was kept per edit.
3. **Blinks and mouths.** The blink (`<emotion>-blink`) and three mouth openings (`<emotion>-talk1` to `-talk3`)
   for all seven emotions were not made with an image tool. A script drew closed eyes or an open mouth over the
   face of each emotion picture and left every other pixel identical. They are simpler than the hand-finished
   pictures of `risa-dress`.
4. **Transparent background.** A script made the black background transparent: near-black pixels connected to the
   picture's edge, plus the enclosed black gaps between arms and body, with a 1 px soft edge and the dark fringe
   removed. Her black hair and outlines are kept. Blinks and mouths reuse their emotion picture's mask.
5. **Packaging.** All pictures were scaled to 940 × 1070 (the size of `risa-dress`) and saved as lossless WebP,
   with the same file names as `risa-dress` and `franzi-dress`: 39 pictures, plus `NOTICE.md`, `credit.txt` and this file.

## Cooking activity frames

The pack has a 24-frame cooking loop, `activity-cooking-1` to `-24`, and the same 24 poses with her mouth open (`activity-cooking-talk-1` to `-24`),
940 × 1070, played at 12 frames a second (2 s, a closed cycle). Unlike the other pictures these are **lossy WebP** (quality 90, lossless
transparency): about 110 KB each instead of about 420 KB. The lossless masters are kept in this repository's untracked `ref/franzi-cooking/lossless/`.

1. **Key picture.** One edit of the `neutral` picture in Grok Imagine (on white) asked for her to hold a black frying pan by its handle in her right hand,
   full of sauteed vegetables, with a wooden spatula in the other hand, a gentle closed-mouth smile, and a flat bright green background.
2. **Video.** Grok Imagine made a six-second video from that picture (she stirs and shakes the pan so the vegetables hop up, steam rising, static camera).
   A first video was rejected: from its second frame on she held two spatulas and the pan's handle was gone. The second asked for exactly one spatula,
   in the other hand, and for her hand to keep gripping the handle; it held in every frame checked.
3. **A loop from the video.** Only a 93-frame cycle closed tightly; a 47-frame one (frames 91 to 138 of the 24-frames-a-second video) closes as well as one
   step of the motion does at 12 frames a second, so 24 frames were sampled across it.
4. **Transparent background.** The flat green was keyed out by a script (alpha from how green a pixel is, colour unmixed from the green, a little spill removed
   within 3 pixels of the edge). The video's frames are 896 × 1024; every frame was scaled by one factor and moved by one offset so her eyes sit where they do in the `neutral`
   picture (the eye positions were read off the pictures by hand, because the finder took her red hair bow for an eye).
5. **Talking loop.** The open mouths were made by script, from the open mouth of `franzi-bikini`'s `cheer-1`, pasted over each frame's own closed mouth, in
   the openings 24 × 15, 30 × 21 and 18 × 10 pixels in a repeating pattern of two frames each. Every other pixel is the same as the silent frame before the lossy encode.
6. **Faults left.** The steam is a translucent white and came through the key thinner than in the video; the pictures are a little softer than the others;
   the lossy encode adds faint noise that differs between a silent picture and its talking partner; her hands and the pan are drawn by the video model, so the grip changes a little from frame to frame.

## Licence

MIT, the same as the repository and the `risa-dress` pack. The pictures were made with AI, so whether and by whom
they can be copyrighted is not settled everywhere; see the caveat in `NOTICE.md`.
