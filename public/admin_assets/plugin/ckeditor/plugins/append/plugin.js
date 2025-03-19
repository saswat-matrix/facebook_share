CKEDITOR.plugins.add( 'append', {
    icons 	: 'append',
    init 	: function( editor ) {
        editor.addCommand( 'insertAppend', {
            exec        : function(editor) {
                var domData         = '';
                if(typeof $clipboardData !== null 
                    && typeof $clipboardData !== 'undefined'
                    && $clipboardData !== '')
                {
                    range               = editor.getSelection().getRanges()[0];
                    if(typeof range !== null && typeof range !== undefined)
                    {
                        if(range.startContainer.getName() == 'body')
                        {
                            var element = CKEDITOR.dom.element.createFromHtml($clipboardData);
                            editor.insertElement(element);
                        }
                        else if(range.startContainer.getName() == 'p')
                        {
                            editor.editable().insertHtml($clipboardData);
                        }
                        else
                        {
                            editor.editable().insertHtml($clipboardData);
                        }
                    }
                }
            }
        });
        editor.keystrokeHandler.keystrokes[CKEDITOR.ALT + 65 /* A */] = 'insertAppend';
        editor.ui.addButton( 'Append', {
            label       : 'Append the copied content',
            command     : 'insertAppend',
            toolbar     : 'insert'
        });
    }
});