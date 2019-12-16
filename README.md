# DemoSVG
The Demo SVG package

# How to add new icon
* Copy the new icon under asset folder and structure it the way you like
* Run npm run svrg
* Update the src/index.js to include the new icon, eg. ```export Bell2 from './icon/Bell2';```
* Run npm run build
* Commit the change use git, eg. git commit -a -m "message"
* Run npm version [patch | minor | major]
* Run npm publish

Then you could use the new version in another project
