# tinyMCECodeTools
Typesetting Plugins for TinyMCE 4.4.3:
* Embed and edit mathematics with the **LatexEditor**
* Write code with syntax highlighting with **preCode**
* Type nicely formatted keyboard shortcuts with **kbd**

## Description
The idea was to create a computer science oriented plugin toolsuite for the popular WYSIWYG web editor TinyMCE to write articles with mathematics and code more easily and fluently. There wasn't any similiar plugin available so I decided to create a bundle.
With the time there will eventually come more. If you have an idea I would be glad to hear from you! 

## Example 

A complete example webpage can be found in the folder `./test`. There you see the full integreation of the plugin into TinyMCE. 

### Used Libraries

**Bootstrap**
[Bootstrap] (https://getbootstrap.com/) is used for the styling of the dialog windows for the plugin itself. Check out the next section *Quick Installaion* if you want to use your bootstrap CSS.

**Equation Editor** Mathematics can be written in LaTex code. The plugin uses the Equation Editor from [CodeCogs] (http://latex.codecogs.com/index.php). It's easy to use - the LaTex Code gets transformed to an image and no extra library is needed. Con: no offline usage because internet connection needed.



## Quick Installation

You can build all sources by yourself but if you want to start right away the following quick start option is available:
Download the latest release here (archive in folder `./dist`) and follow the instructions below.

### Easy Way with final version
1. Install the [Tiny MCE Editor] (https://www.tinymce.com/)
  * see the docs https://www.tinymce.com/docs/get-started/ on how to configure and use TinyMCE  
2. Find the TinyMCE plugins folder, `~/tinymce/plugins` (where `~/tinymce` is the root directory of the TinyMCE installation) and copy all directories from the archive into it.
3. Integrate TinyMCE into your web page in the normal way.
4. On your web page, locate the **TinyMCE.init** function, and add the following names to the plugins property: 'preCode', 'kbd', 'latexeditor'
  * Do the same with the toolbar property if you want to add buttons of the corresponding plugins in the TinyMCE toolbar 
5. The final code should look like: 
```javascript
  [...]
  
  <textarea id="content"></textarea>
  
  [...]
  
    <script>
        function getBaseURL() {
            return location.protocol + "//" + location.hostname +
                    (location.port && ":" + location.port) + "/";
        }
        tinymce.init({
            selector: '#content',
            plugins: ['kbd', 'preCode', 'latexeditor'],
            toolbar: ['kbd', 'preCode', 'latexeditorButton'],
            jqueryPath: getBaseURL() + "TinyMCECodeToolsPlugins/src/libs/jquery-1.12.3.min.js",
            boostrapCSS: getBaseURL() + "TinyMCECodeToolsPlugins/src/libs/bootstrap.min.css"
        });
    </script>
```
