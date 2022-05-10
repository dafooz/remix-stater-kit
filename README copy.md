![GitHub release (latest by date)](https://img.shields.io/github/v/release/dafooz/remix_bundle?display_name=tag&style=social)
![Vercel](https://vercelbadge.vercel.app/api/dafooz/remix_bundle)

# Welcome to Remix Bundles!

- [Remix Docs](https://remix.run/docs)

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

### Commit linting

Each commit goes to a [pre-commit hook](https://github.com/mathieudutour/github-tag-action) in order to check the wording of the commit (https://commitlint.js.org/#/) forcing the developer to follow the [semantic release](https://github.com/semantic-release/semantic-release) guidelines.

This is to make sure the versions of the releases are bump accordinngly as there is a github action takingn care of the [releases versioning](https://github.com/mathieudutour/github-tag-action).

The possible commit types are:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

And the rules for the commit message are:

- the subject contains succinct description of the change,
- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

In the end, each commit message should follow the format:

```
<TYPE>: your commit message
```

More about [commit guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).
More about [semantic release](https://github.com/semantic-release/semantic-release).
More about the [pre-commit hook](https://github.com/mathieudutour/github-tag-action)

## Used 3rd party libs

### Forms

- https://react-hook-form.com/

### Authentication

- https://github.com/sergiodxa/remix-auth && https://www.npmjs.com/package/remix-auth-google

### Logging

- https://docs.logtail.com/

### Chakra UI

- https://chakra-ui.com/docs/form/input
- https://github.com/anubra266/choc-autocomplete

### Nanoid

- https://github.com/ai/Nanoid

## Ressources

### Remix examples

- https://github.com/remix-run/remix/tree/main/examples

### Dark mode toggle via cookies + more cookie management read

- https://rossmoody.com/writing/remix-stitches#winning-attempt-3
- https://remix-cookbook.com/dark-mode-toggle-with-remix-resource-routes-and-dynamic-css

### React hook form

- https://codesandbox.io/s/react-hook-form-validationschema-v7-ts-eb41q?file=/src/index.tsx:812-845
- https://www.npmjs.com/package/@hookform/resolvers
- https://react-hook-form.com/api/useform/register#example
- https://react-hook-form.com/faqs#Howtosharerefusage

## Other interesting but not used

- https://mantine.dev/theming/dark-theme/
