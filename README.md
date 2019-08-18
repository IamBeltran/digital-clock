# Digital Clock

Digital Clock is a dummy Electron application that displays the current time

## Tasks

- **start:** `npm start` Run electron
- **dist:** `npm run dist` To package in a distributable format
- **realease:** `npm run release` To package and publish in a distributable format

## Prerequisites to publishing (Only Github):

1. Specify repository field in package.json file
```bash
  "repository": {
    "type": "git",
    "url": "git+https://github.com/<usename>/<repository>"
  },
```
2. Change in the field build the information of your repository in package.json file
```bash
  "build": {
    ...
    "publish": [
      {
        "provider": "github",
        "repo": "<repository-name>",
        "owner": "<user-name>",
        "private": false
      }
    ],
    ...
  }
```
3. Create a personal access token [GitHub Access Token](https://github.com/settings/tokens/new)
4. Set the repo scope/permission for access token
5. Create `.env` file
6. Set the access token in `.env` `GH_TOKEN=<new_access_token>`

## Publishing

If you app (code) have new release and you want publishing follow this steps

1. Create a [Draft a new release](https://help.github.com/en/articles/creating-releases)
2. Set the “Tag version” to the value of version,
**Important** the "Release title" with prefix v, for example v1.0.0
3. Save as **draft** not as release
