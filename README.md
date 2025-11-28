# GondolaLibreryFront

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/aWLeYkY6bS)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve gondola-librery-front
```

To create a production bundle:

```sh
npx nx build gondola-librery-front
```

To see all available targets to run for a project, run:

```sh
npx nx show project gondola-librery-front
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

```
gondola-lib-front
├─ .editorconfig
├─ .nx
│  ├─ cache
│  │  ├─ run.json
│  │  └─ terminalOutputs
│  │     ├─ 10637198028036189642
│  │     ├─ 11014875527197205113
│  │     ├─ 16395764265081818391
│  │     ├─ 2674751909129825596
│  │     └─ 8451367413607980632
│  └─ workspace-data
│     ├─ d
│     │  ├─ daemon.log
│     │  └─ server-process.json
│     ├─ d7f5de043ed1481d900262ae26496793.db
│     ├─ d7f5de043ed1481d900262ae26496793.db-shm
│     ├─ d7f5de043ed1481d900262ae26496793.db-wal
│     ├─ file-map.json
│     ├─ lockfile-dependencies.hash
│     ├─ lockfile-nodes.hash
│     ├─ nx_files.nxt
│     ├─ parsed-lock-file.dependencies.json
│     ├─ parsed-lock-file.nodes.json
│     ├─ project-graph.json
│     └─ source-maps.json
├─ .prettierignore
├─ .prettierrc
├─ README.md
├─ apps
│  └─ gondola-librery-front
│     ├─ eslint.config.mjs
│     ├─ project.json
│     ├─ public
│     │  └─ favicon.ico
│     ├─ src
│     │  ├─ app
│     │  │  ├─ app.config.ts
│     │  │  ├─ app.css
│     │  │  ├─ app.html
│     │  │  ├─ app.routes.ts
│     │  │  ├─ app.ts
│     │  │  ├─ componentes-v16.ts
│     │  │  ├─ data-v120
│     │  │  ├─ data-v16
│     │  │  ├─ data-v17
│     │  │  │  └─ constantes-v17.ts
│     │  │  ├─ data-v18
│     │  │  └─ data-v19
│     │  ├─ index.html
│     │  ├─ main.ts
│     │  └─ styles.css
│     ├─ tsconfig.app.json
│     └─ tsconfig.json
├─ bitbucket-pipelines.yml
├─ build-all.js
├─ eslint.config.mjs
├─ libs
│  └─ ui
│     ├─ v16
│     │  ├─ README.md
│     │  ├─ eslint.config.mjs
│     │  ├─ ng-package.json
│     │  ├─ package-lock.json
│     │  ├─ package.json
│     │  ├─ project.json
│     │  ├─ src
│     │  │  ├─ index.ts
│     │  │  └─ lib
│     │  │     └─ shared-ui-components-v16
│     │  │        ├─ shared-ui-components-v16.css
│     │  │        ├─ shared-ui-components-v16.html
│     │  │        └─ shared-ui-components-v16.ts
│     │  ├─ tsconfig.json
│     │  ├─ tsconfig.lib.json
│     │  └─ tsconfig.lib.prod.json
│     ├─ v17
│     │  ├─ README.md
│     │  ├─ eslint.config.mjs
│     │  ├─ ng-package.json
│     │  ├─ package.json
│     │  ├─ project.json
│     │  ├─ src
│     │  │  ├─ index.ts
│     │  │  └─ lib
│     │  │     ├─ custom-icons
│     │  │     │  ├─ custom-icons.component.html
│     │  │     │  ├─ custom-icons.component.scss
│     │  │     │  └─ custom-icons.component.ts
│     │  │     ├─ gondola-buttons
│     │  │     │  ├─ gondola-buttons.component.html
│     │  │     │  ├─ gondola-buttons.component.scss
│     │  │     │  └─ gondola-buttons.component.ts
│     │  │     ├─ gondola-calendar
│     │  │     │  ├─ gondola-calendar.component.html
│     │  │     │  ├─ gondola-calendar.component.scss
│     │  │     │  └─ gondola-calendar.component.ts
│     │  │     ├─ gondola-checkbox
│     │  │     │  ├─ gondola-checkbox.component.html
│     │  │     │  ├─ gondola-checkbox.component.scss
│     │  │     │  └─ gondola-checkbox.component.ts
│     │  │     ├─ gondola-double-calendar
│     │  │     │  ├─ gondola-double-calendar.component.html
│     │  │     │  ├─ gondola-double-calendar.component.scss
│     │  │     │  └─ gondola-double-calendar.component.ts
│     │  │     ├─ gondola-dropdown
│     │  │     │  ├─ gondola-dropdown.component.html
│     │  │     │  ├─ gondola-dropdown.component.scss
│     │  │     │  └─ gondola-dropdown.component.ts
│     │  │     ├─ gondola-inputfile
│     │  │     │  ├─ gondola-inputfile.component.html
│     │  │     │  ├─ gondola-inputfile.component.scss
│     │  │     │  └─ gondola-inputfile.component.ts
│     │  │     ├─ gondola-inputnumber
│     │  │     │  ├─ gondola-inputnumber.component.html
│     │  │     │  ├─ gondola-inputnumber.component.scss
│     │  │     │  └─ gondola-inputnumber.component.ts
│     │  │     ├─ gondola-inputtext
│     │  │     │  ├─ gondola-inputtext.component.html
│     │  │     │  ├─ gondola-inputtext.component.scss
│     │  │     │  └─ gondola-inputtext.component.ts
│     │  │     ├─ gondola-multiselect
│     │  │     │  ├─ gondola-multiselect.component.html
│     │  │     │  ├─ gondola-multiselect.component.scss
│     │  │     │  └─ gondola-multiselect.component.ts
│     │  │     ├─ gondola-textarea
│     │  │     │  ├─ gondola-textarea.component.html
│     │  │     │  ├─ gondola-textarea.component.scss
│     │  │     │  └─ gondola-textarea.component.ts
│     │  │     ├─ input-incremental-value
│     │  │     │  ├─ input-incremental-value.component.html
│     │  │     │  ├─ input-incremental-value.component.scss
│     │  │     │  └─ input-incremental-value.component.ts
│     │  │     ├─ shared-directives
│     │  │     │  ├─ conditional-display.directive.ts
│     │  │     │  ├─ gondola-button-rounded.directive.ts
│     │  │     │  ├─ gondola-input-fecha.directive.ts
│     │  │     │  ├─ gondola-input-number.directive.ts
│     │  │     │  ├─ gondola-input-select.directive.ts
│     │  │     │  ├─ gondola-input-text.directive.ts
│     │  │     │  ├─ gondola-input-textArea.directive.ts
│     │  │     │  ├─ gondola-steper.directive.ts
│     │  │     │  ├─ gondola-table-column.directive.ts
│     │  │     │  └─ index.ts
│     │  │     └─ shared-ui-components-v17
│     │  │        ├─ shared-ui-components-v17.css
│     │  │        ├─ shared-ui-components-v17.html
│     │  │        └─ shared-ui-components-v17.ts
│     │  ├─ tsconfig.json
│     │  ├─ tsconfig.lib.json
│     │  └─ tsconfig.lib.prod.json
│     ├─ v18
│     │  ├─ README.md
│     │  ├─ eslint.config.mjs
│     │  ├─ ng-package.json
│     │  ├─ package.json
│     │  ├─ project.json
│     │  ├─ src
│     │  │  ├─ index.ts
│     │  │  └─ lib
│     │  │     └─ shared-ui-components-v18
│     │  │        ├─ shared-ui-components-v18.css
│     │  │        ├─ shared-ui-components-v18.html
│     │  │        └─ shared-ui-components-v18.ts
│     │  ├─ tsconfig.json
│     │  ├─ tsconfig.lib.json
│     │  └─ tsconfig.lib.prod.json
│     ├─ v19
│     │  ├─ README.md
│     │  ├─ eslint.config.mjs
│     │  ├─ ng-package.json
│     │  ├─ package.json
│     │  ├─ project.json
│     │  ├─ src
│     │  │  ├─ index.ts
│     │  │  └─ lib
│     │  │     └─ shared-ui-components-v19
│     │  │        ├─ shared-ui-components-v19.css
│     │  │        ├─ shared-ui-components-v19.html
│     │  │        └─ shared-ui-components-v19.ts
│     │  ├─ tsconfig.json
│     │  ├─ tsconfig.lib.json
│     │  └─ tsconfig.lib.prod.json
│     └─ v20
│        ├─ README.md
│        ├─ eslint.config.mjs
│        ├─ ng-package.json
│        ├─ package-lock.json
│        ├─ package.json
│        ├─ project.json
│        ├─ src
│        │  ├─ index.ts
│        │  └─ lib
│        │     └─ shared-ui-components-v20
│        │        ├─ shared-ui-components-v20.css
│        │        ├─ shared-ui-components-v20.html
│        │        └─ shared-ui-components-v20.ts
│        ├─ tsconfig.json
│        ├─ tsconfig.lib.json
│        └─ tsconfig.lib.prod.json
├─ nx.json
├─ package-lock.json
├─ package.json
├─ publish-all.js
├─ tailwind
│  ├─ plugins
│  │  ├─ icon-size.js
│  │  ├─ theming.js
│  │  └─ utilities.js
│  ├─ user-themes.scss
│  └─ utils
│     ├─ generate-contrasts.js
│     ├─ generate-palette.js
│     └─ json-to-sass-map.js
├─ tailwind.config.js
└─ tsconfig.base.json

```
```
gondola-lib-front
├─ .editorconfig
├─ .nx
│  ├─ cache
│  │  ├─ run.json
│  │  └─ terminalOutputs
│  │     ├─ 10637198028036189642
│  │     ├─ 11014875527197205113
│  │     ├─ 16395764265081818391
│  │     ├─ 2674751909129825596
│  │     └─ 8451367413607980632
│  └─ workspace-data
│     ├─ d
│     │  ├─ daemon.log
│     │  └─ server-process.json
│     ├─ d7f5de043ed1481d900262ae26496793.db
│     ├─ d7f5de043ed1481d900262ae26496793.db-shm
│     ├─ d7f5de043ed1481d900262ae26496793.db-wal
│     ├─ file-map.json
│     ├─ lockfile-dependencies.hash
│     ├─ lockfile-nodes.hash
│     ├─ nx_files.nxt
│     ├─ parsed-lock-file.dependencies.json
│     ├─ parsed-lock-file.nodes.json
│     ├─ project-graph.json
│     └─ source-maps.json
├─ .prettierignore
├─ .prettierrc
├─ README.md
├─ apps
│  └─ gondola-librery-front
│     ├─ eslint.config.mjs
│     ├─ project.json
│     ├─ public
│     │  └─ favicon.ico
│     ├─ src
│     │  ├─ app
│     │  │  ├─ app.config.ts
│     │  │  ├─ app.css
│     │  │  ├─ app.html
│     │  │  ├─ app.routes.ts
│     │  │  ├─ app.ts
│     │  │  ├─ componentes-v16.ts
│     │  │  ├─ data-v120
│     │  │  ├─ data-v16
│     │  │  ├─ data-v17
│     │  │  │  └─ constantes-v17.ts
│     │  │  ├─ data-v18
│     │  │  └─ data-v19
│     │  ├─ index.html
│     │  ├─ main.ts
│     │  └─ styles.css
│     ├─ tsconfig.app.json
│     └─ tsconfig.json
├─ bitbucket-pipelines.yml
├─ build-all.js
├─ eslint.config.mjs
├─ libs
│  └─ ui
│     ├─ v16
│     │  ├─ README.md
│     │  ├─ eslint.config.mjs
│     │  ├─ ng-package.json
│     │  ├─ package-lock.json
│     │  ├─ package.json
│     │  ├─ project.json
│     │  ├─ src
│     │  │  ├─ index.ts
│     │  │  └─ lib
│     │  │     └─ shared-ui-components-v16
│     │  │        ├─ shared-ui-components-v16.css
│     │  │        ├─ shared-ui-components-v16.html
│     │  │        └─ shared-ui-components-v16.ts
│     │  ├─ tsconfig.json
│     │  ├─ tsconfig.lib.json
│     │  └─ tsconfig.lib.prod.json
│     ├─ v17
│     │  ├─ README.md
│     │  ├─ eslint.config.mjs
│     │  ├─ ng-package.json
│     │  ├─ package.json
│     │  ├─ project.json
│     │  ├─ src
│     │  │  ├─ index.ts
│     │  │  └─ lib
│     │  │     ├─ custom-icons
│     │  │     │  ├─ custom-icons.component.html
│     │  │     │  ├─ custom-icons.component.scss
│     │  │     │  └─ custom-icons.component.ts
│     │  │     ├─ gondola-buttons
│     │  │     │  ├─ gondola-buttons.component.html
│     │  │     │  ├─ gondola-buttons.component.scss
│     │  │     │  └─ gondola-buttons.component.ts
│     │  │     ├─ gondola-calendar
│     │  │     │  ├─ gondola-calendar.component.html
│     │  │     │  ├─ gondola-calendar.component.scss
│     │  │     │  └─ gondola-calendar.component.ts
│     │  │     ├─ gondola-checkbox
│     │  │     │  ├─ gondola-checkbox.component.html
│     │  │     │  ├─ gondola-checkbox.component.scss
│     │  │     │  └─ gondola-checkbox.component.ts
│     │  │     ├─ gondola-double-calendar
│     │  │     │  ├─ gondola-double-calendar.component.html
│     │  │     │  ├─ gondola-double-calendar.component.scss
│     │  │     │  └─ gondola-double-calendar.component.ts
│     │  │     ├─ gondola-dropdown
│     │  │     │  ├─ gondola-dropdown.component.html
│     │  │     │  ├─ gondola-dropdown.component.scss
│     │  │     │  └─ gondola-dropdown.component.ts
│     │  │     ├─ gondola-inputfile
│     │  │     │  ├─ gondola-inputfile.component.html
│     │  │     │  ├─ gondola-inputfile.component.scss
│     │  │     │  └─ gondola-inputfile.component.ts
│     │  │     ├─ gondola-inputnumber
│     │  │     │  ├─ gondola-inputnumber.component.html
│     │  │     │  ├─ gondola-inputnumber.component.scss
│     │  │     │  └─ gondola-inputnumber.component.ts
│     │  │     ├─ gondola-inputtext
│     │  │     │  ├─ gondola-inputtext.component.html
│     │  │     │  ├─ gondola-inputtext.component.scss
│     │  │     │  └─ gondola-inputtext.component.ts
│     │  │     ├─ gondola-multiselect
│     │  │     │  ├─ gondola-multiselect.component.html
│     │  │     │  ├─ gondola-multiselect.component.scss
│     │  │     │  └─ gondola-multiselect.component.ts
│     │  │     ├─ gondola-textarea
│     │  │     │  ├─ gondola-textarea.component.html
│     │  │     │  ├─ gondola-textarea.component.scss
│     │  │     │  └─ gondola-textarea.component.ts
│     │  │     ├─ input-incremental-value
│     │  │     │  ├─ input-incremental-value.component.html
│     │  │     │  ├─ input-incremental-value.component.scss
│     │  │     │  └─ input-incremental-value.component.ts
│     │  │     ├─ shared-directives
│     │  │     │  ├─ conditional-display.directive.ts
│     │  │     │  ├─ gondola-button-rounded.directive.ts
│     │  │     │  ├─ gondola-input-fecha.directive.ts
│     │  │     │  ├─ gondola-input-number.directive.ts
│     │  │     │  ├─ gondola-input-select.directive.ts
│     │  │     │  ├─ gondola-input-text.directive.ts
│     │  │     │  ├─ gondola-input-textArea.directive.ts
│     │  │     │  ├─ gondola-steper.directive.ts
│     │  │     │  ├─ gondola-table-column.directive.ts
│     │  │     │  └─ index.ts
│     │  │     └─ shared-ui-components-v17
│     │  │        ├─ shared-ui-components-v17.css
│     │  │        ├─ shared-ui-components-v17.html
│     │  │        └─ shared-ui-components-v17.ts
│     │  ├─ tsconfig.json
│     │  ├─ tsconfig.lib.json
│     │  └─ tsconfig.lib.prod.json
│     ├─ v18
│     │  ├─ README.md
│     │  ├─ eslint.config.mjs
│     │  ├─ ng-package.json
│     │  ├─ package.json
│     │  ├─ project.json
│     │  ├─ src
│     │  │  ├─ index.ts
│     │  │  └─ lib
│     │  │     └─ shared-ui-components-v18
│     │  │        ├─ shared-ui-components-v18.css
│     │  │        ├─ shared-ui-components-v18.html
│     │  │        └─ shared-ui-components-v18.ts
│     │  ├─ tsconfig.json
│     │  ├─ tsconfig.lib.json
│     │  └─ tsconfig.lib.prod.json
│     ├─ v19
│     │  ├─ README.md
│     │  ├─ eslint.config.mjs
│     │  ├─ ng-package.json
│     │  ├─ package.json
│     │  ├─ project.json
│     │  ├─ src
│     │  │  ├─ index.ts
│     │  │  └─ lib
│     │  │     └─ shared-ui-components-v19
│     │  │        ├─ shared-ui-components-v19.css
│     │  │        ├─ shared-ui-components-v19.html
│     │  │        └─ shared-ui-components-v19.ts
│     │  ├─ tsconfig.json
│     │  ├─ tsconfig.lib.json
│     │  └─ tsconfig.lib.prod.json
│     └─ v20
│        ├─ README.md
│        ├─ eslint.config.mjs
│        ├─ ng-package.json
│        ├─ package-lock.json
│        ├─ package.json
│        ├─ project.json
│        ├─ src
│        │  ├─ index.ts
│        │  └─ lib
│        │     └─ shared-ui-components-v20
│        │        ├─ shared-ui-components-v20.css
│        │        ├─ shared-ui-components-v20.html
│        │        └─ shared-ui-components-v20.ts
│        ├─ tsconfig.json
│        ├─ tsconfig.lib.json
│        └─ tsconfig.lib.prod.json
├─ nx.json
├─ package-lock.json
├─ package.json
├─ publish-all.js
├─ tailwind
│  ├─ plugins
│  │  ├─ icon-size.js
│  │  ├─ theming.js
│  │  └─ utilities.js
│  ├─ user-themes.scss
│  └─ utils
│     ├─ generate-contrasts.js
│     ├─ generate-palette.js
│     └─ json-to-sass-map.js
├─ tailwind.config.js
└─ tsconfig.base.json

```