import { exec, ExecOptions } from 'child_process';

export async function executeCommand(
    command: string,
    options: ExecOptions = {}
): Promise<string> {
    const childProcess: any = exec(command, options)
    let versionInfo: string;
    process.on('exit', () => childProcess.kill())

    return new Promise<string>((res) => {

        childProcess.stdout.on('data', (data: any) => {
            //process.stdout.write(data);
            versionInfo = data;
        })

        childProcess.stderr.on('data', (err: any) => {
            process.stderr.write(err)
        })

        childProcess.on('close', (code: any) => {
            res(versionInfo);
        })
    })
}