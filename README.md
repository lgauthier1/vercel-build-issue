# vercel-build-issue
A subset of causes demonstrates a strange issue in the build. The issue occurs when the project is deployed to Vercel (with Vercel CLI 34.1.7). The issue is not reproducible in the local environment.
(More details in the [issue](https://github.com/orgs/vercel/discussions/6714))

15/05/2024 > Issue has been solved by vercel Team ! 

# Install
```bash
npm install
```

# Development
```bash
npm run dev
```

# Deploy 

ℹ️ Keep all the default choices during Vercel setup from the CLI.

```bash
npm run deploy
```

# How to reproduce the issue
1. Clone the repository
2. Run `npm install`
3. Run `npm run deploy`
4. Open the deployed [URL](https://vercel-build-issue.vercel.app/api) 
5. Check build logs, you will see the following error:
[![Build Error](./build-error.png)](./build-error.png)

```bash
[00:39:19.561] Running build in Washington, D.C., USA (East) – iad1
[00:39:19.739] Retrieving list of deployment files...
[00:39:20.209] Downloading 6 deployment files...
[00:39:20.678] Restored build cache
[00:39:20.803] Running "vercel build"
[00:39:21.635] Vercel CLI 34.1.10
[00:39:22.800] Installing dependencies...
[00:39:29.012] npm WARN deprecated uuid@3.3.2: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
[00:39:29.125] npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
[00:39:30.906] 
[00:39:30.907] added 246 packages in 8s
[00:39:30.907] 
[00:39:30.907] 28 packages are looking for funding
[00:39:30.907]   run `npm fund` for details
[00:39:31.519] Build Completed in /vercel/output [9s]
[00:39:31.660] Deploying outputs...
[00:39:31.677]     at qze (/var/task/sandbox.js:427:12920)
[00:39:31.677]     at x8r (/var/task/sandbox.js:429:33497)
[00:39:31.677]     at async Mze (/var/task/sandbox.js:429:33236)
[00:39:31.677]     at async L8r (/var/task/sandbox.js:431:4108)
[00:39:31.677]     at async Qze (/var/task/sandbox.js:431:4952)
[00:39:31.677]     at async k8r (/var/task/sandbox.js:431:1388)
[00:39:31.677]     at async Promise.all (index 4)
[00:39:31.677]     at async R8r (/var/task/sandbox.js:431:479)
[00:39:31.677]     at async zze (/var/task/sandbox.js:429:36120)
[00:39:31.677]     at async h_r (/var/task/sandbox.js:447:2334) {
[00:39:31.677]   idx: 7
[00:39:31.677] }
[00:39:39.466] 
[00:39:39.710] Deployment completed
[00:39:41.868] Uploading build cache [13.28 MB]...
[00:39:42.229] Build cache uploaded: 360.668ms
```
