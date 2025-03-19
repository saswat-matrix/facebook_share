$(document).ready(function(){

    let languageDropdown = document.getElementsByClassName('dropdown-language');
    if (languageDropdown.length) {
        let dropdownItems       = languageDropdown[0].querySelectorAll('.dropdown-item');
        let currentLanguage     = null;
        let selectedLangFlag    = null; 

        for (let i = 0; i < dropdownItems.length; i++) {
            if(dropdownItems[i].getAttribute('class').lastIndexOf('selected') > -1) {
                currentLanguage     = dropdownItems[i].getAttribute('data-language');
                selectedLangFlag    = dropdownItems[i].querySelector('.fi').getAttribute('class');
                let startsWith      = 'fs-',
                    classes         = selectedLangFlag.split(' ').filter(function (v) {
                                            return v.lastIndexOf(startsWith, 0) !== 0;
                                    });
                selectedLangFlag        = classes.join(' ').trim() + ' fs-3';
            }
        }
        languageDropdown[0].querySelector('.dropdown-toggle .fi').className = selectedLangFlag;
    }

    $("[data-status-popup=true]").click(function () {
        var titleTxt    = $(this).attr('data-status-title');
        var messageTxt  = $(this).attr('data-status-message');
        var link        = $(this).attr('data-status-link');
        $('#statusModal-title').html(titleTxt);
        $('#statusModal-message').html(messageTxt);
        $("#statusModal").modal('show');
        $("#statusModal-ok").click(function () {
            window.location.href = link;
        })
        return false;
    });

    $("[data-delete-popup=true]").click(function () {
        var titleTxt    = $(this).attr('data-delete-title');
        var messageTxt  = $(this).attr('data-delete-message');
        var link        = $(this).attr('data-delete-link');
        $('#deleteModal-title').html(titleTxt);
        $('#deleteModal-message').html(messageTxt);
        $("#deleteModal").modal('show');
        $("#deleteModal-ok").click(function () {
            window.location.href = link;
        })
        return false;
    });

    $("[data-read-popup=true]").click(function () {
        var titleTxt    = $(this).attr('data-read-title');
        var messageTxt  = $(this).attr('data-read-message');
        var link        = $(this).attr('data-read-link');
        $('#readModal-title').html(titleTxt);
        $('#readModal-message').html(messageTxt);
        $("#readModal").modal('show');
        $("#readModal-ok").click(function () {
            window.location.href = link;
        })
        return false;
    });
    
    $("[data-seemore-popup=true]").click(function () {
        var titleTxt    = $(this).attr('data-seemore-title');
        var messageTxt  = $(this).attr('data-seemore-message');
        var link        = $(this).attr('data-seemore-link');
        $('#seemoreModal-title').html(titleTxt);
        $('#seemoreModal-message').html(messageTxt);
        $("#seemoreModal").modal('show');
        $("#seemoreBtn").click(function () {
            window.location.href = link;
        })
        return false;
    });
    
    /*
    // Image Validation Banner
    $('#image').on('change', function(){
        if($('#image_size').length > 0 
                && $('#image_width').length > 0 
                && $('#image_height').length > 0) {
            var imageSize   = parseInt($('#image_size').val());         // 512 kb
            var imgW        = parseInt($('#image_width').val());
            var imgH        = parseInt($('#image_height').val());
        } else if ($entity == 'user' || $entity == 'admin' || $entity == 'employee') {
            var imageSize   = (1 * 1048576);       // 1 mb
            var imgW        = 1200;                // 1200 pixel
            var imgH        = 1200;                // 1200 pixel
        } else if($entity == 'banner' || $entity == 'venue') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 1200;
            var imgH        = 800;
        } else if($entity == 'category') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 70;
            var imgH        = 70;
        } else if($entity == 'sport') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 500;
            var imgH        = 500;
        }
        if ($('#image').get(0).files.length  > 0) {
            var mimeType    = document.getElementById('image').files[0].type;
            console.log(mimeType);
            var mimeIs      = mimeType.split("/");
            console.log(mimeIs);
            var sizeinMB    = parseFloat(imageSize / 1048576); //1000000
            if (mimeIs[0] === 'image') {
                // image file is image type, proceed to check image size
                if ($('#image').get(0).files[0].size > imageSize) {
                    //alert('Please upload image within ' + sizeinMB + 'mb');
                    // Displaying error message in modal //
                    var htmlMSG = '<b><span class="msg-text-error">Please upload image within ' + sizeinMB + ' mb</span></b>';
                    $('#imageModal-title').text('Image Validation Error');
                    $('#imageModal-message').html('');
                    $('#imageModal-message').append(htmlMSG);
                    $('#imageModal').modal('show');
                    // resetting image input    
                    reset($('#image'));
                    if ($('#old_image').length > 0) {
                        // edit mode
                        $('#preview_image').attr('src', $('#old_image').data('old_image'));
                    } else {
                        $('#preview_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                    }
                } else {
                    var _URL = window.URL || window.webkitURL;
                    var file = $('#image').get(0).files[0];
                    var img = new Image();
                    img.src = _URL.createObjectURL(file);
                    img.onload = function () {
                        imageWidth = this.width;
                        imageHeight = this.height;

                        if (imageWidth <= parseInt(imgW) && imageHeight <= parseInt(imgH)) {
                            readURL($('#image'), 'preview_image');
                        } else {
                            //alert('Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>');
                            // Displaying error message in modal //
                            var htmlMSG = '<b><span class="msg-text-error">Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>';
                            $('#imageModal-title').text('Image Validation Error');
                            $('#imageModal-message').html('');
                            $('#imageModal-message').append(htmlMSG);
                            $('#imageModal').modal('show');
                            // resetting image input    
                            reset($('#image'));
                            if ($('#old_image').length > 0) {
                                // edit mode
                                $('#preview_image').attr('src', $('#old_image').data('old_image'));
                            } else {
                                $('#preview_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                            }
                        }
                    };
                }

            } else {
                // if file is not image, display error alert message
                //alert('Please, select image file');
                // Displaying error message in modal //
                var htmlMSG = '<b><span class="msg-text-error">Please, select image file</span></b>';
                $('#imageModal-title').text('Image Validation Error');
                $('#imageModal-message').html('');
                $('#imageModal-message').append(htmlMSG);
                $('#imageModal').modal('show');
                // resetting image input    
                reset($('#image'));
                if ($('#old_image').length > 0) {
                    // edit mode
                    $('#preview_image').attr('src', $('#old_image').data('old_image'));
                } else {
                    $('#preview_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                }
            }
        }
    })

    // Image Validation Father
    $('#father_image').on('change', function(){
        if($('#father_image').length > 0 
                && $('#image_width').length > 0 
                && $('#image_height').length > 0) {
            var imageSize   = parseInt($('#image_size').val());         // 512 kb
            var imgW        = parseInt($('#image_width').val());
            var imgH        = parseInt($('#image_height').val());
        } else if ($entity == 'user' || $entity == 'admin' || $entity == 'partner') {
            var imageSize   = (1 * 1048576);       // 1 mb
            var imgW        = 1200;                // 1200 pixel
            var imgH        = 1200;                // 1200 pixel
        } else if($entity == 'banner' || $entity == 'venue') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 1200;
            var imgH        = 800;
        } else if($entity == 'category') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 70;
            var imgH        = 70;
        } else if($entity == 'sport') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 500;
            var imgH        = 500;
        } 
        if ($('#father_image').get(0).files.length  > 0) {
            var mimeType    = document.getElementById('father_image').files[0].type;
            console.log(mimeType);
            var mimeIs      = mimeType.split("/");
            console.log(mimeIs);
            var sizeinMB    = parseFloat(imageSize / 1048576); //1000000
            if (mimeIs[0] === 'image') {
                // image file is image type, proceed to check image size
                if ($('#father_image').get(0).files[0].size > imageSize) {
                    //alert('Please upload image within ' + sizeinMB + 'mb');
                    // Displaying error message in modal //
                    var htmlMSG = '<b><span class="msg-text-error">Please upload image within ' + sizeinMB + ' mb</span></b>';
                    $('#imageModal-title').text('Image Validation Error');
                    $('#imageModal-message').html('');
                    $('#imageModal-message').append(htmlMSG);
                    $('#imageModal').modal('show');
                    // resetting image input    
                    reset($('#father_image'));
                    if ($('#old_father_image').length > 0) {
                        // edit mode
                        $('#preview_father_image').attr('src', $('#old_father_image').data('old_father_image'));
                    } else {
                        $('#preview_father_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                    }
                } else {
                    var _URL = window.URL || window.webkitURL;
                    var file = $('#father_image').get(0).files[0];
                    var img = new Image();
                    img.src = _URL.createObjectURL(file);
                    img.onload = function () {
                        imageWidth = this.width;
                        imageHeight = this.height;

                        if (imageWidth <= parseInt(imgW) && imageHeight <= parseInt(imgH)) {
                            readURL($('#father_image'), 'preview_father_image');
                        } else {
                            //alert('Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>');
                            // Displaying error message in modal //
                            var htmlMSG = '<b><span class="msg-text-error">Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>';
                            $('#imageModal-title').text('Image Validation Error');
                            $('#imageModal-message').html('');
                            $('#imageModal-message').append(htmlMSG);
                            $('#imageModal').modal('show');
                            // resetting image input    
                            reset($('#father_image'));
                            if ($('#old_father_image').length > 0) {
                                // edit mode
                                $('#preview_father_image').attr('src', $('#old_father_image').data('old_father_image'));
                            } else {
                                $('#preview_father_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                            }
                        }
                    };
                }

            } else {
                // if file is not image, display error alert message
                //alert('Please, select image file');
                // Displaying error message in modal //
                var htmlMSG = '<b><span class="msg-text-error">Please, select image file</span></b>';
                $('#imageModal-title').text('Image Validation Error');
                $('#imageModal-message').html('');
                $('#imageModal-message').append(htmlMSG);
                $('#imageModal').modal('show');
                // resetting image input    
                reset($('#father_image'));
                if ($('#old_father_image').length > 0) {
                    // edit mode
                    $('#preview_father_image').attr('src', $('#old_father_image').data('old_father_image'));
                } else {
                    $('#preview_father_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                }
            }
        }
    })

    // Image Validation Mother
    $('#mother_image').on('change', function(){
        if($('#mother_image').length > 0 
                && $('#image_width').length > 0 
                && $('#image_height').length > 0) {
            var imageSize   = parseInt($('#image_size').val());         // 512 kb
            var imgW        = parseInt($('#image_width').val());
            var imgH        = parseInt($('#image_height').val());
        } else if ($entity == 'user' || $entity == 'admin' || $entity == 'partner') {
            var imageSize   = (1 * 1048576);       // 1 mb
            var imgW        = 1200;                // 1200 pixel
            var imgH        = 1200;                // 1200 pixel
        } else if($entity == 'banner' || $entity == 'venue') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 1200;
            var imgH        = 800;
        } else if($entity == 'category') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 70;
            var imgH        = 70;
        } else if($entity == 'sport') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 500;
            var imgH        = 500;
        } 
        if ($('#mother_image').get(0).files.length  > 0) {
            var mimeType    = document.getElementById('mother_image').files[0].type;
            console.log(mimeType);
            var mimeIs      = mimeType.split("/");
            console.log(mimeIs);
            var sizeinMB    = parseFloat(imageSize / 1048576); //1000000
            if (mimeIs[0] === 'image') {
                // image file is image type, proceed to check image size
                if ($('#mother_image').get(0).files[0].size > imageSize) {
                    //alert('Please upload image within ' + sizeinMB + 'mb');
                    // Displaying error message in modal //
                    var htmlMSG = '<b><span class="msg-text-error">Please upload image within ' + sizeinMB + ' mb</span></b>';
                    $('#imageModal-title').text('Image Validation Error');
                    $('#imageModal-message').html('');
                    $('#imageModal-message').append(htmlMSG);
                    $('#imageModal').modal('show');
                    // resetting image input    
                    reset($('#mother_image'));
                    if ($('#old_mother_image').length > 0) {
                        // edit mode
                        $('#preview_mother_image').attr('src', $('#old_mother_image').data('old_mother_image'));
                    } else {
                        $('#preview_mother_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                    }
                } else {
                    var _URL = window.URL || window.webkitURL;
                    var file = $('#mother_image').get(0).files[0];
                    var img = new Image();
                    img.src = _URL.createObjectURL(file);
                    img.onload = function () {
                        imageWidth = this.width;
                        imageHeight = this.height;

                        if (imageWidth <= parseInt(imgW) && imageHeight <= parseInt(imgH)) {
                            readURL($('#mother_image'), 'preview_mother_image');
                        } else {
                            //alert('Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>');
                            // Displaying error message in modal //
                            var htmlMSG = '<b><span class="msg-text-error">Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>';
                            $('#imageModal-title').text('Image Validation Error');
                            $('#imageModal-message').html('');
                            $('#imageModal-message').append(htmlMSG);
                            $('#imageModal').modal('show');
                            // resetting image input    
                            reset($('#mother_image'));
                            if ($('#old_mother_image').length > 0) {
                                // edit mode
                                $('#preview_mother_image').attr('src', $('#old_mother_image').data('old_mother_image'));
                            } else {
                                $('#preview_mother_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                            }
                        }
                    };
                }

            } else {
                // if file is not image, display error alert message
                //alert('Please, select image file');
                // Displaying error message in modal //
                var htmlMSG = '<b><span class="msg-text-error">Please, select image file</span></b>';
                $('#imageModal-title').text('Image Validation Error');
                $('#imageModal-message').html('');
                $('#imageModal-message').append(htmlMSG);
                $('#imageModal').modal('show');
                // resetting image input    
                reset($('#mother_image'));
                if ($('#old_mother_image').length > 0) {
                    // edit mode
                    $('#preview_mother_image').attr('src', $('#old_mother_image').data('old_mother_image'));
                } else {
                    $('#preview_mother_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                }
            }
        }
    })

    // Image Validation Authorized Person 1
    $('#ap1_image').on('change', function(){
        if($('#ap1_image').length > 0 
                && $('#image_width').length > 0 
                && $('#image_height').length > 0) {
            var imageSize   = parseInt($('#image_size').val());         // 512 kb
            var imgW        = parseInt($('#image_width').val());
            var imgH        = parseInt($('#image_height').val());
        } else if ($entity == 'user' || $entity == 'admin' || $entity == 'partner') {
            var imageSize   = (1 * 1048576);       // 1 mb
            var imgW        = 1200;                // 1200 pixel
            var imgH        = 1200;                // 1200 pixel
        } else if($entity == 'banner' || $entity == 'venue') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 1200;
            var imgH        = 800;
        } else if($entity == 'category') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 70;
            var imgH        = 70;
        } else if($entity == 'sport') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 500;
            var imgH        = 500;
        } 
        if ($('#ap1_image').get(0).files.length  > 0) {
            var mimeType    = document.getElementById('ap1_image').files[0].type;
            console.log(mimeType);
            var mimeIs      = mimeType.split("/");
            console.log(mimeIs);
            var sizeinMB    = parseFloat(imageSize / 1048576); //1000000
            if (mimeIs[0] === 'image') {
                // image file is image type, proceed to check image size
                if ($('#ap1_image').get(0).files[0].size > imageSize) {
                    //alert('Please upload image within ' + sizeinMB + 'mb');
                    // Displaying error message in modal //
                    var htmlMSG = '<b><span class="msg-text-error">Please upload image within ' + sizeinMB + ' mb</span></b>';
                    $('#imageModal-title').text('Image Validation Error');
                    $('#imageModal-message').html('');
                    $('#imageModal-message').append(htmlMSG);
                    $('#imageModal').modal('show');
                    // resetting image input    
                    reset($('#ap1_image'));
                    if ($('#old_ap1_image').length > 0) {
                        // edit mode
                        $('#preview_ap1_image').attr('src', $('#old_ap1_image').data('old_ap1_image'));
                    } else {
                        $('#preview_ap1_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                    }
                } else {
                    var _URL = window.URL || window.webkitURL;
                    var file = $('#ap1_image').get(0).files[0];
                    var img = new Image();
                    img.src = _URL.createObjectURL(file);
                    img.onload = function () {
                        imageWidth = this.width;
                        imageHeight = this.height;

                        if (imageWidth <= parseInt(imgW) && imageHeight <= parseInt(imgH)) {
                            readURL($('#ap1_image'), 'preview_ap1_image');
                        } else {
                            //alert('Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>');
                            // Displaying error message in modal //
                            var htmlMSG = '<b><span class="msg-text-error">Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>';
                            $('#imageModal-title').text('Image Validation Error');
                            $('#imageModal-message').html('');
                            $('#imageModal-message').append(htmlMSG);
                            $('#imageModal').modal('show');
                            // resetting image input    
                            reset($('#ap1_image'));
                            if ($('#old_ap1_image').length > 0) {
                                // edit mode
                                $('#preview_ap1_image').attr('src', $('#old_ap1_image').data('old_ap1_image'));
                            } else {
                                $('#preview_ap1_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                            }
                        }
                    };
                }

            } else {
                // if file is not image, display error alert message
                //alert('Please, select image file');
                // Displaying error message in modal //
                var htmlMSG = '<b><span class="msg-text-error">Please, select image file</span></b>';
                $('#imageModal-title').text('Image Validation Error');
                $('#imageModal-message').html('');
                $('#imageModal-message').append(htmlMSG);
                $('#imageModal').modal('show');
                // resetting image input    
                reset($('#ap1_image'));
                if ($('#old_ap1_image').length > 0) {
                    // edit mode
                    $('#preview_ap1_image').attr('src', $('#old_ap1_image').data('old_ap1_image'));
                } else {
                    $('#preview_ap1_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                }
            }
        }
    })

    // Image Validation Authorized Person 2
    $('#ap2_image').on('change', function(){
        if($('#ap2_image').length > 0 
                && $('#image_width').length > 0 
                && $('#image_height').length > 0) {
            var imageSize   = parseInt($('#image_size').val());         // 512 kb
            var imgW        = parseInt($('#image_width').val());
            var imgH        = parseInt($('#image_height').val());
        } else if ($entity == 'user' || $entity == 'admin' || $entity == 'partner') {
            var imageSize   = (1 * 1048576);       // 1 mb
            var imgW        = 1200;                // 1200 pixel
            var imgH        = 1200;                // 1200 pixel
        } else if($entity == 'banner' || $entity == 'venue') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 1200;
            var imgH        = 800;
        } else if($entity == 'category') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 70;
            var imgH        = 70;
        } else if($entity == 'sport') {
            var imageSize   = 524288;         // 512 kb
            var imgW        = 500;
            var imgH        = 500;
        } 
        if ($('#ap2_image').get(0).files.length  > 0) {
            var mimeType    = document.getElementById('ap2_image').files[0].type;
            console.log(mimeType);
            var mimeIs      = mimeType.split("/");
            console.log(mimeIs);
            var sizeinMB    = parseFloat(imageSize / 1048576); //1000000
            if (mimeIs[0] === 'image') {
                // image file is image type, proceed to check image size
                if ($('#ap2_image').get(0).files[0].size > imageSize) {
                    //alert('Please upload image within ' + sizeinMB + 'mb');
                    // Displaying error message in modal //
                    var htmlMSG = '<b><span class="msg-text-error">Please upload image within ' + sizeinMB + ' mb</span></b>';
                    $('#imageModal-title').text('Image Validation Error');
                    $('#imageModal-message').html('');
                    $('#imageModal-message').append(htmlMSG);
                    $('#imageModal').modal('show');
                    // resetting image input    
                    reset($('#ap2_image'));
                    if ($('#old_ap2_image').length > 0) {
                        // edit mode
                        $('#preview_ap2_image').attr('src', $('#old_ap2_image').data('old_ap2_image'));
                    } else {
                        $('#preview_ap2_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                    }
                } else {
                    var _URL = window.URL || window.webkitURL;
                    var file = $('#ap2_image').get(0).files[0];
                    var img = new Image();
                    img.src = _URL.createObjectURL(file);
                    img.onload = function () {
                        imageWidth = this.width;
                        imageHeight = this.height;

                        if (imageWidth <= parseInt(imgW) && imageHeight <= parseInt(imgH)) {
                            readURL($('#ap2_image'), 'preview_ap2_image');
                        } else {
                            //alert('Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>');
                            // Displaying error message in modal //
                            var htmlMSG = '<b><span class="msg-text-error">Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>';
                            $('#imageModal-title').text('Image Validation Error');
                            $('#imageModal-message').html('');
                            $('#imageModal-message').append(htmlMSG);
                            $('#imageModal').modal('show');
                            // resetting image input    
                            reset($('#ap2_image'));
                            if ($('#old_ap2_image').length > 0) {
                                // edit mode
                                $('#preview_ap2_image').attr('src', $('#old_ap2_image').data('old_ap2_image'));
                            } else {
                                $('#preview_ap2_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                            }
                        }
                    };
                }

            } else {
                // if file is not image, display error alert message
                //alert('Please, select image file');
                // Displaying error message in modal //
                var htmlMSG = '<b><span class="msg-text-error">Please, select image file</span></b>';
                $('#imageModal-title').text('Image Validation Error');
                $('#imageModal-message').html('');
                $('#imageModal-message').append(htmlMSG);
                $('#imageModal').modal('show');
                // resetting image input    
                reset($('#ap2_image'));
                if ($('#old_ap2_image').length > 0) {
                    // edit mode
                    $('#preview_ap2_image').attr('src', $('#old_ap2_image').data('old_ap2_image'));
                } else {
                    $('#preview_ap2_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
                }
            }
        }
    })

    // Icon Validation Banner
    $('#icon').on('change', function(){
        if ($entity == 'user') {
            var iconSize = (1 * 262144);  // 256 kb
            var iconW = 256;                // 256 pixel
            var iconH = 256;                // 256 pixel
        } else {
            var iconSize = 131072;         // 128 kb
            var iconW = 128;
            var iconH = 128;
        }
        if ($('#icon').get(0).files.length  > 0) {
            var mimeType    = document.getElementById('icon').files[0].type;
            console.log(mimeType);
            var mimeIs      = mimeType.split("/");
            console.log(mimeIs);
            var sizeinMB    = parseFloat(iconSize / 1024); // [size/ (equivalent in byte)]
            if (mimeIs[0] === 'image') {
                // image file is image type, proceed to check image size
                if ($('#icon').get(0).files[0].size > iconSize) {
                    // Displaying error message in modal //
                    var htmlMSG = '<b><span class="msg-text-error">Please upload icon within ' + sizeinMB + ' kb</span></b>';
                    $('#iconModal-title').text('Icon Validation Error');
                    $('#iconModal-message').html('');
                    $('#iconModal-message').append(htmlMSG);
                    $('#iconModal').modal('show');
                    // resetting image input    
                    reset($('#icon'));
                    if ($('#old_icon').length > 0) {
                        // edit mode
                        $('#preview_icon').attr('src', $('#old_icon').data('old_icon'));
                    } else {
                        $('#preview_icon').attr('src', $baseURL + 'images/general_images/no_img.png');
                    }
                } else {
                    var _URL = window.URL || window.webkitURL;
                    var file = $('#icon').get(0).files[0];
                    var img = new Image();
                    img.src = _URL.createObjectURL(file);
                    img.onload = function () {
                        iconWidth = this.width;
                        iconHeight = this.height;

                        if (iconWidth <= parseInt(iconW) && iconHeight <= parseInt(iconH)) {
                            readURL($('#icon'), 'preview_icon');
                        } else {
                            //alert('Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>');
                            // Displaying error message in modal //
                            var htmlMSG = '<b><span class="msg-text-error">Max allowed resolution is ' + iconW + 'x' + iconH + '</span></b>';
                            $('#iconModal-title').text('Icon Validation Error');
                            $('#iconModal-message').html('');
                            $('#iconModal-message').append(htmlMSG);
                            $('#iconModal').modal('show');
                            // resetting image input    
                            reset($('#icon'));
                            if ($('#old_icon').length > 0) {
                                // edit mode
                                $('#preview_icon').attr('src', $('#old_icon').data('old_icon'));
                            } else {
                                $('#preview_icon').attr('src', $baseURL + 'images/general_images/no_img.png');
                            }
                        }
                    };
                }

            } else {
                // if file is not image, display error alert message
                //alert('Please, select image file');
                // Displaying error message in modal //
                var htmlMSG = '<b><span class="msg-text-error">Please, select image file</span></b>';
                $('#iconModal-title').text('Icon Validation Error');
                $('#iconModal-message').html('');
                $('#iconModal-message').append(htmlMSG);
                $('#iconModal').modal('show');
                // resetting image input    
                reset($('#icon'));
                if ($('#old_icon').length > 0) {
                    // edit mode
                    $('#preview_icon').attr('src', $('#old_icon').data('old_icon'));
                } else {
                    $('#preview_icon').attr('src', $baseURL + 'images/general_images/no_img.png');
                }
            }
        }
    });
    */

    const fileInputArray = ['image', 'father_image', 'mother_image', 'ap1_image', 'ap2_image', 'logo', 'favicon', 'banner', 'email_header'];
    for(var i = 0; i < fileInputArray.length; i++) {
        // Logo Validation Banner
        $('#' + fileInputArray[i]).on('change', function(){ 
            var thisObjectId  = $(this).attr('id');

            if(thisObjectId === 'father_image' || thisObjectId === 'mother_image' 
                || thisObjectId === 'ap1_image' || thisObjectId === 'ap2_image') {
                var imageSize    = parseInt($('#image_size').val());         // 128 kb
                var imageW       = parseInt($('#image_width').val());
                var imageH       = parseInt($('#image_height').val());
            } else {
                var imageSize    = parseInt($('#' + thisObjectId + '_size').val());         // 128 kb
                var imageW       = parseInt($('#' + thisObjectId + '_width').val());
                var imageH       = parseInt($('#' + thisObjectId + '_height').val());
            }            

            if ($('#' + thisObjectId).get(0).files.length  > 0) {
                var mimeType    = document.getElementById('' + thisObjectId).files[0].type;
                console.log(mimeType);
                var mimeIs      = mimeType.split("/");
                console.log(mimeIs);
                var sizeinMB    = parseFloat(imageSize / 1024); // [size/ (equivalent in byte)]
                if (mimeIs[0] === 'image') {
                    // image file is image type, proceed to check image size
                    if ($('#' + thisObjectId).get(0).files[0].size > imageSize) {
                        // Displaying error message in modal //
                        var htmlMSG = '<b><span class="msg-text-error">' + $('#js_validation_' + thisObjectId + '_modal_error_message_size').val() + '</span></b>';
                        $('#imageModal-title').text($('#js_validation_' + thisObjectId + '_modal_title').val());
                        $('#imageModal-message').html('');
                        $('#imageModal-message').append(htmlMSG);
                        $('#imageModal').modal('show');
                        // resetting image input    
                        reset($('#' + thisObjectId));
                        if ($('#old_' + thisObjectId).length > 0) {
                            // edit mode
                            $('#preview_' + thisObjectId).attr('src', $('#old_' + thisObjectId).data('old_' + thisObjectId));
                        } else {
                            $('#preview_' + thisObjectId).attr('src', $baseURL + 'images/general_images/no_img.png');
                        }
                    } else {
                        var _URL = window.URL || window.webkitURL;
                        var file = $('#' + thisObjectId).get(0).files[0];
                        var img = new Image();
                        img.src = _URL.createObjectURL(file);
                        img.onload = function () {
                            imageWidth = this.width;
                            imageHeight = this.height;

                            if (imageWidth <= parseInt(imageW) && imageHeight <= parseInt(imageH)) {
                                readURL($('#' + thisObjectId), 'preview_' + thisObjectId);
                            } else {
                                //alert('Max allowed resolution is ' + imgW + 'x' + imgH + '</span></b>');
                                // Displaying error message in modal //
                                var htmlMSG = '<b><span class="msg-text-error">' + $('#js_validation_' + thisObjectId + '_modal_error_message_resolution').val() + '</span></b>';
                                $('#imageModal-title').text($('#js_validation_' + thisObjectId + '_modal_title').val());
                                $('#imageModal-message').html('');
                                $('#imageModal-message').append(htmlMSG);
                                $('#imageModal').modal('show');
                                // resetting image input    
                                reset($('#' + thisObjectId));
                                if ($('#old_' + thisObjectId).length > 0) {
                                    // edit mode
                                    $('#preview_' + thisObjectId).attr('src', $('#old_' + thisObjectId).data('old_' + thisObjectId));
                                } else {
                                    $('#preview_' + thisObjectId).attr('src', $baseURL + 'images/general_images/no_img.png');
                                }
                            }
                        };
                    }

                } else {
                    // if file is not image, display error alert message
                    //alert('Please, select image file');
                    // Displaying error message in modal //
                    var htmlMSG = '<b><span class="msg-text-error">' + $('#js_validation_' + thisObjectId + '_modal_error_message_type').val() + '</span></b>';
                    $('#imageModal-title').text($('#js_validation_' + thisObjectId + '_modal_title').val());
                    $('#imageModal-message').html('');
                    $('#imageModal-message').append(htmlMSG);
                    $('#imageModal').modal('show');
                    // resetting image input    
                    reset($('#' + thisObjectId));
                    if ($('#old_' + thisObjectId).length > 0) {
                        // edit mode
                        $('#preview_' + thisObjectId).attr('src', $('#old_' + thisObjectId).data('old_' + thisObjectId));
                    } else {
                        $('#preview_' + thisObjectId).attr('src', $baseURL + 'images/general_images/no_img.png');
                    }
                }
            }
        });

        if($('#reset_' + fileInputArray[i] + '_button').length > 0) {
            $('#reset_' + fileInputArray[i] + '_button').on('click', {element: fileInputArray[i]}, function(event){
                // send parameter as {object} structure, ex- {element: 'text'}
                // access it inside like event.data.element
                var thisObjectId  = event.data.element;
                if($('#' + thisObjectId).length > 0) {
                    reset($('#' + thisObjectId));
                    if ($('#old_' + thisObjectId).length > 0) {
                        // edit mode
                        $('#preview_' + thisObjectId).attr('src', $('#old_' + thisObjectId).data('old_' + thisObjectId));
                    } else {
                        $('#preview_' + thisObjectId).attr('src', $baseURL + 'images/general_images/pre_img2.png');
                    }
                }
            });
        }
    }

    $(document).on('change', 'input[type="file"][id^="file"]', function () {
        var thisId  = $(this).attr('id');
        var imageSize = 5242880; // 500000
        var imgW = 280000;
        var imgH = 280000;

        if ($(this).get(0).files.length === 0) {

        } else {
            var mimeType = document.getElementById(thisId).files[0].type;
            var mimeIs = mimeType.split("/");
            console.log(mimeIs);
            var sizeinMB = parseFloat(imageSize / 1048576); //1000000
            if (mimeIs[0] === 'application' 
                            && (mimeIs[1] === 'msword' 
                                    || mimeIs[1] === 'pdf' 
                                    || mimeIs[1] === 'ms-excel'
                                    || mimeIs[1] === 'vnd.ms-excel'
                                    || mimeIs[1] === 'vnd.openxmlformats-officedocument.wordprocessingml.document'
                                    || mimeIs[1] === 'vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
                if(mimeIs[1] === 'msword' || mimeIs[1] === 'vnd.openxmlformats-officedocument.wordprocessingml.document') {
                    $('#preview_file').attr('src', $baseURL + 'images/general_images/doc.png');
                } else if(mimeIs[1] === 'pdf') {
                    $('#preview_file').attr('src', $baseURL + 'images/general_images/pdf.png');
                }
                    /*$('#preview_image').attr('src', $('#old_image').data('old_image'));
                    } else {*/                    
            } else if (mimeIs[0] === 'application' 
                            && (mimeIs[1] !== 'msword' 
                                    && mimeIs[1] !== 'pdf'
                                    && mimeIs[1] !== 'ms-excel'
                                    && mimeIs[1] !== 'vnd.ms-excel'
                                    || mimeIs[1] !== 'vnd.openxmlformats-officedocument.wordprocessingml.document'
                                    && mimeIs[1] !== 'vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
                var htmlMSG = '<b><span class="msg-text-error">Please select an image, a word doc file, a pdf or an excel file as attachment</span></b>';
                //$('#myModalAttachment_header').text('');
                /*$('#myModalAttachment_message').html('');
                $('#myModalAttachment_message').append(htmlMSG);
                $('#myModalAttachment').modal('show');*/

                $('#fileModal-title').text('File Validation Error');
                $('#fileModal-message').html('');
                $('#fileModal-message').append(htmlMSG);
                $('#fileModal').modal('show');
                
                $('#preview_file').attr('src', $('#old_file').data('old_file'));
                reset($(this));                    
            } else {
                var htmlMSG = '<b><span class="msg-text-error">Please select an image, a word doc file, a pdf or an excel file as attachment</span></b>';
                //alert(htmlMSG)
                //$('#myModalAttachment_header').text('');
                /*$('#myModalAttachment_message').html('');
                $('#myModalAttachment_message').append(htmlMSG);
                $('#myModalAttachment').modal('show');*/
                $('#fileModal-title').text('File Validation Error');
                $('#fileModal-message').html('');
                $('#fileModal-message').append(htmlMSG);
                $('#fileModal').modal('show');
                $('#preview_file').attr('src', $('#old_file').data('old_file'));
                reset($(this));
            }
        }
    });
});

/*
if($('#reset_image_button').length > 0) {
    $('#reset_image_button').on('click', function(){
        if($('#image').length > 0) {
            reset($('#image'));
            if ($('#old_image').length > 0) {
                // edit mode
                $('#preview_image').attr('src', $('#old_image').data('old_image'));
            } else {
                $('#preview_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
            }
        }
    });
}

if($('#reset_father_image_button').length > 0) {
    $('#reset_father_image_button').on('click', function(){
        if($('#father_image').length > 0) {
            reset($('#father_image'));
            if ($('#old_father_image').length > 0) {
                // edit mode
                $('#preview_father_image').attr('src', $('#old_father_image').data('old_father_image'));
            } else {
                $('#preview_father_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
            }
        }
    });
}

if($('#reset_mother_image_button').length > 0) {
    $('#reset_mother_image_button').on('click', function(){
        if($('#mother_image').length > 0) {
            reset($('#mother_image'));
            if ($('#old_mother_image').length > 0) {
                // edit mode
                $('#preview_mother_image').attr('src', $('#old_mother_image').data('old_mother_image'));
            } else {
                $('#preview_mother_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
            }
        }
    });
}

if($('#reset_ap1_image_button').length > 0) {
    $('#reset_ap1_image_button').on('click', function(){
        if($('#ap1_image').length > 0) {
            reset($('#ap1_image'));
            if ($('#old_ap1_image').length > 0) {
                // edit mode
                $('#preview_ap1_image').attr('src', $('#old_ap1_image').data('old_ap1_image'));
            } else {
                $('#preview_ap1_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
            }
        }
    });
}

if($('#reset_ap2_image_button').length > 0) {
    $('#reset_ap2_image_button').on('click', function(){
        if($('#ap2_image').length > 0) {
            reset($('#ap2_image'));
            if ($('#old_ap2_image').length > 0) {
                // edit mode
                $('#preview_ap2_image').attr('src', $('#old_ap2_image').data('old_ap2_image'));
            } else {
                $('#preview_ap2_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
            }
        }
    });
}

if($('#reset_icon_button').length > 0) {
    $('#reset_icon_button').on('click', function(){
        if($('#icon').length > 0) {
            reset($('#icon'));
            if ($('#old_icon').length > 0) {
                // edit mode
                $('#preview_icon').attr('src', $('#old_icon').data('old_icon'));
            } else {
                $('#preview_icon').attr('src', $baseURL + 'images/general_images/no_img.png');
            }
        }
    });
}
*/

/*-- reset the image file input --*/
window.reset = function (e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
    /*if($('label[class="custom-file-label"][for="' + e.attr('id') + '"]').length > 0)
    {
        $('label[class="custom-file-label"][for="' + e.attr('id') + '"]').text('Choose an icon');
    }*/
}


/*-- reads the static file and load into the preview img --*/
function readURL(input, prev) {
    if (input.get(0).files && input.get(0).files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#' + prev).attr('src', e.target.result);
            /*$('#' + prev).css('height', 'auto');
            if($('label[class="custom-file-label"][for="' + input.attr('id') + '"]').length > 0)
            {
                $('label[class="custom-file-label"][for="' + input.attr('id') + '"]').text(input.get(0).files[0].name)
            }*/
        }
        reader.readAsDataURL(input.get(0).files[0]);
    }
}

function setLocale(locale){
    $('.loader-without-image').fadeIn();
    var config  = {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')}
    $.ajax({
        type       : "POST",
        url        : $baseURL + 'ajax/set-locale',
        data       : {'locale' : locale, 'guard' : $('meta[name="guard"]').attr('content')},
        dataType   : 'json',
        headers    : config,
        beforeSend: function() {

        },
        success: function(data) {    
            if(data.status == 'success')
            {
                location.reload();
                var htmlMSG = '<b><span class="msg-text-success">' + data.message + '</span></b>';
                $('#localeModal-title').text(data.status);
                $('#localeModal-message').html('');
                $('#localeModal-message').append(htmlMSG);
                //$('#localeModal').modal('show');
            }
            else if(data.status == 'error')
            {
                $('.loader-without-image').fadeOut();    
                var htmlMSG = '<b><span class="msg-text-error">' + data.message + '</span></b>';
                $('#localeModal-title').text(data.status);
                $('#localeModal-message').html('');
                $('#localeModal-message').append(htmlMSG);
                //$('#localeModal').modal('show');
            }
        }
    });
}

function objectIsEmpty(obj) {
    return Object.keys(obj).length === 0;
}