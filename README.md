# NetlifyFunctionsLib

Example of sharing modules between @Netlify Functions.

The example calls two function endpoints each of which call the same npm module and the same shared local module (ie not published to npm and not in node_modules).

This is a no "user build setup" - ie just source JavaScript files no bundling etc.
See netlify docs on [Unbundled Functions](https://docs.netlify.com/functions/build-with-javascript/#unbundled-javascript-function-deploys) for details..

In this example the file shared between functions is in the local npm module `tiny2` found in `function_modules`. 
This contains code to replace spaces in a string with '+'s. It is a modified version of the public `tiny` npm module that deletes spaces. 

# How it works

The Netlify CI and CLI support for npm modules automatically bundles any modules used by a function and deploys them (to AWS Lambda). 
It scans the source for `require` statements (and perhaps eventually, `imports`) and copies the JavaScript files from `node_modules`.

To share local files between function we use the npm support for [local paths](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#local-paths).
For these, npm install creates a symlink in node_modules to the module folder. Fortunately the Netlify spidering seems to be happy with symlinks.

# To run

Simply grab the files locally and `netlify deploy` using the [Netlify CLI](https://docs.netlify.com/cli/get-started/#app) or serve it locally 
(again with the CLI) or set up CI from your clone of this repo.
