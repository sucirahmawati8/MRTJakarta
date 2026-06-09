var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_railway_1 = new ol.format.GeoJSON();
var features_railway_1 = format_railway_1.readFeatures(json_railway_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_1.addFeatures(features_railway_1);
var lyr_railway_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_1, 
                style: style_railway_1,
                popuplayertitle: 'railway',
                interactive: true,
                title: '<img src="styles/legend/railway_1.png" /> railway'
            });
var format_railway_2 = new ol.format.GeoJSON();
var features_railway_2 = format_railway_2.readFeatures(json_railway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_2.addFeatures(features_railway_2);
var lyr_railway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_2, 
                style: style_railway_2,
                popuplayertitle: 'railway',
                interactive: true,
                title: '<img src="styles/legend/railway_2.png" /> railway'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_railway_1.setVisible(true);lyr_railway_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_railway_1,lyr_railway_2];
lyr_railway_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'wikipedia': 'wikipedia', 'operator': 'operator', 'alt_name': 'alt_name', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'public_tra': 'public_tra', 'network': 'network', 'name': 'name', });
lyr_railway_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'name_id': 'name_id', 'start_date': 'start_date', 'network': 'network', 'name_en': 'name_en', 'operator': 'operator', 'tunnel': 'tunnel', 'wikipedia': 'wikipedia', 'voltage': 'voltage', 'usage': 'usage', 'name': 'name', 'maxspeed': 'maxspeed', 'layer': 'layer', 'gauge': 'gauge', 'electrifie': 'electrifie', 'bridge': 'bridge', });
lyr_railway_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'wikipedia': '', 'operator': '', 'alt_name': '', 'addr_stree': '', 'addr_city': '', 'public_tra': '', 'network': '', 'name': '', });
lyr_railway_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'name_id': '', 'start_date': '', 'network': '', 'name_en': '', 'operator': '', 'tunnel': '', 'wikipedia': '', 'voltage': '', 'usage': '', 'name': '', 'maxspeed': '', 'layer': '', 'gauge': '', 'electrifie': '', 'bridge': '', });
lyr_railway_1.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'railway': 'inline label - visible with data', 'wikipedia': 'hidden field', 'operator': 'inline label - visible with data', 'alt_name': 'inline label - visible with data', 'addr_stree': 'no label', 'addr_city': 'no label', 'public_tra': 'no label', 'network': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_railway_2.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'railway': 'header label - visible with data', 'name_id': 'no label', 'start_date': 'hidden field', 'network': 'header label - visible with data', 'name_en': 'no label', 'operator': 'hidden field', 'tunnel': 'no label', 'wikipedia': 'no label', 'voltage': 'header label - visible with data', 'usage': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'gauge': 'no label', 'electrifie': 'no label', 'bridge': 'no label', });
lyr_railway_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});