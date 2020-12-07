var wms_layers = [];

var format_U_05_10_BU_UNK_20_12_06_0 = new ol.format.GeoJSON();
var features_U_05_10_BU_UNK_20_12_06_0 = format_U_05_10_BU_UNK_20_12_06_0.readFeatures(json_U_05_10_BU_UNK_20_12_06_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_05_10_BU_UNK_20_12_06_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_05_10_BU_UNK_20_12_06_0.addFeatures(features_U_05_10_BU_UNK_20_12_06_0);
var lyr_U_05_10_BU_UNK_20_12_06_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_05_10_BU_UNK_20_12_06_0, 
                style: style_U_05_10_BU_UNK_20_12_06_0,
                interactive: true,
                title: '<img src="styles/legend/U_05_10_BU_UNK_20_12_06_0.png" /> U_05_10_BU_UNK_20_12_06'
            });
var format_U_05_10_B_YES_20_12_06_1 = new ol.format.GeoJSON();
var features_U_05_10_B_YES_20_12_06_1 = format_U_05_10_B_YES_20_12_06_1.readFeatures(json_U_05_10_B_YES_20_12_06_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_05_10_B_YES_20_12_06_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_05_10_B_YES_20_12_06_1.addFeatures(features_U_05_10_B_YES_20_12_06_1);
var lyr_U_05_10_B_YES_20_12_06_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_05_10_B_YES_20_12_06_1, 
                style: style_U_05_10_B_YES_20_12_06_1,
                interactive: true,
                title: '<img src="styles/legend/U_05_10_B_YES_20_12_06_1.png" /> U_05_10_B_YES_20_12_06'
            });
var format_U_05_10_BL_02_20_12_06_2 = new ol.format.GeoJSON();
var features_U_05_10_BL_02_20_12_06_2 = format_U_05_10_BL_02_20_12_06_2.readFeatures(json_U_05_10_BL_02_20_12_06_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_05_10_BL_02_20_12_06_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_05_10_BL_02_20_12_06_2.addFeatures(features_U_05_10_BL_02_20_12_06_2);
var lyr_U_05_10_BL_02_20_12_06_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_05_10_BL_02_20_12_06_2, 
                style: style_U_05_10_BL_02_20_12_06_2,
                interactive: true,
                title: '<img src="styles/legend/U_05_10_BL_02_20_12_06_2.png" /> U_05_10_BL_02_20_12_06'
            });
var format_U_05_10_BL_01_20_12_06_3 = new ol.format.GeoJSON();
var features_U_05_10_BL_01_20_12_06_3 = format_U_05_10_BL_01_20_12_06_3.readFeatures(json_U_05_10_BL_01_20_12_06_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_05_10_BL_01_20_12_06_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_05_10_BL_01_20_12_06_3.addFeatures(features_U_05_10_BL_01_20_12_06_3);
var lyr_U_05_10_BL_01_20_12_06_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_05_10_BL_01_20_12_06_3, 
                style: style_U_05_10_BL_01_20_12_06_3,
                interactive: true,
                title: '<img src="styles/legend/U_05_10_BL_01_20_12_06_3.png" /> U_05_10_BL_01_20_12_06'
            });
var format_U_05_10_B_MIX_20_12_06_4 = new ol.format.GeoJSON();
var features_U_05_10_B_MIX_20_12_06_4 = format_U_05_10_B_MIX_20_12_06_4.readFeatures(json_U_05_10_B_MIX_20_12_06_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_05_10_B_MIX_20_12_06_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_05_10_B_MIX_20_12_06_4.addFeatures(features_U_05_10_B_MIX_20_12_06_4);
var lyr_U_05_10_B_MIX_20_12_06_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_05_10_B_MIX_20_12_06_4, 
                style: style_U_05_10_B_MIX_20_12_06_4,
                interactive: true,
                title: '<img src="styles/legend/U_05_10_B_MIX_20_12_06_4.png" /> U_05_10_B_MIX_20_12_06'
            });
var format_U_05_10_B_GPR_20_12_06_5 = new ol.format.GeoJSON();
var features_U_05_10_B_GPR_20_12_06_5 = format_U_05_10_B_GPR_20_12_06_5.readFeatures(json_U_05_10_B_GPR_20_12_06_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_05_10_B_GPR_20_12_06_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_05_10_B_GPR_20_12_06_5.addFeatures(features_U_05_10_B_GPR_20_12_06_5);
var lyr_U_05_10_B_GPR_20_12_06_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_05_10_B_GPR_20_12_06_5, 
                style: style_U_05_10_B_GPR_20_12_06_5,
                interactive: true,
                title: '<img src="styles/legend/U_05_10_B_GPR_20_12_06_5.png" /> U_05_10_B_GPR_20_12_06'
            });
