import { getPackageVersions } from '../src/index';
//const pkg = require('../src/index');

(async function getVersions() {
    const { output, error } = await pkg.getPackageVersions(['react', 'vue']);
    console.log(output, error);
})();
