# routing-controllers with express demo

1. Install all dependencies:

    `npm install`
    
2. Run the project:

    `npm start`

3. Open in browser:
 
    `http://localhost:3000/posts`

### Using with older versions of node

This project targets ES6. 
You can target ES5, but you'll need to use es6-shim and install its typings.

## launch.json content 
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/build/app.js",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "outFiles": [
                "${workspaceFolder}/build/**/*.js"
            ]
        }
    ]
}