var format_U_05_10_B_GPU_20_12_06_6 = new ol.format.GeoJSON();
var features_U_05_10_B_GPU_20_12_06_6 = format_U_05_10_B_GPU_20_12_06_6.readFeatures(json_U_05_10_B_GPU_20_12_06_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_05_10_B_GPU_20_12_06_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_05_10_B_GPU_20_12_06_6.addFeatures(features_U_05_10_B_GPU_20_12_06_6);
var lyr_U_05_10_B_GPU_20_12_06_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_05_10_B_GPU_20_12_06_6, 
                style: style_U_05_10_B_GPU_20_12_06_6,
                interactive: true,
                title: '<img src="styles/legend/U_05_10_B_GPU_20_12_06_6.png" /> U_05_10_B_GPU_20_12_06'
            });
var format_U_05_10_B_COM_20_12_06_7 = new ol.format.GeoJSON();
var features_U_05_10_B_COM_20_12_06_7 = format_U_05_10_B_COM_20_12_06_7.readFeatures(json_U_05_10_B_COM_20_12_06_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_05_10_B_COM_20_12_06_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_05_10_B_COM_20_12_06_7.addFeatures(features_U_05_10_B_COM_20_12_06_7);
var lyr_U_05_10_B_COM_20_12_06_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_05_10_B_COM_20_12_06_7, 
                style: style_U_05_10_B_COM_20_12_06_7,
                interactive: true,
                title: '<img src="styles/legend/U_05_10_B_COM_20_12_06_7.png" /> U_05_10_B_COM_20_12_06'
            });
var format_U_05_10_B_RES_20_12_06_8 = new ol.format.GeoJSON();
var features_U_05_10_B_RES_20_12_06_8 = format_U_05_10_B_RES_20_12_06_8.readFeatures(json_U_05_10_B_RES_20_12_06_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_05_10_B_RES_20_12_06_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_05_10_B_RES_20_12_06_8.addFeatures(features_U_05_10_B_RES_20_12_06_8);
var lyr_U_05_10_B_RES_20_12_06_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_05_10_B_RES_20_12_06_8, 
                style: style_U_05_10_B_RES_20_12_06_8,
                interactive: true,
                title: '<img src="styles/legend/U_05_10_B_RES_20_12_06_8.png" /> U_05_10_B_RES_20_12_06'
            });

