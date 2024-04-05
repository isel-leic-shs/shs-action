// @ts-ignore
import { getOctokit } from "@actions/github";
// @ts-ignore
// import { getBooleanInput, getInput, setFailed, setOutput, info } from "@actions/core";
//
// async function run(): Promise<void> {
//   try {
//
//     const githubToken = process.env.GITHUB_TOKEN;
//
//     if (!githubToken) {
//       setFailed(
//           "Please add the GITHUB_TOKEN to action env"
//       );
//       return;
//     }
//
//     const exampleInput: string = getInput('exampleInput', {required: true});
//
//     setOutput("exampleOutput", "Hello from GitHub Actions");
//
//     info('Action was successfully')
//   } catch (error) {
//     setFailed((error as any).message)
//
//     const showStackTrace = process.env.SHOW_STACK_TRACE
//     if (showStackTrace === 'true') {
//       throw error
//     }
//   }
// }
//
// run()
