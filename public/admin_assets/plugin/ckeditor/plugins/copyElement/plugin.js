CKEDITOR.plugins.add( 'copyElement', {
    icons 	: 'copyElement',
    init 	: function( editor ) {
        editor.addCommand( 'insertCopyElement', {
            exec        : function(editor) {
                range               = editor.getSelection().getRanges()[0];
                //alert(range.startContainer.getName()); alert(range.endOffset);
                el                  = editor.document.createElement( 'div' );
                el.append(range.cloneContents());
                $clipboardData      =  el.getHtml() + '<p>&nbsp;</p>';
            }
        });
        editor.keystrokeHandler.keystrokes[CKEDITOR.ALT + 67 /* Alt C */] = 'insertCopyElement';
        editor.ui.addButton( 'CopyElement', {
            label       : 'Copy the selected content',
            command     : 'insertCopyElement',
            toolbar     : 'insert'
        });
    }
});