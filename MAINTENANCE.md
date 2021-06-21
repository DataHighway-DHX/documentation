## Updating the Whitepaper


1. Updating diagrams

Most of the original diagrams that are included in the original v1.0.0 whitepaper were generated with Visual Paradigm, whose source file is .vpd format, and then converted to an image that was stored in the ./assets/images folder and embedded in the generated whitepaper. However some of the diagrams were modified by the MXC marketing team, and these were included in previous version [v1.1.0 whitepaper](https://github.com/DataHighway-DHX/documentation/releases). If you need to update any of the diagrams then please coordinate with the MXC marketing team.

1. Install Node.js v16.3.0

2. Start your development environment

```terminal
npm install && \
npm install -g mr-pdf@v1.0.5 && \
npm start
```

2. Change into folder `./static/whitepapers/economic` folder and run the following to create a new release in PDF format. Replace `v1.2.0` or `v1_2_x` below with the desired version:

```terminal
mr-pdf --initialDocURLs="http://localhost:3000/docs/whitepaper" \
--contentSelector="article" \
--paginationSelector=".pagination-nav__item--next > a" \
--pdfMargin="50,50,50,50" \
--pdfFormat="A4" \
--outputPDFFilename="whitepaper_latest.pdf"

cp ./whitepaper_latest.pdf ./whitepaper_v1_2_x.pdf
```


Important:
* Remove the first few including page 1 that generates text "untitled" and the Table of Contents pages, so the first page starts with "DataHighway's Whitepaper"
* Check it generated the latest PDF to reflect the Markdown changes you made correctly in ./docs/whitepaper.mdx and the copy of it ./static/whitepapers/economic/v1.2.0/whitepaper.pdf.

External links may reference the static location of the latest whitepaper in ./whitepapers/economic/whitepaper_latest.pdf. A copy of each version is stored in a directory with the version name to make it easier for users to find older versions. 

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
