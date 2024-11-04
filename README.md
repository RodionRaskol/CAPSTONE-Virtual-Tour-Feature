# CAPSTONE-Virtual-Tour-Feature
Virtual Tour for DLSUD

Prerequisites:
- Node.js
- vite build tool

Steps:

1. Make a Folder (e.g. CAPSTONE: Virtual Tour)
2. Put everything inside the Folder (html, css, js, images)
3. Open in VScode
4. Open Terminal
5. Install a build tool, in my case I used vite build tool
   - In Terminal put this, npm install vite --save-dev

*You will know if you have a build tool installed if you open package.json and see this:
"devDependencies": {
    "vite": "^5.4.9"
  }

*If you see references then you have it installed, if you want to see which version or just to make sure: npx vite --version

6. In terminal, put this: npm install @photo-sphere-viewer/core
*You will get the core package of Photo Sphere Viewer, which includes the essential functionality needed to display and interact with 360° images. However, plugins are not included by default.

7. Afterwards, to use the plugins, you need to individually install the plugins (refer to documentation to better understand)
   For marker plugin:
   npm install @photo-sphere-viewer/markers-plugin

   For virtual tour plugin:
   npm install @photo-sphere-viewer/virtual-tour-plugin


Your project folder should now look like this:
  
Make Sure main.js is in the /src Folder
Vite expects your JavaScript files to be inside a src folder by default. Move your main.js file to src/main.js if it's not there already. The project structure should look like this:

virtual-tour-test/
├── index.html
├── package.json
├── node_modules/
├── src/
│   └── main.js      <-- Your JavaScript file goes here


8. To run the program using the build tool, do this:
   npm run dev  /*there is a set of clear instructions, you just have to pick the browser one /*
 
  