lyr_U_05_10_BU_UNK_20_12_06_0.setVisible(true);lyr_U_05_10_B_YES_20_12_06_1.setVisible(true);lyr_U_05_10_BL_02_20_12_06_2.setVisible(true);lyr_U_05_10_BL_01_20_12_06_3.setVisible(true);lyr_U_05_10_B_MIX_20_12_06_4.setVisible(true);lyr_U_05_10_B_GPR_20_12_06_5.setVisible(true);lyr_U_05_10_B_GPU_20_12_06_6.setVisible(true);lyr_U_05_10_B_COM_20_12_06_7.setVisible(true);lyr_U_05_10_B_RES_20_12_06_8.setVisible(true);
var layersList = [lyr_U_05_10_BU_UNK_20_12_06_0,lyr_U_05_10_B_YES_20_12_06_1,lyr_U_05_10_BL_02_20_12_06_2,lyr_U_05_10_BL_01_20_12_06_3,lyr_U_05_10_B_MIX_20_12_06_4,lyr_U_05_10_B_GPR_20_12_06_5,lyr_U_05_10_B_GPU_20_12_06_6,lyr_U_05_10_B_COM_20_12_06_7,lyr_U_05_10_B_RES_20_12_06_8];
lyr_U_05_10_BU_UNK_20_12_06_0.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', });
lyr_U_05_10_B_YES_20_12_06_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'amenity': 'amenity', 'building_u': 'building_u', 'religion': 'religion', 'denominati': 'denominati', 'building_l': 'building_l', 'name': 'name', 'shop': 'shop', });
lyr_U_05_10_BL_02_20_12_06_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'amenity': 'amenity', 'name': 'name', 'shop': 'shop', 'building_u': 'building_u', });
lyr_U_05_10_BL_01_20_12_06_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'amenity': 'amenity', 'name': 'name', 'building_u': 'building_u', 'denominati': 'denominati', 'height': 'height', 'religion': 'religion', 'historic': 'historic', 'inscriptio': 'inscriptio', 'start_date': 'start_date', 'tourism': 'tourism', 'shop': 'shop', 'leisure': 'leisure', });
lyr_U_05_10_B_MIX_20_12_06_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', 'building_1': 'building_1', });
lyr_U_05_10_B_GPR_20_12_06_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', 'denominati': 'denominati', 'height': 'height', 'religion': 'religion', 'name': 'name', 'tourism': 'tourism', 'building_1': 'building_1', 'leisure': 'leisure', });
lyr_U_05_10_B_GPU_20_12_06_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'building_1': 'building_1', 'amenity': 'amenity', 'name': 'name', 'religion': 'religion', });
lyr_U_05_10_B_COM_20_12_06_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'amenity': 'amenity', 'name': 'name', 'building_1': 'building_1', 'shop': 'shop', });
lyr_U_05_10_B_RES_20_12_06_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'building_1': 'building_1', 'name': 'name', 'shop': 'shop', });
lyr_U_05_10_BU_UNK_20_12_06_0.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building_l': '', 'building_u': '', });
lyr_U_05_10_B_YES_20_12_06_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'type': '', 'amenity': '', 'building_u': '', 'religion': '', 'denominati': '', 'building_l': '', 'name': '', 'shop': '', });
lyr_U_05_10_BL_02_20_12_06_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building_l': '', 'amenity': '', 'name': '', 'shop': '', 'building_u': '', });
lyr_U_05_10_BL_01_20_12_06_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building_l': '', 'amenity': '', 'name': '', 'building_u': '', 'denominati': '', 'height': '', 'religion': '', 'historic': '', 'inscriptio': '', 'start_date': '', 'tourism': '', 'shop': '', 'leisure': '', });
lyr_U_05_10_B_MIX_20_12_06_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building_l': '', 'building_u': '', 'building_1': '', });
lyr_U_05_10_B_GPR_20_12_06_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'building': '', 'building_l': '', 'building_u': '', 'denominati': '', 'height': '', 'religion': '', 'name': '', 'tourism': '', 'building_1': '', 'leisure': '', });
lyr_U_05_10_B_GPU_20_12_06_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building_l': '', 'building_1': '', 'amenity': '', 'name': '', 'religion': '', });
lyr_U_05_10_B_COM_20_12_06_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building_l': '', 'amenity': '', 'name': '', 'building_1': '', 'shop': '', });
lyr_U_05_10_B_RES_20_12_06_8.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building_l': '', 'building_1': '', 'name': '', 'shop': '', });
lyr_U_05_10_BU_UNK_20_12_06_0.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', });
lyr_U_05_10_B_YES_20_12_06_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'amenity': 'no label', 'building_u': 'no label', 'religion': 'no label', 'denominati': 'no label', 'building_l': 'no label', 'name': 'no label', 'shop': 'no label', });
lyr_U_05_10_BL_02_20_12_06_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'amenity': 'no label', 'name': 'no label', 'shop': 'no label', 'building_u': 'no label', });
lyr_U_05_10_BL_01_20_12_06_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'amenity': 'no label', 'name': 'no label', 'building_u': 'no label', 'denominati': 'no label', 'height': 'no label', 'religion': 'no label', 'historic': 'no label', 'inscriptio': 'no label', 'start_date': 'no label', 'tourism': 'no label', 'shop': 'no label', 'leisure': 'no label', });
lyr_U_05_10_B_MIX_20_12_06_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', 'building_1': 'no label', });
lyr_U_05_10_B_GPR_20_12_06_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', 'denominati': 'no label', 'height': 'no label', 'religion': 'no label', 'name': 'no label', 'tourism': 'no label', 'building_1': 'no label', 'leisure': 'no label', });
lyr_U_05_10_B_GPU_20_12_06_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_1': 'no label', 'amenity': 'no label', 'name': 'no label', 'religion': 'no label', });
lyr_U_05_10_B_COM_20_12_06_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'amenity': 'no label', 'name': 'no label', 'building_1': 'no label', 'shop': 'no label', });
lyr_U_05_10_B_RES_20_12_06_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_1': 'no label', 'name': 'no label', 'shop': 'no label', });
lyr_U_05_10_B_RES_20_12_06_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});