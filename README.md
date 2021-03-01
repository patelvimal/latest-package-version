# latest-package-version

Get latest npm package version for list of packages in a JSON object format.
<br/>
Please note this will give you the latest package version based on NPM registry you have configured in your operating system.
If you have configured a private NPM registry then it will give you the latest version which is available in that registry.

## 🌟 Install

```sh
$ npm install -D latest-package-version
```


## 🔨 Usage Typescript

```js
import { getPackageVersions } from 'package-version';
(async function getVersions() {
    const { output, error } = await getPackageVersions(['react', 'vue']);
    console.log(output);
})();

```


## 🔨 Usage Javascript

```js
const pkg = require('package-version');

(async function getVersions () {
    const {output} = await pkg.getPackageVersions(['vue','@angular/core','react']);
    console.log(output);
})();


```

### ✔️ It will give you result in json format like below:
```
{
  output: {
    '"vue"': '^2.6.12',
    '"react"': '^17.0.1',
    '"@angular/core"': '^11.2.3'
  },
  error: null
}
```
✔️ If you passed an npm package which is not available in NPM registry then in the response you will following result.
```
{
  output: null,
  error: "npm ERR! 404 'reactz' is not in the npm registry.\n" +
    'npm ERR! 404 You should bug the author to publish it\n' +
    'npm ERR! 404 (or use the name yourself!)\n' +
    'npm ERR! 404 \n' +
    'npm ERR! 404 Note that you can also install from a\n' +
    'npm ERR! 404 tarball, folder, http url, or git url.\n' +
    'npm ERR! 404 \n' +
    "npm ERR! 404  'reactz@latest' is not in the npm registry.\n"
}
```

## License

The MIT License (MIT)
