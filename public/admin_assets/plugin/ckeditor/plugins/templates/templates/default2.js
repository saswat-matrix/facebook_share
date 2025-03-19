/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// Register a templates definition set named "default".
CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath: CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),

	// The templates definitions.
	templates: [ {
		title: 'Image and Title',
		image: 'template1.gif',
		description: 'One main image with a title and text that surround the image.',
		html: '<h3>' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="" style="margin-right: 10px" height="100" width="100" align="left" />' +
			'Type the title here' +
			'</h3>' +
			'<p>' +
			'Type the text here' +
			'</p>'
	},
	{
		title: 'Strange Template',
		image: 'template2.gif',
		description: 'A template that defines two columns, each one with a title, and some text.',
		html: '<table cellspacing="0" cellpadding="0" style="width:100%" border="0">' +
			'<tr>' +
				'<td style="width:50%">' +
					'<h3>Title 1</h3>' +
				'</td>' +
				'<td></td>' +
				'<td style="width:50%">' +
					'<h3>Title 2</h3>' +
				'</td>' +
			'</tr>' +
			'<tr>' +
				'<td>' +
					'Text 1' +
				'</td>' +
				'<td></td>' +
				'<td>' +
					'Text 2' +
				'</td>' +
			'</tr>' +
			'</table>' +
			'<p>' +
			'More text goes here.' +
			'</p>'
	},
	{
		title: 'Text and Table',
		image: 'template3.gif',
		description: 'A title with some text and a table.',
		html: '<div style="width: 90%">' +
			'<h3>' +
				'Your Title goes here' +
			'</h3>' +
			'<table style="width:150px;float: right" cellspacing="0" cellpadding="0" border="1">' +
				'<caption style="border:solid 1px black">' +
					'<strong>Table title</strong>' +
				'</caption>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
			'</table>' +
			'<p>' +
				'Type the text here' +
			'</p>' +
			'</div>'
	},
	{
		title: 'Table Left Aligned',
		image: 'left-align-table-template.gif',
		description: 'Table with left aligned texts.',
		html: '<table class="admin-bdr-table">' +
				    '<tr>' +
				        '<th>Header Text</th>' +
				        '<th>Header Text</th>' +
				        '<th>Header Text</th>' +
				        '<th>Header Text</th>' +
				    '</tr>' +
				    '<tr>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				    '</tr>' +
				    '<tr>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				    '</tr>' +
				'</table>' +
		    '<p>&nbsp;</p>'
	},
	{
		title: 'Table Center Aligned',
		image: 'center-align-table-template.gif',
		description: 'Table with left aligned texts.',
		html: '<table class="admin-bdr-table-center table table-bordered">' +
				    '<tr>' +
				        '<th>Header Text</th>' +
				        '<th>Header Text</th>' +
				        '<th>Header Text</th>' +
				        '<th>Header Text</th>' +
				    '</tr>' +
				    '<tr>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				    '</tr>' +
				    '<tr>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				        '<td>Content Text</td>' +
				    '</tr>' +
				'</table>' +
		    '<p>&nbsp;</p>'
	},
	{
		title: 'Table with image on right side',
		image: 'table-with-image-template.gif',
		description: 'A table with some text and an image.',
		html: '<div style="width: 100%">' +
			'<table class="gov-service-table-image" style="width:100%;border-collapse: collapse;background-color: transparent;font-size: 15px;line-height: 28px;font-weight: 400; color: #212529;">' +
			    '<tr>' +
			        '<td colspan="2" style="border: 1px solid #dee2e6; border-bottom:none; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;"><b>Table Header</b></td>' +
			    '</tr>' +
			    '<tr>' +
			        '<td style="width:55%; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #747c91; padding: 0;">' +
			            '<table style="width:100%;border-collapse: collapse;">' +
			                '<tr>' +
			                    '<td style=" width:45%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">Cell Text' +
			                        
			                    '</td>' +
			                    '<td style="width:55%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">' +
			                        '<a href="#">Hyperlinked Cell Text</a>' +
			                    '</td>' +
			                '</tr>' +
			                '<tr>' +
			                    '<td style=" width:45%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">Cell Text' +
			                        
			                    '</td>' +
			                    '<td style="width:55%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">' +
			                        '<a href="#">Hyperlinked Cell Text</a>' +
			                    '</td>' +
			                '</tr>' +
			                '<tr>' +
			                    '<td style=" width:45%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">Cell Text' +
			                        
			                    '</td>' +
			                    '<td style="width:55%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">' +
			                        '<a href="#">Hyperlinked Cell Text</a>' +
			                    '</td>' +
			                '</tr>' +
			                '<tr>' +
			                    '<td style=" width:45%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">Cell Text' +
			                        
			                    '</td>' +
			                    '<td style="width:55%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">' +
			                        '<a href="#">Hyperlinked Cell Text</a>' +
			                    '</td>' +
			                '</tr>' +
			                '<tr>' +
			                    '<td style=" width:45%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">Cell Text' +
			                        
			                    '</td>' +
			                    '<td style="width:55%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">' +
			                        '<a href="#">Hyperlinked Cell Text</a>' +
			                    '</td>' +
			                '</tr>' +
			                '<tr>' +
			                    '<td style=" width:45%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">Cell Text' +
			                        
			                    '</td>' +
			                    '<td style="width:55%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">' +
			                        '<a href="#">Hyperlinked Cell Text</a>' +
			                    '</td>' +
			                '</tr>' +
			                '<tr>' +
			                    '<td style=" width:45%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">Cell Text' +
			                        
			                    '</td>' +
			                    '<td style="width:55%; border-left: 1px solid #dee2e6; border-top: 1px solid #dee2e6; padding: 0.75rem;font-size: 15px; color: #747c91;line-height: 22px;">' +
			                        '<a href="#">Hyperlinked Cell Text</a>' +
			                    '</td>' +
			                '</tr>' +
			            '</table>' +
			        '</td>' +
			        '<td style="width:45%; border: 1px solid #dee2e6;padding:40px 0.75rem;font-size: 15px; color: #747c91;line-height: 22px; text-align: center; vertical-align: top;">' +
			            '<img style="width:100%; max-width: 300px;" src="' + $baseURL + 'front_assets/images/table_image.png" alt="">' +
			        '</td>' +
			    '</tr>' +
			'</table>' +
			'</div>'
	},
	{
		title: 'Attachment with PDF File (col-xl-4)',
		image: 'attachment-template.gif',
		description: 'Attachment Template: Title, Code, Icon and PDF File.',
		html: '<div class="col-xl-4 col-sm-6">' +
			        '<div class="sec-attach-single admn-tmp-vw">' +
			            '<div class="attach-single-cont">' +
			                '<div class="attach-icon">' +
			                    '<img src="' + $baseURL + 'front_assets/images/pdf-icon.png" alt="">' +
			                '</div>' +
			                '<h3>Name Goes Here</h3>' +
			                '<h4>Type : Type Goes Here <br>Number / Code: Code Goes Here</h4>' +
			            '</div>' +
			        '</div>' +
			    '</div>' +
			    '<p>&nbsp;</p>'
	},
	{
		title: 'Attachment with PDF File and Down Arrow (col-xl-4)',
		image: 'attachment-template.gif',
		description: 'Attachment Template: Title, Code, Icon and PDF File.',
		html: '<div class="col-xl-4 col-sm-6">' +
			        '<div class="sec-attach-single admn-tmp-vw">' +
			            '<div class="attach-single-cont">' +
			                '<div class="attach-icon">' +
			                    '<img src="' + $baseURL + 'front_assets/images/pdf-icon.png" alt="">' +
			                '</div>' +
			                '<h3>Name Goes Here</h3>' +
			                '<h4>Type : Type Goes Here <br>Number / Code: Code Goes Here</h4>' +
			                '<div class="attach-icon-right">' +
				            	'<img src="' + $baseURL + 'front_assets/images/down-icon.png"/>' +
				            '</div>' +
			            '</div>' +
			        '</div>' +
			    '</div>' +
			    '<p>&nbsp;</p>'
	},
	{
		title: 'Attachment with PDF File (col-xl-6)',
		image: 'attachment-template.gif',
		description: 'Attachment Template: Title, Code, Icon and PDF File.',
		html: '<div class="col-xl-6 col-sm-6">' +
			        '<div class="sec-attach-single admn-tmp-vw">' +
			            '<div class="attach-single-cont">' +
			                '<div class="attach-icon">' +
			                    '<img src="' + $baseURL + 'front_assets/images/pdf-icon.png" alt="">' +
			                '</div>' +
			                '<h3>Name Goes Here</h3>' +
			                '<h4>Type : Type Goes Here <br>Number / Code: Code Goes Here</h4>' +
			            '</div>' +
			        '</div>' +
			    '</div>' +
			    '<p>&nbsp;</p>'
	},
	{
		title: 'Attachment with PDF File and Down Arrow (col-xl-6)',
		image: 'attachment-template.gif',
		description: 'Attachment Template: Title, Code, Icon and PDF File.',
		html: '<div class="col-xl-6 col-sm-6">' +
			        '<div class="sec-attach-single admn-tmp-vw">' +
			            '<div class="attach-single-cont">' +
			                '<div class="attach-icon">' +
			                    '<img src="' + $baseURL + 'front_assets/images/pdf-icon.png" alt="">' +
			                '</div>' +
			                '<h3>Name Goes Here</h3>' +
			                '<h4>Type : Type Goes Here <br>Number / Code: Code Goes Here</h4>' +
			                '<div class="attach-icon-right">' +
				            	'<img src="' + $baseURL + 'front_assets/images/down-icon.png"/>' +
				            '</div>' +
			            '</div>' +
			        '</div>' +
			    '</div>' +
			    '<p>&nbsp;</p>'
	},
	{
		title: 'Attachment with Word File (col-xl-4)',
		image: 'attachment-template.gif',
		description: 'Attachment Template: Title, Code, Icon and Word Doc  File.',
		html: '<div class="col-xl-4 col-sm-6">' +
			        '<div class="sec-attach-single admn-tmp-vw">' +
			            '<div class="attach-single-cont">' +
			                '<div class="attach-icon">' +
			                    '<img src="' + $baseURL + 'front_assets/images/doc-icon.png" alt="">' +
			                '</div>' +
			                '<h3>Name Goes Here</h3>' +
			                '<h4>Type : Type Goes Here <br>Number / Code: Code Goes Here</h4>' +
			            '</div>' +
			        '</div>' +
			    '</div>' +
			    '<p>&nbsp;</p>'
	},
	{
		title: 'Attachment with Word File and Down Arrow (col-xl-4)',
		image: 'attachment-template.gif',
		description: 'Attachment Template: Title, Code, Icon and Word Doc  File.',
		html: '<div class="col-xl-4 col-sm-6">' +
			        '<div class="sec-attach-single admn-tmp-vw">' +
			            '<div class="attach-single-cont">' +
			                '<div class="attach-icon">' +
			                    '<img src="' + $baseURL + 'front_assets/images/doc-icon.png" alt="">' +
			                '</div>' +
			                '<h3>Name Goes Here</h3>' +
			                '<h4>Type : Type Goes Here <br>Number / Code: Code Goes Here</h4>' +
			                '<div class="attach-icon-right">' +
				            	'<img src="' + $baseURL + 'front_assets/images/down-icon.png"/>' +
				            '</div>' +
			            '</div>' +
			        '</div>' +
			    '</div>' +
			    '<p>&nbsp;</p>'
	},
	{
		title: 'Attachment with Word File (col-xl-6)',
		image: 'attachment-template.gif',
		description: 'Attachment Template: Title, Code, Icon and Word Doc  File.',
		html: '<div class="col-xl-6 col-sm-6">' +
			        '<div class="sec-attach-single admn-tmp-vw">' +
			            '<div class="attach-single-cont">' +
			                '<div class="attach-icon">' +
			                    '<img src="' + $baseURL + 'front_assets/images/doc-icon.png" alt="">' +
			                '</div>' +
			                '<h3>Name Goes Here</h3>' +
			                '<h4>Type : Type Goes Here <br>Number / Code: Code Goes Here</h4>' +
			            '</div>' +
			        '</div>' +
			    '</div>' +
			    '<p>&nbsp;</p>'
	},
	{
		title: 'Attachment with Word File and Down Arrow (col-xl-6)',
		image: 'attachment-template.gif',
		description: 'Attachment Template: Title, Code, Icon and Word Doc  File.',
		html: '<div class="col-xl-6 col-sm-6">' +
			        '<div class="sec-attach-single admn-tmp-vw">' +
			            '<div class="attach-single-cont">' +
			                '<div class="attach-icon">' +
			                    '<img src="' + $baseURL + 'front_assets/images/doc-icon.png" alt="">' +
			                '</div>' +
			                '<h3>Name Goes Here</h3>' +
			                '<h4>Type : Type Goes Here <br>Number / Code: Code Goes Here</h4>' +
			                '<div class="attach-icon-right">' +
				            	'<img src="' + $baseURL + 'front_assets/images/down-icon.png"/>' +
				            '</div>' +
			            '</div>' +
			        '</div>' +
			    '</div>' +
			    '<p>&nbsp;</p>'
	},
	{
		title: 'Three Info Box (About, Mission, Vision)',
		image: '3-info-box-template.gif',
		description: 'Three box structure for About Us, Mission and Vision.',
		html: '<div class="admin-abut-vsn-msn">' +
		        '<div class="admin-abut-sctn">' +
		            '<h2>About Us</h2>' +
		            '<p>Your Content Goes Here.</p>' +
		        '</div>' +
		        '<div class="pillar-divide-cont admin-dvdr-box">' +
		            '<div class="row">' +
		                '<div class="col-lg-6">' +
		                    '<div class="pillar-cont-left">' +
		                        '<h2>Mission</h2>' +
		                        '<p>Your Content Goes Here.</p>' +
		                    '</div>' +
		                '</div>' +
		                '<div class="col-lg-6">' +
		                    '<div class="pillar-cont-right">' +
		                        '<h2>Vision</h2>' +
		                        '<p>Your Content Goes Here</p>' +
		                    '</div>' +
		                '</div>' +
		            '</div>' +
		        '</div>' +
		    '</div>' +
		    '<p>&nbsp;</p>'
	},
	{
		title: 'Five Info Box',
		image: '5-info-box-template.gif',
		description: '5 box structure for Business Owner, Business Criticality, Delivery Lead Time, Service Availability Hours & Service Support Hours.',
		html: '<div class="admin-5-box-wrap-area">' +
		        '<div class="pillar-divide-cont tpbr-none mb-0 full">' +
		            '<div class="row">' +
		                '<div class="col-lg-12">' +
		                    '<div class="pillar-cont-left">' +
		                        '<h2>Business Owner</h2>' +
		                        '<p>IT</p>' +
		                    '</div>' +
		                '</div>' +
		            '</div>' +
		        '</div>' +
		        '<div class="pillar-divide-cont tpbr-none two-col mb-0">' +
		            '<div class="row">' +
		                '<div class="col-lg-6">' +
		                    '<div class="pillar-cont-left">' +
		                        '<h2>Business Criticality</h2>' +
		                        '<p>Business Critical</p>' +
		                    '</div>' +
		                '</div>' +
		                '<div class="col-lg-6">' +
		                    '<div class="pillar-cont-left">' +
		                        '<h2>Delivery Lead Time</h2>' +
		                        '<p>Next Business Days</p>' +
		                    '</div>' +
		                '</div>' +
		            '</div>' +
		        '</div>' +
		        '<div class="pillar-divide-cont two-col tpbr-none mb-0">' +
		            '<div class="row">' +
		                '<div class="col-lg-6">' +
		                    '<div class="pillar-cont-left">' +
		                        '<h2>Service Availability Hours</h2>' +
		                        '<p>24/7</p>' +
		                    '</div>' +
		                '</div>' +
		                '<div class="col-lg-6">' +
		                    '<div class="pillar-cont-left">' +
		                        '<h2>Service Support Hours</h2>' +
		                        '<p>Business Hours</p>' +
		                    '</div>' +
		                '</div>' +
		            '</div>' +
		        '</div>' +
		    '</div>' +
		    '<p>&nbsp;</p>'
	},
	{
		title: 'Embassy Table',
		image: 'Embassies-template.gif',
		description: 'Embassy Table.',
		html: '<table class="Embassies-table" style="width:100%;border-collapse: collapse;background-color: transparent;font-size: 15px; font-weight: 500; color: #212529; border-top: 1px solid #dee2e6; border-left: 1px solid #dee2e6; text-align: center; margin-top: 10px;">' +
			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Taiwanese.png"></p>' +
			            '<p><strong style="color:black">Taiwanese Consulate</strong></p>' +
			            '<p>No. 15 Al Abaqerah St. (19) Rouwais Dist.(7) Jeddah, Saudi Arabia</p>' +
			            '<p>Phone: (002-966-2) 660-2264</p>' +
			            '<p>Email:<a href="mailto:jed@mofa.gov.tw">jed@mofa.gov.tw</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Thai.png"></p>' +
			            '<p><strong style="color:black">Thai Consulate</strong></p>' +
			            '<p>2 Safwan lbn Wahab Street (92) off Palestine Street, Behind Jeddah Dome</p>' +
			            '<p>Phone: +966-2-6655317 / +966-2-2831078</p>' +
			            '<p>Website: <a href="http://www.thaiembassy.org/jeddah" target="_blank">http://www.thaiembassy.org/jeddah</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Senegal.png"></p>' +
			            '<p><strong style="color:black">Senegalese Consulate</strong></p>' +
			            '<p>Quartier Diplomatique de Riyadh, PO Box 94532, Riyadh 11693</p>' +
			            '<p>Phone: +9661 488 0146/488 0157</p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Turkish.png"></p>' +
			            '<p><strong style="color:black">Turkish Consulate</strong></p>' +
			            '<p>Meinah Road, Kilo 6, Al Arafat St, Al Hamra</p>' +
			            '<p>Phone: +966-1-6601607 / +966-1-6654873</p>' +
			            '<p>Email:<a href="mailto:tcciddebk1@sps.net.sa">tcciddebk1@sps.net.sa</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/UAE.png"></p>' +
			            '<p><strong style="color:black">Emirati Consulate</strong></p>' +
			            '<p>P.O.Box 5451- Jeddah 21422</p>' +
			            '<p>Phone: (+966-2) 6515436/6511557</p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Qatar.png"></p>' +
			            '<p><strong style="color:black">Qatari Consulate</strong></p>' +
			            '<p>P.O.Box 313 Jeddah</p>' +
			            '<p>Phone: (+966-2) 6652538</p>' +
			            '<p>Email:<a href="mailto:jeddah@mofa.gov.qa">jeddah@mofa.gov.qa</a></p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/YEMENI.png"></p>' +
			            '<p><strong style="color:black">Yemeni Consulate</strong></p>' +
			            '<p>Jeddah, Saudi Arabia</p>' +
			            '<p>Phone: (+966-2) 6874291, 6803904</p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Uruguayan.png"></p>' +
			            '<p><strong style="color:black">Uruguayan Consulate</strong></p>' +
			            '<p>Phone: +966-2-665 63 59</p>' +
			            '<p>+966-2-669 45 62</p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Polish.png"></p>' +
			            '<p><strong style="color:black">Polish Consulate</strong></p>' +
			            '<p>King Abdulaziz Street P.O. Box 439, Jeddah 21411</p>' +
			            '<p>Phone: (00-966) 505-617-855</p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/USA.png"></p>' +
			            '<p><strong style="color:black">American Consulate</strong></p>' +
			            '<p>U.S. Consulate General P.O. Box 149 Jeddah 21411</p>' +
			            '<p>Phone: (966-2) 667-0080</p>' +
			            '<p>Website: <a href="http://jeddah.usconsulate.gov/" target="_blank">http://jeddah.usconsulate.gov/</a></p>' +
			            '<p>Email:<a href="mailto:Jeddahacs@state.gov">Jeddahacs@state.gov</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/sINGAPOREAN.png"></p>' +
			            '<p><strong style="color:black">Singaporean Consulate</strong></p>' +
			            '<p>Villa No 5 Mohammed Tawfic Al Abbasi St Off Hera\'a St Al Naeem Dist</p>' +
			            '<p>Phone: 966 (2) 6073980/6073981</p>' +
			            '<p>Website: <a href="http://www.mfa.gov.sg/jeddah/" target="_blank">http://www.mfa.gov.sg/jeddah/</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Philip.png"></p>' +
			            '<p><strong style="color:black">​Filipino Consulate</strong></p>' +
			            '<p>Al- Sayeddah Kaddija St. Al Faisaliyah District 1 P.O. Box 4794</p>' +
			            '<p>Phone: (9662) 6600-348; 6670-925 or 6600-354</p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/south%20african%20consulate.png"></p>' +
			            '<p><strong style="color:black">South African Consulate</strong></p>' +
			            '<p>Villa No. 73 Al-Khalidiya District Aba Al-Khail Street P O Box 12737</p>' +
			            '<p>Jeddah 21483, Kingdom of Saudi Arabia</p>' +
			            '<p>Phone: + 966 2 6060299, + 966 2 606 4714</p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Sudanese.png"></p>' +
			            '<p><strong style="color:black">Sudanese Consulate</strong></p>' +
			            '<p>Consulate of Sudan in Saudi Arabia</p>' +
			            '<p>Phone: (+966-2)-6476003 / 6471090 / 6478728</p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Norway.png"></p>' +
			            '<p><strong style="color:black">​Norwegian Consulate</strong></p>' +
			            '<p>P.O.Box 18600, 21425</p>' +
			            '<p>Phone: +966-2-661-1222 - ext. 300 or operator ext. 0</p>' +
			            '<p>Website: <a href="http://www.al-norwige.org.sa" target="_blank">http://www.al-norwige.org.sa</a></p>' +
			            '<p>Email:<a href="mailto:trealjr2000@yahoo.com ">trealjr2000@yahoo.com </a></p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Swedish.png"></p>' +
			            '<p><strong style="color:black">Swedish Consulate</strong></p>' +
			            '<p>Honorary Consulate of Sweden, Jeddah</p>' +
			            '<p>c/o Zahid Tractor Head Quarter corner Al-Salsabeel/Mohammed Al-Taweel Street Jeddah 21451 Saudi Arabia</p>' +
			            '<p>Phone: +966 (2) 665 47 35</p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Syrian.png"></p>' +
			            '<p><strong style="color:black">Syrian Consulate</strong></p>' +
			            '<p>Consulate General of the Syrian Arab Republic in Jeddah, Saudi Arabia</p>' +
			            '<p>P.O.Box 657 Jeddah 21421 Saudi Arabia</p>' +
			            '<p>Phone: (+966-2) 6605801, 6610211, 6601953</p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Finland.png"></p>' +
			            '<p><strong style="color:black">​Finnish Consulate</strong></p>' +
			            '<p>Honorary Consulate General of Finland</p>' +
			            '<p>Phone: (966-2) 643 8235</p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Afghan.png"></p>' +
			            '<p><strong style="color:black">Afghani Consulate</strong></p>' +
			            '<p>P.O. Box 6349 Tariq Al-Madina Kilo No. 3 21442</p>' +
			            '<p>Phone: +966-2-607-5667</p>' +
			            '<p>Email:<a href="mailto:afghan_con_jed@hotmail.com">afghan_con_jed@hotmail.com </a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Azerbaijani.png"></p>' +
			            '<p><strong style="color:black">Azerbaijani Embassy</strong></p>' +
			            '<p>Al-Horma D-1 Iskanderiya str.2474,apt.10 Jeddah, Saudi Arabia</p>' +
			            '<p>Phone: (96026) 644 41 93</p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Morocoo.png"></p>' +
			            '<p><strong style="color:black">Moroccan Consulate</strong></p>' +
			            '<p>21 Jabel El Arab Street 38 Mushrifah Dist / 1</p>' +
			            '<p>Phone: 00 (966) 26 69 52 34, 00 (966) 26 69 52 38</p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Bahraini.png"></p>' +
			            '<p><strong style="color:black">Bahraini Consulate</strong></p>' +
			            '<p>P.O. Box 55549 Jeddah 21544 Saudi Arabia</p>' +
			            '<p>Phone: (+966) 2 607 6680</p>' +
			            '<p>Email:<a href="mailto:jeddah.mission@mofa.gov.bh">jeddah.mission@mofa.gov.bh</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Bangladeshi.png"></p>' +
			            '<p><strong style="color:black">Bangladeshi Consulate</strong></p>' +
			            '<p>P.O. Box 31085 Jeddah 21497 Saudi Arabiav' +
			            '<p>Phone: (96026) 644 41 93</p>' +
			            '<p>Website: <a href="http://www.bcgjeddah.com" target="_blank">http://www.bcgjeddah.com</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Maly.png"></p>' +
			            '<p><strong style="color:black">Malaysian Consulate</strong></p>' +
			            '<p>Phone: 00966 2 6727740 or 00966 2 6728019</p>' +
			            '<p>Website: <a href="http://www.kln.gov.my/perwakilan/jeddah" target="_blank">http://www.kln.gov.my/perwakilan/jeddah</a></p>' +
			            '<p>Email:<a href="mailto:maljeddah@kln.gov.my">maljeddah@kln.gov.my</a></p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Belgian.png"></p>' +
			            '<p><strong style="color:black">Belgian Consulate</strong></p>' +
			            '<p>PO Box 5338 Jeddah 21422</p>' +
			            '<p>Phone: (+966) 2 607 6680</p>' +
			            '<p>Email:<a href="mailto:hconsul@alkabbani.com">hconsul@alkabbani.com </a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Bruneian.png"></p>' +
			            '<p><strong style="color:black">Bruneian Consulate</strong></p>' +
			            '<p>Al-Hawj Street Al-Rehab District/2 P. O. Box 15514 Jeddah 21454</p>' +
			            '<p>Phone: 966 (2) 672 5553 / 672 4343</p>' +
			            '<p>Fax: 966 (2) 670 1744 / 675 0993</p>' +
			            '<p>Website: <a href="jeddah.arabsaudi@mfa.gov.bn " target="_blank">jeddah.arabsaudi@mfa.gov.bn </a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/kuwait.png"></p>' +
			            '<p><strong style="color:black">Kuwaiti Consulate</strong></p>' +
			            '<p>P.O.Box 5374</p>' +
			            '<p>Phone: (+966-2) 6601836, 6604898</p>' +
			            '<p>Fax: (+966-2) 6650515</p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Cameroonian.png"></p>' +
			            '<p><strong style="color:black">Cameroonian Consulate</strong></p>' +
			            '<p>B.P. 15517 jeddah 21454</p>' +
			            '<p>Phone: (9662) 680-4541</p>' +
			            '<p>Fax: (9662)687-6320</p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Canada.png"></p>' +
			            '<p><strong style="color:black">Canadian Consulate</strong></p>' +
			            '<p>11th Floor, Ali Reza Tower, Madina Road</p>' +
			            '<p>Phone: 966 (2) 653-0597, 653-0434</p>' +
			            '<p>Website: <a href="http://www.saudiarabia.gc.ca" target="_blank">http://www.saudiarabia.gc.ca</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/jordan.png"></p>' +
			            '<p><strong style="color:black">Jordanian Consulate</strong></p>' +
			            '<p>Jeddah, Al Hamra District</p>' +
			            '<p>Prince Mohammad Bin Abd el Aziz Street</p>' +
			            '<p>Phone: 6607630 - 6607633</p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Chinese.png"></p>' +
			            '<p><strong style="color:black">Chinese Consulate</strong></p>' +
			            '<p>Al-Khaledeyyan District 2, Abdullah Aba Al-Khail St.</p>' +
			            '<p>Phone: 00966-2-6828254 00966-2-6062076</p>' +
			            '<p>Website: <a href="http://jeddah.china-consulate.org" target="_blank">http://jeddah.china-consulate.org</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Cypriot.png"></p>' +
			            '<p><strong style="color:black">Cypriot Consulate</strong></p>' +
			            '<p>P.O.Box 15, Jeddah 21411 Saudi Arabia</p>' +
			            '<p>Phone: (009662) 6603996, 6603671, 6652322 (Res.)</p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Italy.png"></p>' +
			            '<p><strong style="color:black">​Italian Consulate</strong></p>' +
			            '<p>Mohamed Abdul Wahab Street Sharafia District</p>' +
			            '<p>Phone: 0096626421451</p>' +
			            '<p>Website: <a href="http://www.consgedda.esteri.it" target="_blank">http://www.consgedda.esteri.it</a></p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Czech.png"></p>' +
			            '<p><strong style="color:black">Czech Consulate</strong></p>' +
			            '<p>Enany Headquarters Building, Al Malek Road, Jeddah</p>' +
			            '<p>P.O.Box 52225 21563</p>' +
			            '<p>Phone: 0096626064867 0096626066000</p>' +
			            '<p>Email:<a href="mailto:jeddah@honorary.mzv.cz">jeddah@honorary.mzv.cz </a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Danish.png"></p>' +
			            '<p><strong style="color:black">Danish Consulate</strong></p>' +
			            '<p>E.A. Juffali Bros. P.O. Box 297 21411</p>' +
			            '<p>Phone: +966 (2) 667 2222</p>' +
			            '<p>Email:<a href="mailto:dkcons@eajb.com.sa">dkcons@eajb.com.sa </a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Indonesian.png"></p>' +
			            '<p><strong style="color:black">​Indonesian Consulate</strong></p>' +
			            '<p>Al-Mualifin Street Al-Rehab Dist.</p>' +
			            '<p>Phone: (966-2) 6711271</p>' +
			            '<p>Website: <a href="http://www.kjrijeddah.org.sa" target="_blank">http://www.kjrijeddah.org.sa</a></p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Pakistani.png"></p>' +
			            '<p><strong style="color:black">Pakistani Consulate</strong></p>' +
			            '<p>N 17 E 7 Sector, Mushrefah Ibrahim Al-Tassan Street 19 Building No. 58</p>' +
			            '<p>Phone: (+966-2) -6692371, 669046, 6691047</p>' +
			            '<p>Website: <a href="http://www.pakconsulatejeddah.com" target="_blank">http://www.pakconsulatejeddah.com</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Egptian.png"></p>' +
			            '<p><strong style="color:black">Egyptian Consulate</strong></p>' +
			            '<p>Phone: (009662 ) 6605205 - 6604822</p>' +
			            '<p>Website: <a href="http://www.mfa.gov.eg/Missions/ksa/jeddah/Consulate/en-GB/default.htm" target="_blank">http://www.mfa.gov.eg/Missions/ksa/jeddah/Consulate/en-GB/default.htm</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Indian.png"></p>' +
			            '<p><strong style="color:black">​Indian Consulate</strong></p>' +
			            '<p>Bldg. of M/s Bughshan & Bros Madinah Road Sharafiah Distt,</p>' +
			            '<p>Phone: 00-966-2-6520104, 6520112</p>' +
			            '<p>Website: <a href="http://www.cgijeddah.com/" target="_blank">http://www.cgijeddah.com/</a></p>' +
			        '</td>' +
			    '</tr>' +

			    '<tr>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/French.png"></p>' +
			            '<p><strong style="color:black">French Consulate</strong></p>' +
			            '<p>Quartier Al Hamra, rue Al Shouara</p>' +
			            '<p>Phone: [966] (2) 668 15 50</p>' +
			            '<p>Website: <a href="http://www.consulfrance-djeddah.org/" target="_blank">http://www.consulfrance-djeddah.org/</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p><img alt="" src="' + $baseURL + 'front_assets/images/flag/Egptian.png"></p>' +
			            '<p><strong style="color:black">Greek Consulate</strong></p>' +
			            '<p>Nour El Hayat, Plot 187, Al Andalus District, Jeddah</p>' +
			            '<p>Phone: (009662) 6674064, 6674088</p>' +
			            '<p>Email:<a href="mailto:grgencon.jed@mfa.gr">grgencon.jed@mfa.gr</a></p>' +
			        '</td>' +
			        '<td style="width:33%;border-right: 1px solid #dee2e6; border-bottom: 1px solid #dee2e6;font-size: 15px; color: #212529; padding: 0; padding:20px 10px; line-height: 1.4; vertical-align: top;">' +
			            '<p>&nbsp;</p>' +
			        '</td>' +
			    '</tr>' +
			'</table>'
	},
	{
		title: 'Normal Unordered List',
		image: 'unorderlist-template.gif',
		description: 'A normal unordered list.',
		html: '<ul class="normal-bullet">' +
			        '<li>Enter your text here.</li>' +
			        '<li>Enter your text here.</li>' +
			        '<li>Enter your text here.</li>' +
			        '<li>Enter your text here.</li>' +
			        '<li>Enter your text here.</li>' +
			    '</ul>' +
		    '<p>&nbsp;</p>'
	},
	{
		title: 'Arrowed Unordered List',
		image: 'arrowlist-template.gif',
		description: 'An arrowed unordered list.',
		html: '<ul class="arrow-bullet">' +
			        '<li>Enter your text here.</li>' +
			        '<li>Enter your text here.</li>' +
			        '<li>Enter your text here.</li>' +
			        '<li>Enter your text here.</li>' +
			        '<li>Enter your text here.</li>' +
			    '</ul>' +
		    '<p>&nbsp;</p>'
	}]
} );
