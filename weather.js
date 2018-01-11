var tempC;
var tempF;
var id;
var lat;
var lon;
var apiKey = '';
var url;
var img;
function backgroundChange(val){
	var result='';
	img= {'200': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/5/5f/22_Regen_ubt.jpeg)', '#000000', '<p> Tomasz Sienicki [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons</p>'],
'201': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/5/5f/22_Regen_ubt.jpeg)', '#000000', '<p> Tomasz Sienicki [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons</p>'],
'202': ['#000000', 'url(https://c1.staticflickr.com/5/4007/4582291674_63482c2241_b.jpg)', '#eeeeee', '<p> Gillie Rhodes https://www.flickr.com/photos/lovestruck94/4582291674/ </p>'],
'210': ['#1452c3', 'url(https://c1.staticflickr.com/5/4101/4875959488_66dded4455_o.jpg)', '#f0e1dd', '<p> Craig ONeal https://www.flickr.com/photos/craigoneal/4875959488/</p>'],
'211': ['#140548', 'url(https://c1.staticflickr.com/5/4133/4945573963_9d45b7867e_b.jpg)', '#4c4c4c', '<p>heitere_fahne https://www.flickr.com/photos/lurw/4945573963</p>'], 
'212': ['#333333', 'url(https://c1.staticflickr.com/7/6120/6328521966_12598422d1_o.jpg)', '#dddddd', '<p> JenniKate Wallace https://www.flickr.com/photos/jennikate/6328521966/</p>'],
'221': ['#222222', 'url(https://c1.staticflickr.com/3/2930/14442400006_132ae65307_o.jpg)', '#dddddd', '<p> Keith https://www.flickr.com/photos/kbphoto/14442400006/</p>'],
'230': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/5/5f/22_Regen_ubt.jpeg)', '#2d2d2d', '<p> Tomasz Sienicki [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons</p>'],
'231': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/5/5f/22_Regen_ubt.jpeg)', '#2d2d2d', '<p> Tomasz Sienicki [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons</p>'],
'232': ['#000000', 'url(https://c1.staticflickr.com/5/4007/4582291674_63482c2241_b.jpg)', '#eeeeee', '<p> Gillie Rhodes https://www.flickr.com/photos/lovestruck94/4582291674/ </p>'],
'300': ['#7B7EAB', 'url(https://c1.staticflickr.com/1/122/289665799_c0842abf96_o.jpg)', '#040A2D', '<p> Fay Celestial https://www.flickr.com/photos/winglessfay/289665799/</p>'], 
'301': ['#7B7EAB', 'url(https://c1.staticflickr.com/1/122/289665799_c0842abf96_o.jpg)', '#040A2D', '<p> Fay Celestial https://www.flickr.com/photos/winglessfay/289665799/</p>'],
'302': ['#7BA6AB', 'url(https://c2.staticflickr.com/4/3887/14689975454_3049be0f91_o.jpg)', '#F4F6E7', '<p> Steve Grant https://www.flickr.com/photos/patentboy/14689975454/</p>'],
'310': ['#7BA6AB', 'url(https://c2.staticflickr.com/4/3887/14689975454_3049be0f91_o.jpg)', '#F4F6E7', '<p> Steve Grant https://www.flickr.com/photos/patentboy/14689975454/</p>'],
'311': ['#7BA6AB', 'url(https://c2.staticflickr.com/4/3887/14689975454_3049be0f91_o.jpg)', '#F4F6E7', '<p> Steve Grant https://www.flickr.com/photos/patentboy/14689975454/</p>'],
'312': ['#6F1201', 'url(https://c1.staticflickr.com/9/8421/7600862832_7525eddf3c_o.jpg)', '#ffffff', '<p> anokarina https://www.flickr.com/photos/anokarina/7600862832/</p>'],
'313': ['#6F1201', 'url(https://c1.staticflickr.com/9/8421/7600862832_7525eddf3c_o.jpg)', '#ffffff', '<p> anokarina https://www.flickr.com/photos/anokarina/7600862832/</p>'],
'314': ['#3D85FF', 'url(https://upload.wikimedia.org/wikipedia/commons/8/8c/Cygnus_atratus%2C_pluie.JPG)', '#FFD03D', '<p> By Sérgio Valle Duarte (Own work) [CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons</p>'],
'321': ['#3D85FF', 'url(https://upload.wikimedia.org/wikipedia/commons/8/8c/Cygnus_atratus%2C_pluie.JPG)', '#FFD03D', '<p> By Sérgio Valle Duarte (Own work) [CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons</p>'],
'500': ['#6F1201', 'url(https://c1.staticflickr.com/9/8421/7600862832_7525eddf3c_o.jpg)', '#ffffff', '<p> anokarina https://www.flickr.com/photos/anokarina/7600862832/</p>'],
'501': ['#6F1201', 'url(https://c1.staticflickr.com/9/8421/7600862832_7525eddf3c_o.jpg)', '#ffffff', '<p> anokarina https://www.flickr.com/photos/anokarina/7600862832/</p>'],	
'502': ['#3D85FF', 'url(https://upload.wikimedia.org/wikipedia/commons/8/8c/Cygnus_atratus%2C_pluie.JPG)', '#FFD03D', '<p> By Sérgio Valle Duarte (Own work) [CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons</p>'],	
'503': ['#222222', 'url(https://upload.wikimedia.org/wikipedia/commons/5/5f/22_Regen_ubt.jpeg)', '#E3D4A3', '<p> Tomasz Sienicki [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons</p>'],	
'504': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/c/c2/Heavy_Rain.jpg)', '#2D000B', '<p> By Pridatko Oleksandr (Ukraine) [Public domain], via Wikimedia Commons</p>'],
'511': ['#000000', 'url(https://upload.wikimedia.org/wikipedia/commons/c/c6/Freezing_Rain_%2811537646776%29.jpg)', '#E5EEC3', '<p> By Lord of the Wings© from Toronto, Canada (Freezing Rain) [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons</p>'],	
'520': ['#3D85FF', 'url(https://upload.wikimedia.org/wikipedia/commons/8/8c/Cygnus_atratus%2C_pluie.JPG)', '#FFD03D', '<p> By Sérgio Valle Duarte (Own work) [CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons</p>'],	
'521': ['#222222', 'url(https://upload.wikimedia.org/wikipedia/commons/5/5f/22_Regen_ubt.jpeg)', '#E3D4A3', '<p> Tomasz Sienicki [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons</p>'],	
'522': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/c/c2/Heavy_Rain.jpg)', '#2D000B', '<p> By Pridatko Oleksandr (Ukraine) [Public domain], via Wikimedia Commons</p>'],
'531': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/c/c2/Heavy_Rain.jpg)', '#2D000B', '<p> By Pridatko Oleksandr (Ukraine) [Public domain], via Wikimedia Commons</p>'],	
'600': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/2/2d/20100213_Zlatograd_Bulgaria_3.jpg)', '#2D000B', '<p> By Ggia (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons</p>'],	
'601': ['#222222', 'url(https://upload.wikimedia.org/wikipedia/commons/0/04/Cyanocitta-cristata-004.jpg)', '#ffffff', '<p> By Mdf (Own work) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/)], via Wikimedia Commons</p>'],
'602': ['#222222', 'url(https://upload.wikimedia.org/wikipedia/commons/1/12/CargoNet_Di_12_Euro_4000_L%C3%B8nsdal_-_Bolna.jpg)', '#ffffff', '<p> By Kabelleger / David Gubler (http://www.bahnbilder.ch). (Own work : http://bahnbilder.ch/picture/7697.) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons</p>'],
'611': ['#222222', 'url(https://c2.staticflickr.com/4/3248/2982865228_2612a9ab2a_o.jpg)', '#fbffed', '<p> Martin https://www.flickr.com/photos/fieldus/2982865228/</p>'],
'612': ['#222222', 'url(https://c2.staticflickr.com/4/3248/2982865228_2612a9ab2a_o.jpg)', '#fbffed', '<p> Martin https://www.flickr.com/photos/fieldus/2982865228/</p>'],
'615': ['#222222', 'url(https://c1.staticflickr.com/1/40/86176691_942a5d5175_o.jpg)', '#fbffed', '<p> sookie https://www.flickr.com/photos/sookie/86176691/</p>'],
'616': ['#222222', 'url(https://c1.staticflickr.com/1/40/86176691_942a5d5175_o.jpg)', '#fbffed', '<p> sookie https://www.flickr.com/photos/sookie/86176691/</p>'],
'620': ['#222222', 'url(https://upload.wikimedia.org/wikipedia/commons/f/fe/Snow_Storm%2C_Near_Cedar_Breaks%2C_Utah_%28Road_14_from_Bryce_Canyon_to_Cedar_City%29_%283446248475%29.jpg)', '#fbffed', '<p> By Alex Proimos from Sydney, Australia [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons</p>'],
'621': ['#222222', 'url(https://upload.wikimedia.org/wikipedia/commons/c/c3/Miniskirts_in_snow_storm.jpg)', '#F0FDC5', '<p> Public Domain</p>'],
'622': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/a/ab/St._John_School_for_the_Deaf_Old_Building_and_Gym.jpg)', '#000000', '<p> Public Domain</p>'],
'701': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/8/8c/Wasserturm_im_Dunst.JPG)', '#000000', '<p> By Gliwi (Own work) [CC BY-SA 2.5 (http://creativecommons.org/licenses/by-sa/2.5)], via Wikimedia Commons</p>'],
'711': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/8/82/Malibu_Fire_October_2007_%281%29.jpg)', '#000000', '<p> By Ron Reiring (Malibu is burning 10/07  Uploaded by X-Weinzar) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons</p>'],
'721': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/1/17/Haze_in_Kuala_Lumpur.jpg)', '#000000', '<p> By This image was originally posted to Flickr by servus at 32919747. It was reviewed on 15 November 2006 by the FlickreviewR robot and was confirmed to be licensed under the terms of the cc-by-sa-2.0.   15 November 2006 [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons</p>'],
'731': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/6/69/Kuwait.A2003106.0805.250m.jpg)', '#000000', '<p> Public Domain</p>'],
'741': ['#bec9d4', 'url(https://upload.wikimedia.org/wikipedia/commons/3/3f/A_December_view_of_Woodnook_Valley%2C_Little_Ponton%2C_Lincolnshire%2C_England_08.JPG)', '#000000', '<p> By Acabashi (Own work) CC BY-SA 4.0 (http://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons</p>'],
'751': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/6/69/Kuwait.A2003106.0805.250m.jpg)', '#000000', '<p> Public Domain</p>'],
'761': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/d/de/Sandstorm_of_Longjing_Township_%2CTaichung_County_in_Taiwan.jpg)', '#000000', '<p> By 阿爾特斯 (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0) or GFDL (http://www.gnu.org/copyleft/fdl.html)], via Wikimedia Commons</p>'],
'762': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/7/73/Pyroclastic_flows_at_Mayon_Volcano.jpg)', '#000000', '<p> By C.G. Newhall [Public domain], via Wikimedia Commons</p>'],
'771': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/a/aa/Squall_line_Springfield_IL.jpg)', '#000000', '<p> By John White (Photosubmissions 2013030310002373) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons</p>'],
'781': ['#B79548', 'url(https://upload.wikimedia.org/wikipedia/commons/8/85/Tornade002.jpg)', '#303D42', '<p> By NSSL (NOAA) [Public domain], via Wikimedia Commons</p>'],
'800': ['#3019c9', 'url(https://upload.wikimedia.org/wikipedia/commons/e/e0/Mercury%2C_Venus_and_the_Moon_Align.jpg)', '#d4d4d4', '<p> By ESO/Y. Beletsky (http://www.eso.org/public/images/potw1025a/) [CC BY 4.0 (http://creativecommons.org/licenses/by/4.0)], via Wikimedia Commons</p>'],
'801': ['#7de2ee', 'url(https://upload.wikimedia.org/wikipedia/commons/4/4b/Sky-2.jpg)', '#0f0f0f', '<p>By Jessie Eastland (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons </p>'],
'802': ['#9ad0d6', 'url(https://upload.wikimedia.org/wikipedia/commons/c/c6/Kalundborg-mediumwave.swn.jpg)', '#2f2f2f', '<p> By Søren Wedel Nielsen (Own work) [GFDL (http://www.gnu.org/copyleft/fdl.html), CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/) or CC BY-SA 2.5 (http://creativecommons.org/licenses/by-sa/2.5)], via Wikimedia Commons</p>'],
'803': ['#7BA6AB', 'url(https://upload.wikimedia.org/wikipedia/commons/3/3b/Altocumulus_se_2.jpg)', '#0f0f0f', '<p> By Kr-val (Own work) [Public domain], via Wikimedia Commons</p>'],
'804': ['#B6C5C7', 'url(https://upload.wikimedia.org/wikipedia/commons/7/7b/Nimbostratus_Clouds_Virginia_USA.JPG)', '#0f0f0f', '<p> By Eric T Gunther (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons</p>'],
'900': ['#B79548', 'url(https://upload.wikimedia.org/wikipedia/commons/8/85/Tornade002.jpg)', '#303D42', '<p> By NSSL (NOAA) [Public domain], via Wikimedia Commons</p>'],
'901': ['#212732', 'url(https://c1.staticflickr.com/3/2320/2784462640_4b8c8f46f9_o.jpg)', '#000000', '<p> Craig ONeal https://www.flickr.com/photos/craigoneal/2784462640/</p>'],
'902': ['#405987', 'url(https://upload.wikimedia.org/wikipedia/commons/8/89/Cyclone_Catarina_from_the_ISS_on_March_26_2004.JPG)', '#222222', '<p> By Astronaut photograph ISS008-E-19646 was taken March 7, 2004, with a Kodak DCS760 digital camera equipped with an 50-mm lens, and is provided by the Earth Observations Laboratory, Johnson Space Center. [Public domain], via Wikimedia Commons</p>'],
'903': ['#000000', 'url(https://upload.wikimedia.org/wikipedia/commons/6/68/After_the_snowblower_%284335648866%29.jpg)', '#ffebad', '<p> By William F. Yurasko from Alexandria (After the snowblower) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons</p>'],
'904': ['#000000', 'url(https://upload.wikimedia.org/wikipedia/commons/5/53/Dunes_%286841812896%29.jpg)', '#ffebad', '<p> By Angela Marie from NRW/Germany (dunes) [CC BY 2.0 (http://creativecommons.org/licenses/by/2.0)], via Wikimedia Commons</p>'],
'905': ['#000000', 'url(https://upload.wikimedia.org/wikipedia/commons/f/f1/Windpark-Hoeflein-Lower-Austria-DSC_0008w.jpg)', '#ffebad', '<p> Peter Haas / , via Wikimedia Commons</p>'],
'906': ['#ffffff', 'url(https://upload.wikimedia.org/wikipedia/commons/1/16/Hailstorm.jpg)', '#000000', '<p> By NOAA Photo Library, NOAA Central Library; OAR/ERL/National Severe Storms Laboratory (NSSL) (http://www.photolib.noaa.gov/htmls/nssl0003.htm) [Public domain], via Wikimedia Commons</p>'],
'951': ['#3019c9', 'url(https://upload.wikimedia.org/wikipedia/commons/e/e0/Mercury%2C_Venus_and_the_Moon_Align.jpg)', '#d4d4d4', '<p> By ESO/Y. Beletsky (http://www.eso.org/public/images/potw1025a/) [CC BY 4.0 (http://creativecommons.org/licenses/by/4.0)], via Wikimedia Commons</p>'],
'952': ['#ffffff', 'url(https://c2.staticflickr.com/4/3093/2634655898_892d8538e6_o.jpg)', '#000000', '<p> Mathias Liebing https://www.flickr.com/photos/mathias764/2634655898/</p>'],
'953': ['#ffffff', 'url(https://c2.staticflickr.com/4/3093/2634655898_892d8538e6_o.jpg)', '#000000', '<p> Mathias Liebing https://www.flickr.com/photos/mathias764/2634655898/</p>'],
'954': ['#ffffff', 'url(https://c2.staticflickr.com/4/3093/2634655898_892d8538e6_o.jpg)', '#000000', '<p> Mathias Liebing https://www.flickr.com/photos/mathias764/2634655898/</p>'],
'955': ['#ffffff', 'url(https://c2.staticflickr.com/4/3093/2634655898_892d8538e6_o.jpg)', '#000000', '<p> Mathias Liebing https://www.flickr.com/photos/mathias764/2634655898/</p>'],
'956': ['#000000', 'url(https://upload.wikimedia.org/wikipedia/commons/f/f1/Windpark-Hoeflein-Lower-Austria-DSC_0008w.jpg)', '#ffebad', '<p> Peter Haas / , via Wikimedia Commons</p>'],
'957': ['#ffffff', 'url(https://c1.staticflickr.com/9/8152/7176953741_09e0b6dd87_h.jpg)', '#000000', '<p> Phllar https://www.flickr.com/photos/phliar/7176953741/</p>'],
'958': ['#ffffff', 'url(https://c1.staticflickr.com/9/8152/7176953741_09e0b6dd87_h.jpg)', '#000000', '<p> Phllar https://www.flickr.com/photos/phliar/7176953741/</p>'],
'959': ['#ffffff', 'url(https://c2.staticflickr.com/4/3253/2861975094_6b5191a971_b.jpg)', '#000000', '<p> Chalky Lives https://www.flickr.com/photos/traitlinburke/2861975094/</p>'],
'960': ['#ffffff', 'url(https://c2.staticflickr.com/4/3253/2861975094_6b5191a971_b.jpg)', '#000000', '<p> Chalky Lives https://www.flickr.com/photos/traitlinburke/2861975094/</p>'],
'961': ['#000000', 'url(https://c2.staticflickr.com/4/3792/11768662374_bda724ec9e_b.jpg)', '#ffebad', '<p> Greenstone Girl https://www.flickr.com/photos/greenstonegirlpix/11768662374/</p>'],
'962': ['#405987', 'url(https://upload.wikimedia.org/wikipedia/commons/8/89/Cyclone_Catarina_from_the_ISS_on_March_26_2004.JPG)', '#222222', '<p> By Astronaut photograph ISS008-E-19646 was taken March 7, 2004, with a Kodak DCS760 digital camera equipped with an 50-mm lens, and is provided by the Earth Observations Laboratory, Johnson Space Center. [Public domain], via Wikimedia Commons</p>']};
	result = img[val];
	$('html').css('background-color', result[0]);
	$('html').css('background-image', result[1]);
	$('body').css('color', result[2]);
	$(result[3]).appendTo('footer');
}
function update(){
	$.getJSON(url, function(data){
	tempF = data.main.temp;
	tempC = (tempF - 32) / 1.8;
	tempC = tempC.toFixed(2);
$('#location').text(data.name);
$('#description').text(data.weather[0].description);
$('.farenheight').text(tempF + " \xB0" + "F");
$('.celcius').text(tempC + " \xB0" + "C");
id = data.weather[0].id;
backgroundChange(id);
});
}
$(document).ready(function(){
	if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(weather) {
lat = weather.coords.latitude;
lon = weather.coords.longitude;
apiKey = window.prompt("enter your api key(available at: https://openweathermap.org/)")
url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&mode=json&units=imperial&APPID=' + apiKey;
update();
});
}
$('#temp').on('click', function(){
	$('.celcius').toggle();
	$('.farenheight').toggle();
});
});
