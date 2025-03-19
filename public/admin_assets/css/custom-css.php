<?php
header("Content-type: text/css; charset: UTF-8");
$primaryColor 		= '#' . $_GET['primary_color'];
$secondaryColor 	= '#' . $_GET['secondary_color'];
$lightPrimaryColor 	= '#' . $_GET['light_primary_color'];
?>
<style>
/* list tools start */

a, .btn-icon {
  color: <?php echo $primaryColor;?>;
}
.btn-icon {
	background-color: <?php echo $lightPrimaryColor;?> !important;
}
a:hover {color: <?php echo $secondaryColor;?>!important;}

.row.top-tools { justify-content: flex-end; }

.bg-label-primary {color: <?php echo $primaryColor;?>!important; background-color: <?php echo $lightPrimaryColor;?> !important;}
.btn-primary {background-color: <?php echo $primaryColor;?>; border-color: <?php echo $primaryColor;?>;}
.btn-primary:hover {background-color: <?php echo $secondaryColor;?>!important; border-color: <?php echo $secondaryColor;?>!important;}

.form-control:focus, .form-select:focus,
.btn-check:focus + .btn-primary, .btn-primary:focus, .btn-primary.focus
 {border-color: <?php echo $primaryColor;?>; box-shadow: 0 0 0.25rem 0.05rem rgba(51, 157, 228, 0.1);}

.list-tools { display: flex; flex-wrap: wrap; justify-content: flex-end; }

.list-tools .input-group { width: auto; }


.border-radius-right {border-radius: 0 0.375rem 0.375rem 0 !important;}
.border-radius {border-radius: 0.375rem !important;}

.search-container { display: flex;  }

/* list tools end */



/* global style start */
.app-brand .layout-menu-toggle 
{background-color: <?php echo $primaryColor;?>!important;}

.bg-menu-theme .menu-sub > .menu-item.active > .menu-link:not(.menu-toggle)::before,
.nav-pills .nav-link.active, .nav-pills .nav-link.active:hover, .nav-pills .nav-link.active:focus
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active,
.btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show,
.btn-outline-primary:hover, /*.form-check-input:checked,*/
.btn-check:focus + .btn-primary, .btn-primary:focus, .btn-primary.focus
 {background-color: <?php echo $primaryColor;?>!important;}

.bg-menu-theme .menu-inner > .menu-item.active > .menu-link {color: <?php echo $primaryColor;?>; background-color: <?php echo $lightPrimaryColor;?> !important;}
.bg-menu-theme .menu-inner > .menu-item.active::before {background: <?php echo $primaryColor;?>;}


.text-primary, .btn-outline-primary {color: <?php echo $primaryColor;?> !important;}

.btn-outline-primary,
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active,
.btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show,
.btn-outline-primary:hover, .form-check-input:checked,
.btn-check:focus + .btn-primary, .btn-primary:focus, .btn-primary.focus
 {border-color: <?php echo $primaryColor;?> !important;}

 .right-link {float: right;}
</style>