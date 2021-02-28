import { executeCommand } from "./shell-command"
export function getPackageVersions(names: string[]) {
    var versionInfo: any = {};
    const noVersion: string = "0.0.0\n";
    if (!names || !names.length) {
        throw "Please specify at least 1 package";
    }
    const promises = names.map(async pkg => {
        var version = await executeCommand(`npm view ${pkg} version json`);
        versionInfo[`"${pkg}"`] = `^${version.replace('\n', '')}`;
    })
    return Promise.all(promises).then(result => {
        return versionInfo;
    });

}