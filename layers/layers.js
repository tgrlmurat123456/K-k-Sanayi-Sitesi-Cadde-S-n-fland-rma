var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
maxResolution:5.600893230452393,

            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZGMAV_1 = new ol.format.GeoJSON();
var features_ZGMAV_1 = format_ZGMAV_1.readFeatures(json_ZGMAV_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZGMAV_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZGMAV_1.addFeatures(features_ZGMAV_1);
var lyr_ZGMAV_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZGMAV_1,
maxResolution:5.600893230452393,
 
                style: style_ZGMAV_1,
                popuplayertitle: 'ÇİZGİ MAVİ',
                interactive: true,
                title: '<img src="styles/legend/ZGMAV_1.png" /> ÇİZGİ MAVİ'
            });
var format_ZGKIRMIZI_2 = new ol.format.GeoJSON();
var features_ZGKIRMIZI_2 = format_ZGKIRMIZI_2.readFeatures(json_ZGKIRMIZI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZGKIRMIZI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZGKIRMIZI_2.addFeatures(features_ZGKIRMIZI_2);
var lyr_ZGKIRMIZI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZGKIRMIZI_2,
maxResolution:5.600893230452393,
 
                style: style_ZGKIRMIZI_2,
                popuplayertitle: 'ÇİZGİ KIRMIZI',
                interactive: true,
                title: '<img src="styles/legend/ZGKIRMIZI_2.png" /> ÇİZGİ KIRMIZI'
            });
var format_ZGYEL_3 = new ol.format.GeoJSON();
var features_ZGYEL_3 = format_ZGYEL_3.readFeatures(json_ZGYEL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZGYEL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZGYEL_3.addFeatures(features_ZGYEL_3);
var lyr_ZGYEL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZGYEL_3,
maxResolution:5.600893230452393,
 
                style: style_ZGYEL_3,
                popuplayertitle: 'ÇİZGİ YEŞİL',
                interactive: true,
                title: '<img src="styles/legend/ZGYEL_3.png" /> ÇİZGİ YEŞİL'
            });
var format_ZGPEMPE_4 = new ol.format.GeoJSON();
var features_ZGPEMPE_4 = format_ZGPEMPE_4.readFeatures(json_ZGPEMPE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZGPEMPE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZGPEMPE_4.addFeatures(features_ZGPEMPE_4);
var lyr_ZGPEMPE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZGPEMPE_4,
maxResolution:5.600893230452393,
 
                style: style_ZGPEMPE_4,
                popuplayertitle: 'ÇİZGİ PEMPE',
                interactive: true,
                title: '<img src="styles/legend/ZGPEMPE_4.png" /> ÇİZGİ PEMPE'
            });
var format_ZGTURUNCU_5 = new ol.format.GeoJSON();
var features_ZGTURUNCU_5 = format_ZGTURUNCU_5.readFeatures(json_ZGTURUNCU_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZGTURUNCU_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZGTURUNCU_5.addFeatures(features_ZGTURUNCU_5);
var lyr_ZGTURUNCU_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZGTURUNCU_5,
maxResolution:5.600893230452393,
 
                style: style_ZGTURUNCU_5,
                popuplayertitle: 'ÇİZGİ TURUNCU',
                interactive: true,
                title: '<img src="styles/legend/ZGTURUNCU_5.png" /> ÇİZGİ TURUNCU'
            });
var format_ZGSARI_6 = new ol.format.GeoJSON();
var features_ZGSARI_6 = format_ZGSARI_6.readFeatures(json_ZGSARI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZGSARI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZGSARI_6.addFeatures(features_ZGSARI_6);
var lyr_ZGSARI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZGSARI_6,
maxResolution:5.600893230452393,
 
                style: style_ZGSARI_6,
                popuplayertitle: 'ÇİZGİ SARI',
                interactive: true,
                title: '<img src="styles/legend/ZGSARI_6.png" /> ÇİZGİ SARI'
            });
var format_ZGKAHVERENG_7 = new ol.format.GeoJSON();
var features_ZGKAHVERENG_7 = format_ZGKAHVERENG_7.readFeatures(json_ZGKAHVERENG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZGKAHVERENG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZGKAHVERENG_7.addFeatures(features_ZGKAHVERENG_7);
var lyr_ZGKAHVERENG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZGKAHVERENG_7,
maxResolution:5.600893230452393,
 
                style: style_ZGKAHVERENG_7,
                popuplayertitle: 'ÇİZGİ KAHVERENGİ',
                interactive: true,
                title: '<img src="styles/legend/ZGKAHVERENG_7.png" /> ÇİZGİ KAHVERENGİ'
            });
var format_ZGTURKUAZ_8 = new ol.format.GeoJSON();
var features_ZGTURKUAZ_8 = format_ZGTURKUAZ_8.readFeatures(json_ZGTURKUAZ_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZGTURKUAZ_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZGTURKUAZ_8.addFeatures(features_ZGTURKUAZ_8);
var lyr_ZGTURKUAZ_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZGTURKUAZ_8,
maxResolution:5.600893230452393,
 
                style: style_ZGTURKUAZ_8,
                popuplayertitle: 'ÇİZGİ TURKUAZ',
                interactive: true,
                title: '<img src="styles/legend/ZGTURKUAZ_8.png" /> ÇİZGİ TURKUAZ'
            });
