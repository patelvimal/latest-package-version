import { exec, ExecOptions } from 'child_process';

export async function executeCommand(
    command: string,
    options: ExecOptions = {}
): Promise<string> {
    const childProcess: any = exec(command, options)
    let versionInfo: string;
    let error: string;
    process.on('exit', () => childProcess.kill())

    return new Promise<string>((resolve,reject) => {

        childProcess.stdout.on('data', (data: any) => {
            versionInfo = data.toString();
        })

        childProcess.stderr.on('data', (err: any) => {
            console.log(err);
            error = err;
        })

        childProcess.on('close', (code: any) => {
            if (code == 0) {
                resolve(versionInfo);
            } else {
                reject(error);
            }
        })
    })
}