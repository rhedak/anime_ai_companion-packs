# Risa (casual) picture pack

An original character: **Risa**, in a casual outfit (a light blue T-shirt and a dark charcoal pleated skirt), with long straight dark red hair with bangs, green eyes and a gold hair clip. No real person is shown.

## How it was made

**These pictures were made with AI.** The neutral picture was made by editing the `risa-uniform` neutral picture (which was itself made with xAI's Grok Imagine) with the image model FLUX.2 [klein] 4B (Black Forest Labs, Apache-2.0 licence), run on the owner's own computer: the prompt changed her outfit and left the rest alone. The six other emotions (`happy`, `sad`, `angry`, `surprised`, `shy`, `thinking`) were made by editing that neutral picture with the same model, and so were the blink (`<emotion>-blink`) and the three mouth openings (`<emotion>-talk1` to `-talk3`) of every emotion. For these only a box around her face was kept from the model's result; everything else is the neutral picture unchanged. The four poses (`wave-1`, `wave-2`, `cheer-1`, `cheer-2`) and `thinking` (a hand on her chin) are whole-picture edits, because an arm leaves the face box.

The reading activity (`activity-reading-1` to `-73`, a 6-second loop at 12 pictures a second) is different: a picture of her sitting on a wooden chair with a book was made with FLUX.2 on a flat magenta background and animated with xAI's Grok Imagine (video, loop mode); frames of the video were cut out one by one.

The background of every picture is transparent. The pictures were made on flat white (the stills) or flat magenta (the loop), which the image model cannot make transparent, and a script (closed-form alpha matting) cut her out with soft edges, with the background colour taken out of the edge pixels.

## A caveat about AI-made pictures

Whether pictures made by an image model can be copyrighted, and by whom, is not settled everywhere, and the
terms of the service that made them apply to the output as well. These pictures are offered under the **MIT licence**
of the rest of the repository, which grants whatever rights the repository's owner has in them and cannot grant more
than exists. This is not legal advice. `docs/frame-packs.md` says how to make your own pack.
