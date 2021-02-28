const pkg = require('../dist/index.min');

(async function getVersions () {
    const result = await pkg.getPackageVersions(['vue','@angular/core','@angular/cli','react','react-dom']);
    console.log(result);
})();
