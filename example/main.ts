import { getPackageVersions } from '../src/index';

(async function getVersions() {
    const { output: result, error } = await getPackageVersions(['react', 'vue']);
    console.log(result, error);
})();
