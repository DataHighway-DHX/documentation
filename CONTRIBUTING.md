## Pull Requests

Authors or Pull Requests (PRs) should first merge into the 'develop' branch then reviewers will merge into 'master' branch upon approval.

## Publishing Live Updates to GitHub Pages

Run the following as a GitHub user with commit access to the repo:

```bash
GIT_USER=<GIT_USER> \
  CURRENT_BRANCH=master \
  USE_SSH=true \
  npm run publish-gh-pages
  # or yarn run publish-gh-pages
```

Reference: https://docusaurus.io/docs/en/publishing