# Usage

## About
This is a deployment of the Balkan Family Tree application https://balkan.app/FamilyTreeJS served in Github Pages.


## Local development
```docker build .```

Then

```docker compose up -d```

## Updating the tree
The tree file is currently at js/data.json. I'm taking suggestions on moving it out of the repository in favor of a more secure location.

For now check in directly to the `main` branch and a Github Actio nwill deploy your changes. Please make sure to test locally becuase there are no tests in place to check for broken code. If there is enough traction and contribution, we can discuss a workflow for PRs and merges.
