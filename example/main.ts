import { getPackageVersions } from '../src/index';

(async function getVersions () {
    const result = await getPackageVersions(['vue','@angular/core','react','reacts']);
    console.log(result);
})();
