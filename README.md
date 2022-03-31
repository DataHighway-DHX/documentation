![CI](https://github.com/DataHighway-DHX/documentation/workflows/CI/badge.svg?branch=develop)

# DataHighway Documentation

Welcome to the DataHighway Developer Hub documentation. We're just getting started, so our documentation is still incomplete.

## Contributing

Refer to <a href="./CONTRIBUTING.md" target="_blank" class="pretty-link pretty-link-colored" style="">CONTRIBUTING.md</a> for details about:
* Creating Issues
* Creating Pull Requests

## Maintenance

Refer to <a href="./MAINTENANCE.md" target="_blank" class="pretty-link pretty-link-colored" style="">MAINTENANCE.md</a> for details about:
* Updating the DataHighway Whitepaper
* Updating the DataHighway Documentation Website
* Deploying updates

### Running & Viewing Documentation Locally

Install Node >=12.13.0, then run the following commands to install dependencies and start build the website.
_Optionally_ Obtain [Algolia API](https://www.algolia.com/) keys to enable "search". Run the following, then paste them in the .env file.
```bash
cp .env.example .env
```

Run the following commands to install dependencies and start build the website.

```bash
yarn install && yarn start
```

View in web browser http://localhost:3000

### Adding a New Document

* Create your markdown document in a suitable directory inside /docs.
* If you have images in your document, put them in the /docs/images/ directory.
