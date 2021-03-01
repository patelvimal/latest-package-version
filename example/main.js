const pkg = require('../dist/index.min');

(async function getVersions () {
    const {output} = await pkg.getPackageVersions(['vue','@angular/core','@angular/cli','react','react-dom']);
    console.log(output);
})();
