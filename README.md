# anime_ai_companion-packs

Picture packs for [anime_ai_companion](https://github.com/rhedak/anime_ai_companion), hosted outside that repository so the app repository does not have to keep every frame forever. The plan is [issue #8](https://github.com/rhedak/anime_ai_companion/issues/8). The archive format and the index fields are [pull request #10](https://github.com/rhedak/anime_ai_companion/pull/10).

This repository keeps the plain frames a pack is built from. Publishing turns one folder into a lossless patch archive, attaches that archive to a GitHub Release, and adds one entry to [`site/index.json`](site/index.json). GitHub Pages serves `site/`. The archive is the download. The frames in `packs-src/` are the source.

## Licence

[MIT](LICENSE), the same licence as anime_ai_companion. It covers this repository and the original-character packs (Franzi and Risa). **Excluded from that licence:** **`packs-src/miku/`** (Hatsune Miku is Crypton Future Media's character, shown as unofficial fan art for non-commercial use under the Piapro Character License; see that folder's `NOTICE.md`; the app downloads it on request and it is not part of the app's own files) and **`packs-src/draconia-uniform/`, `packs-src/draconia-vest/`, and `packs-src/draconia-gown/`** (Draconia Malfoid is an unofficial, non-commercial fan character loosely inspired by Draco Malfoy, not affiliated with Warner Bros. or Wizarding World; these packs may not be used commercially, and any of them will be taken down on request, contact rhedak00@yahoo.de; see the `NOTICE.md` in each folder).

Each pack carries its own `NOTICE.md` and `credit.txt`, and those files are stored in the archive. The notice is the terms that travel with the pictures. `packs-src/miku/`, `packs-src/draconia-uniform/`, `packs-src/draconia-vest/`, and `packs-src/draconia-gown/` follow only the notice in their own folder. For the Franzi and Risa packs the notice includes this caveat about AI-made pictures, quoted from `packs-src/franzi-pajamas/NOTICE.md`:

> Whether pictures made by an image model can be copyrighted, and by whom, is not settled everywhere, and the terms of the service that made them apply to the output as well. These pictures are offered under the **MIT licence** of the rest of the repository, which grants whatever rights the repository's owner has in them and cannot grant more than exists. This is not legal advice.

## Layout

| Path | What it is |
| --- | --- |
| `packs-src/<id>/` | A flat folder of lossless WebP frames, plus `credit.txt`, `NOTICE.md`, and `look.txt`. `PROCESS.md` is included when the pack has one. This is the input to the pack-archive tool. |
| `packs-src/<id>.publish.json` | Text for the index entry: `name`, `description`, `credit`, `aiMade`, `character`, and an optional `thumbnail` (`thumbs/<id>.webp` next to the index, or an https URL). It sits beside the folder. The archive tool refuses a file it does not know, so this metadata is kept out of the frame folder. |
| `site/index.json` | The manifest the app will fetch. Format `1`, the document [`parsePackIndex`](https://github.com/rhedak/anime_ai_companion/blob/fea973c7e647794fdde2e215c4adb9257b464e5e/src/pack-index.ts) checks. |
| `site/index.schema.json` | A verbatim copy of `packs/index.schema.json` from anime_ai_companion at `fea973c7e647794fdde2e215c4adb9257b464e5e` (the head of pull request #10). |
| `.github/workflows/publish.yml` | Builds the archive, publishes the Release, updates the index, and deploys `site/`. |

`franzi-pajamas` is the example source: 39 lossless WebP frames (15,142,742 bytes of pictures) plus `NOTICE.md`, `credit.txt`, `PROCESS.md`, and `look.txt`. `franzi-casual` and `franzi-bikini` are further outfits of the same character (publish field `character.id` `franzi`), with the same 39 frame names at 940×1070. `risa-bikini`, `risa-uniform` and `risa-casual` are outfits of Risa (`character.id` `risa`), an original character whose dress ships with the app, with the same 39 frame names at 940×1070. `miku` is a separate character (`character.id` `miku`). Draconia is another (`character.id` `draconia`; she is not an outfit of Franzi). `draconia-uniform`, `draconia-vest`, and `draconia-gown` are her outfits, with the same 39 frame names at 940×1070, and they share `packs-src/characters/draconia.txt` rather than a second character file. [`site/index.json`](site/index.json) gains an entry when that pack's release is published. `franzi-casual`, `franzi-pajamas`, `franzi-bikini`, `miku`, `draconia-uniform`, `draconia-vest`, `draconia-gown`, and `risa-bikini` are published; `risa-uniform` stays out of the index until `risa-uniform-v1` is published, and `risa-casual` until `risa-casual-v1` is. Each `packs-src/<id>.publish.json` holds the gallery name, the credit line from `credit.txt`, and the character, and points `thumbnail` at `thumbs/<id>.webp` beside the index in this repository. Previews of the packs excluded from the MIT licence are not added to anime_ai_companion.

`packs-src/characters/<id>.txt` is the shared description the demo manifest reads from beside the pack folder (first line the name, then the text, and an optional `default: <pack>`). It copies the character id into `pack.json`. Franzi's and Miku's descriptions already live in the app, so this repository had no `characters/` folder until Draconia. Hers is `packs-src/characters/draconia.txt`, with `default: draconia-uniform`. `packs-src/characters/risa.txt` is the same text as the app's `packs/characters/risa.txt`, with `default: risa-dress`, so the demo manifest for her outfits carries `character: risa`. The frame archive does not include these files.

## How a pack is published

1. Add `packs-src/<id>/` and `packs-src/<id>.publish.json` on `main`. The id is the folder name the app installs under `data/frames/`. Tags use letters, digits, `.`, `_`, and `-` (no spaces, and no `..`).
2. Publish that commit in either of these ways:
   - Push a tag named `<pack-id>-v<version>`, for example `franzi-pajamas-v1`. The version is the pack's own version, `1` or `1.2.3`, the same form as the index field.
   - Or run **Actions → Publish pack → Run workflow** and enter the pack id and version. The workflow creates the tag `<pack-id>-v<version>` on the commit you ran it from when that tag does not exist yet.

**Changing a published pack.** Publish it again under a higher version (`risa-uniform-v2` after `-v1`). The app remembers the version each pack was installed from and offers an
update when the list's files differ, so a republish under the same number still works but shows no version change; raise it. Installed copies are only replaced when the user says yes.

The workflow then:

1. Checks out [anime_ai_companion](https://github.com/rhedak/anime_ai_companion) at `COMPANION_REF` in `.github/workflows/publish.yml` and runs `npm ci`.
2. Runs `node src/pack-archive-cli.ts build packs-src/<id> -o <id>-v<version>.tar`. Rest frames and poses are stored whole. Blink and talk frames are stored as lossless patches. `credit.txt` and `NOTICE.md` are required and go into the archive.
3. Creates GitHub Release `<id>-v<version>` and attaches `<id>-v<version>.tar`.
4. Runs the tool's `index` command, which fills `frameCount`, pixel size, `sizes.archiveBytes`, `sizes.framesBytes`, and `hashes.sha256`. The workflow computes the file's sha256 and byte size itself and stops if those differ from the entry.
5. Inserts or replaces that pack in `site/index.json` on `main` and commits the file as `github-actions[bot]`.
6. Deploys `site/` to GitHub Pages with `actions/upload-pages-artifact` and `actions/deploy-pages`.

The download URL recorded for the archive is:

`https://github.com/rhedak/anime_ai_companion-packs/releases/download/<id>-v<version>/<id>-v<version>.tar`

`COMPANION_REF` is pinned to `fea973c7e647794fdde2e215c4adb9257b464e5e`, the head of pull request #10, because `src/pack-archive-cli.ts` is not on `main` or `dev` yet. After that pull request is merged, change `COMPANION_REF` to the merged commit (or the branch that contains the tool) before publishing.

Running the workflow again for the same tag replaces the Release asset and rewrites that pack's index entry. A tag that already points at a different commit is left alone and the run fails.

## How the app consumes the index

The app does not download packs yet. Pull request #10 adds the index checker and the archive tool, and leaves the installer for a later step of issue #8.

That installer is specified to:

- fetch this index
- check it with `parsePackIndex` (`src/pack-index.ts` in the app; `site/index.schema.json` describes the same fields)
- download the entry's `url` from Node on the machine running the app (a GitHub Release asset sends no CORS header, so the page cannot fetch it)
- verify `hashes.sha256`
- extract only allowed file names, require `NOTICE.md` and `credit.txt`, stage into a temporary directory, then rename into `data/frames/<id>/`

An installed pack is an ordinary folder of frames, which is what `readPack` already opens. Packs already on disk keep working with no network. A pack that is only in the index is unavailable until that download has been done.

Once Pages is enabled, GitHub's project-site address for this repository is:

`https://rhedak.github.io/anime_ai_companion-packs/index.json`

`format` is `1`. A pack entry requires `id`, `name`, `version`, `frameCount`, `sizes` (`width`, `height`, `archiveBytes`), `hashes.sha256`, and `url`. `description`, `sizes.framesBytes`, `thumbnail`, `credit`, and `aiMade` are optional. A field the schema does not know is refused.

## One-time settings

1. **GitHub Pages source.** In this repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. The publish workflow deploys `site/` through that source. Until this is set, the Release can still be created and the index commit can still land, and the Pages deploy step fails.
2. **Companion tool ref.** After [pull request #10](https://github.com/rhedak/anime_ai_companion/pull/10) is merged, set `COMPANION_REF` in `.github/workflows/publish.yml` to the commit or branch that contains `src/pack-archive-cli.ts`. The pinned commit above is the pull request head and is what a publish uses until then.
3. **Pushes from Actions.** The workflow pushes the `site/index.json` update to `main`, and the tag when Run workflow creates one, as `github-actions[bot]`. If `main` or tags are protected, allow that account to push them.
