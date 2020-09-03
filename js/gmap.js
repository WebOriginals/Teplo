var wWidth = $(window).innerWidth();
function initMap() {
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17,
            // center: { lat: 45.049080, lng: 38.960940 },
            center: { lat: 45.049201, lng: 38.958303 },
            // styles: [{
            //     stylers: [{
            //         saturation: -100
            //     }]
            // }]
            styles: [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 40
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 60
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#17212e"
                        },
                        {
                            "lightness": 1
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "saturation": 1
                        },
                        {
                            "color": "#2b3542"
                        },
                        {
                            "lightness": 1
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2b3542"
                        },
                        {
                            "lightness": 1
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#17212e"
                        },
                        {
                            "lightness": 1
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#26303d"
                        },
                        {
                            "lightness": 1
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#26303d"
                        },
                        {
                            "lightness": 1
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#202a37"
                        },
                        {
                            "lightness": 1
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#26303d"
                        },
                        {
                            "lightness": 1
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#17212e"
                        },
                        {
                            "lightness": 1
                        }
                    ]
                }
            ]
            
        }); 

    var contentString = '<div class="info__wrap"><div class="info__title" style="font-size:18px;">Теплолюкс</div><div class="info__address">г. Краснодар, ул. Бабушкина, 219</div></div>';
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    new google.maps.Marker({
        position: { lat: 45.0490, lng: 38.960990 },
        map: map,
        // icon: 'img/baloon.png'
        icon: 'img/map-marker.svg'
    }).addListener('click', function (event) {
        infoWindow.open(map, this);
    });

    function adapt() {
        wWidth = $(window).innerWidth();
        if (map != 'undefined') {
            console.log('шаг 1');
            if (wWidth < 992) {
                map.setCenter({
                    //   lat: 45.048605,
                    //   lng: 38.985924
                    lat: 45.0490,
                    lng: 38.960990
                });
                console.log('меньше 991');
                console.log('Ширина =' + wWidth);
            } else {
                map.setCenter({
                    lat: 45.049201,
                    lng: 38.958303
                });
                // console.log('стартовые');
                // console.log('Ширина =' + wWidth);
            }
        }
    }
    // Вот здесь
    $(window).on('resize', function () {

        // Тут замеряй размер двигай куда надо
        adapt();

    });
}

$(document).ready(function () {
    jQuery(window).trigger('resize');
}); 