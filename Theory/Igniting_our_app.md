- What is npm?

npm is a package manager also known widely among developers as Node Package Manager. But originally npm does not have any full form. It is a standard repository that hosts all the pachages that we use in out application.

- What is parcel/webpack? Why do we need it?

Parcel/Webpack is a npm package that bundles our application and hosts on the server. It offers features like HMR (Hot Module Replacement) and caching. Which allows developers to see the changes done to code reflected right away in the application. It has the file detection algorithm that is written in C++ language.

- What is parcel cache?

Parcel cache stores the application build in memory, so that when any changes are made to the code the new build is made available faster as only the changed part needs to be updated and the remaining is already available in the cache.

- What is npx?

Like npm is used for installing and managing the packages, npx is used for executing the packages right away.

- What is difference between dependencies and devDevendencies?

Some dependencies that we install in our application are needed only for development reasons, for example, parcel is only needed in developpment environment to make the development easier by making faster builds and quick HMR changes on the application. Whereas some other depencies are needed for development as well as produciton environment. For example, react, react-dom are dependencies that are very crucial for rendering our code on the application. devDependencies are added by using -D when using npm install command. The dependencies installed without -D will be considered normal dependencies.

- What is tree shaking?

Tree shaking is a technique useing in bundling packages like parcel. This is used to remove the unused code from the bundle to reduce the final size of bundled application. It works by statically analyzing the code to determine which parts are actually used and which can be safely discarded.

- What is Hot Module Replacemenet?

When we are working on react application. As soon as we make any changes to the application, the changes get reflected to the application. This features happens because of HMR provided by parcel. Parcel is constantly monitoring all files ued in our application. Whenever there is any change it creates a new build by checking the cache and updates the changes in our live application.

- What is gitignore? What we should and should not add into it?

gitignore file contains the files that should be ignored when making any commit to the repository. Any code that can be easily generated again should not be pushed to git. Such files will be added in gitignore. For example, if we have package.json file, we can regenerate all the node modules in our application. In this case, we need not push the node modules in the git. So we will add /node_modules in the gitignore file. Any code that cant be regenerated. Like any component we have created needs to but pushed to git and hence wont be added in gitignore.

- What is difference between package.json and package-lock.json?

package.json is the configuration file for npm. In contains all the dependencies and the packages that we have installed in out application. However it comes with caret versions of the dependenceis. For example, if we installed ^v1.0.1 and tomorrow the package gets updated to v1.0.2 , the new latest version will be used as long as it is not changing to v2.
package-lock.json contains all the cuurently used versions in out application. For example package.json can contain ^v.1.0.1 even when current version in use is v1.0.3. However, the package-lock.json will contain the currently in use version v.1.0.3. This will give developers idea as to which exact version is being used.

- What is node modules? Is it good idea to push it to git?

Node modules is the folder that is created when we install any dependency. Each dependency can have their own dependencies that are needed for the package to run as expected. Node modules will contain all these packages and dependencies. Once the dependency is installed it will be available in the package.json file along with the version which is installed. So, node modules can be regenerated and hence need not be pushed to git.

- What is dist folder?

When we build our application using parcel. It bundles all the code that we have into smaller conpressed version. This will be available in the form of 3 files, one html, on css and one js. When our application is hosted on server, say localhost:3000. It is this bundled code that is being hosted.

- What is browserlists?

Browserlists is the list of browsers that we want our application to gauranteed support. Mostly 2 latest version are better to be included as it keeps the build small. Howeever for govt websites supporting all version might be necessary.

- List 5 superpowers of parcel

Dev build: creates build for development
local server: hosts our application on localhost
HMR - Hot module replacement is responsible for the instant code changes being reflected on app
File watching algorithm written in c++
Caching - faster builds
image optimization
Minification
Bundling
Compress
Consistent Hashing
Code splitting
Error handling
Https - use npx parcel index.html --https
Tree shaking
Different dev and prod builds - use npx parcel build index.html
