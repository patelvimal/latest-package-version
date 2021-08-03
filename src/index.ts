import { executeCommand } from "./shell-command"
export function getPackageVersions(names: string[]): Promise<PkgVersionResponse> {
    var versionInfo: any = {};
    if (!names || !names.length) {
        throw "Please specify at least 1 package";
    }
    const promises = names.map(async pkg => {
        const version = await executeCommand(`npm view ${pkg} version json`);
        if (version) {
            versionInfo[`${pkg}`] = `^${version.replace('\n', '')}`;
        }

    })
    return Promise.all(promises).then(() => {
        return {
            output: versionInfo,
            error: null
        }
    }, (error) => {
        return {
            output: null,
            error: error,
        }
    })
}

interface PkgVersionResponse {
    output: JSON | null,
    error: string | null
}