var format_ZGGR_9 = new ol.format.GeoJSON();
var features_ZGGR_9 = format_ZGGR_9.readFeatures(json_ZGGR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZGGR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZGGR_9.addFeatures(features_ZGGR_9);
var lyr_ZGGR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZGGR_9,
maxResolution:5.600893230452393,
 
                style: style_ZGGR_9,
                popuplayertitle: 'ÇİZGİ GRİ',
                interactive: true,
                title: '<img src="styles/legend/ZGGR_9.png" /> ÇİZGİ GRİ'
            });
var format_METN_10 = new ol.format.GeoJSON();
var features_METN_10 = format_METN_10.readFeatures(json_METN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_METN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_METN_10.addFeatures(features_METN_10);
var lyr_METN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_METN_10,
maxResolution:5.600893230452393,
 
                style: style_METN_10,
                popuplayertitle: 'METİN',
                interactive: true,
                title: '<img src="styles/legend/METN_10.png" /> METİN'
            });
var format_ZGMOR_11 = new ol.format.GeoJSON();
var features_ZGMOR_11 = format_ZGMOR_11.readFeatures(json_ZGMOR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZGMOR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZGMOR_11.addFeatures(features_ZGMOR_11);
var lyr_ZGMOR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZGMOR_11,
maxResolution:5.600893230452393,
 
                style: style_ZGMOR_11,
                popuplayertitle: 'ÇİZGİ MOR',
                interactive: true,
                title: '<img src="styles/legend/ZGMOR_11.png" /> ÇİZGİ MOR'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ZGMAV_1.setVisible(true);lyr_ZGKIRMIZI_2.setVisible(true);lyr_ZGYEL_3.setVisible(true);lyr_ZGPEMPE_4.setVisible(true);lyr_ZGTURUNCU_5.setVisible(true);lyr_ZGSARI_6.setVisible(true);lyr_ZGKAHVERENG_7.setVisible(true);lyr_ZGTURKUAZ_8.setVisible(true);lyr_ZGGR_9.setVisible(true);lyr_METN_10.setVisible(true);lyr_ZGMOR_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ZGMAV_1,lyr_ZGKIRMIZI_2,lyr_ZGYEL_3,lyr_ZGPEMPE_4,lyr_ZGTURUNCU_5,lyr_ZGSARI_6,lyr_ZGKAHVERENG_7,lyr_ZGTURKUAZ_8,lyr_ZGGR_9,lyr_METN_10,lyr_ZGMOR_11];
lyr_ZGMAV_1.set('fieldAliases', {'fid': 'fid', });
lyr_ZGKIRMIZI_2.set('fieldAliases', {'fid': 'fid', });
lyr_ZGYEL_3.set('fieldAliases', {'fid': 'fid', });
lyr_ZGPEMPE_4.set('fieldAliases', {'fid': 'fid', });
lyr_ZGTURUNCU_5.set('fieldAliases', {'fid': 'fid', });
lyr_ZGSARI_6.set('fieldAliases', {'fid': 'fid', });
lyr_ZGKAHVERENG_7.set('fieldAliases', {'fid': 'fid', });
lyr_ZGTURKUAZ_8.set('fieldAliases', {'fid': 'fid', });
lyr_ZGGR_9.set('fieldAliases', {'fid': 'fid', });
lyr_METN_10.set('fieldAliases', {'fid': 'fid', 'METİN': 'METİN', });
lyr_ZGMOR_11.set('fieldAliases', {'fid': 'fid', });
lyr_ZGMAV_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_ZGKIRMIZI_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_ZGYEL_3.set('fieldImages', {'fid': '', });
lyr_ZGPEMPE_4.set('fieldImages', {'fid': '', });
lyr_ZGTURUNCU_5.set('fieldImages', {'fid': '', });
lyr_ZGSARI_6.set('fieldImages', {'fid': '', });
lyr_ZGKAHVERENG_7.set('fieldImages', {'fid': '', });
lyr_ZGTURKUAZ_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_ZGGR_9.set('fieldImages', {'fid': '', });
lyr_METN_10.set('fieldImages', {'fid': 'TextEdit', 'METİN': 'TextEdit', });
lyr_ZGMOR_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_ZGMAV_1.set('fieldLabels', {'fid': 'no label', });
lyr_ZGKIRMIZI_2.set('fieldLabels', {'fid': 'no label', });
lyr_ZGYEL_3.set('fieldLabels', {'fid': 'no label', });
lyr_ZGPEMPE_4.set('fieldLabels', {'fid': 'no label', });
lyr_ZGTURUNCU_5.set('fieldLabels', {'fid': 'no label', });
lyr_ZGSARI_6.set('fieldLabels', {'fid': 'no label', });
lyr_ZGKAHVERENG_7.set('fieldLabels', {'fid': 'no label', });
lyr_ZGTURKUAZ_8.set('fieldLabels', {'fid': 'no label', });
lyr_ZGGR_9.set('fieldLabels', {'fid': 'no label', });
lyr_METN_10.set('fieldLabels', {'fid': 'hidden field', 'METİN': 'no label', });
lyr_ZGMOR_11.set('fieldLabels', {'fid': 'no label', });
lyr_ZGMOR_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});