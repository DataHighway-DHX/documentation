## Updating the Whitepaper

1. Modifying styles

It may be necessary to maintain duplicated styles that are in both ./style.css
(used for generating PDF of whitepaper for download with md-to-pdf program) and
website/static/css/custom.css (used for generating Whitepaper
in the DataHighway Developer Hub).

2. Updating diagrams

Most of the original diagrams that are included in the original v1.0.0 whitepaper were generated with Visual Paradigm, whose source file is .vpd format, and then converted to an image that was stored in the ./assets/images folder and embedded in the generated whitepaper. However some of the diagrams were modified by the MXC marketing team, and these were included in version [v1.1.0 whitepaper](https://github.com/DataHighway-DHX/documentation/releases). Note that the latest version that has been released is stored into ./v1.2.0/whitepaper (at the time of writing it includes v1.2.0). If you need to update any of the diagrams then please coordinate with the MXC marketing team.

3. Run the following to create a new release in PDF format. Replace `v1.2.0` below with the desired version:

```
nvm use v10.16.0
npm init &&
npm install --save simonhaenisch/md-to-pdf#v2.7.0 &&
mkdir ./v1.2.0 &&
node ./node_modules/.bin/md-to-pdf ./docs/whitepaper.md \
  --config-file ./config.json \
  ./v1.2.0/whitepaper.pdf
```

Note: It is important to use Node.js v10.16.0 and version simonhaenisch/md-to-pdf#v2.7.0 otherwise you will get an error like `ListrError: Something went wrong`).

Important: If you get an error, check if it actually generated the PDF changes correctly in either ./docs/whitepaper.pdf or ./v1.2.0/whitepaper.pdf, and use the one that worked.

Note: `headerIds` must be `true` in config.json otherwise TOC links do not work.

4. Update the Whitepaper Table of Contents (TOC)

Generate the TOC of the Whitepaper and save to a file in Markdown format using [markdown-toc](https://github.com/jonschlinkert/markdown-toc):

```bash
cd website &&
cd ./node_modules/markdown-toc/ && node cli.js --bullets "*" --no-firsth1 ../../../docs/whitepaper.md > ../../../output-markdown-toc.md && cd ../../../
```

Convert the Markdown version of the TOC into HTML using [pandoc](https://pandoc.org/)

```bash
brew install pandoc
pandoc output-markdown-toc.md   --from=gfm -t html -o output-html-toc.html
```

Copy the contents of output-html-toc.html into ./docs/whitepaper.md as indicated here:

```bash
<div class="pdf-only">
    <span style="font-size: 1.5em; font-weight: 700;!important" class="pdf-only">Table of Contents</span>
    <!-- INSERT TOC BELOW HERE -->
</div>
```

### Troubleshooting

If you get an error such as `Chromium revision is not downloaded`), then you are likely using a version of Node.js that isn't supported by md-to-pdf

## Publishing Live Updates to GitHub Pages

Run the following as a GitHub user with commit access to the repo:

```bash
GIT_USER=ltfschoen \
  CURRENT_BRANCH=master \
  USE_SSH=true \
  npm run publish-gh-pages
  # or yarn run publish-gh-pages
```

Reference: https://docusaurus.io/docs/en/publishing
