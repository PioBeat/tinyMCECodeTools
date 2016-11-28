tinymce.PluginManager.add('preCode', function (editor, url) {
//    console.log("URL=", url + '/dialog.html');
    function showDialog() {
        var selectedNode = editor.selection.getNode();
    }
    // Add a button that opens a window
    editor.addButton('preCode', {
        id: 'preCodeID',
        text: '<pre>',
        icon: true,
        image: url + "/img/preCode.jpg",
        onclick: function () {
            editor.windowManager.open({
                title: "Insert code element",
//                file: url + '/dialog.html',
                width: 450,
                height: 400,
                inline: 1,
                buttons: [
                    {
                        text: "Ok",
                        onclick: 'submit'},
                    {
                        text: 'Close',
                        onclick: 'close'
                    }],
                onsubmit: function (e) {
                    // Insert content when the window form is submitted 
                    console.log("form", e);
                    var c = editor.codeareaContent;
                    console.log("content=", c);
                }
            }, {
                arg1: editor
            });
        },
    });

    // Adds a menu item to the tools menu
    editor.addMenuItem('preCode', {
        text: 'preCode Plugin',
        context: 'tools',
        onclick: function () {
            // Open window with a specific url
            editor.windowManager.open({
                title: 'TinyMCE site',
                url: 'http://www.tinymce.com',
                width: 800,
                height: 600,
                buttons: [{
                        text: 'Close',
                        onclick: 'close'
                    }]
            });
        }
    });
});