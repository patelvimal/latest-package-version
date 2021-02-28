# package-version

Get latest npm package version for list of packages in a JSON object format

# Install

```sh
$ npm install --save package-version
```


## Usage Typescript

```js
import { getPackageVersions } from 'package-version';

(async function getVersions () {
    const result = await getPackageVersions(['vue','@angular/core','react']);
    console.log(result);
})();
```


## Usage Javascript

```js
const pkg = require('package-version');

(async function getVersions () {
    const result = await pkg.getPackageVersions(['vue','@angular/core','@angular/cli','react','react-dom']);
    console.log(result);
})();

```

It will give you result in json format like below:
```
{
  '"@angular/core"': '^11.2.3',
  '"vue"': '^2.6.12',
  '"react"': '^17.0.1'
}
```

## License

The MIT License (MIT)
