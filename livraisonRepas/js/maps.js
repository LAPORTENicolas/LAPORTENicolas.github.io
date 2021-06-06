let map;
let tabCoord = {
    Paris: {lat: 48.8666667, lng: 2.333333},
    Marseille: {lat: 43.296174, lng: 5.369953},
    Lyon: {lat: 45.757814, lng: 4.832011},
    Toulouse: {lat: 43.604462, lng: 1.444247},
    Nice: {lat: 43.700936, lng: 7.268391},
    Nantes: {lat: 47.218637, lng: -1.554136},
    Montpelier: {lat: 43.611242, lng: 3.876734},
    Strasbourg: {lat: 48.584614, lng: 7.750713},
    Bordeaux: {lat: 44.841225, lng: -0.580036},
    Lille: {lat: 50.636565, lng: 3.063528},
    Rennes: {lat: 48.111339, lng: -1.68002},
    Reims: {lat: 49.257789, lng: 4.031926},
    StEtienne: {lat: 45.440147, lng: 4.387306},
    LeHavre: {lat: 49.493898, lng: .107973},
    Toulon: {lat: 43.125731, lng: 5.930492},
    Grenoble: {lat: 45.18756, lng: 5.735782},
    Dijon: {lat: 47.321581, lng: 5.04147},
    Angers: {lat: 47.473988, lng: -0.551559},
    Nîmes: {lat: 43.837425, lng: 4.360069},
    Villeurbanne: {lat: 45.773312, lng: 4.886899},
    Montcuq: {lat: 44.3401726, lng: 1.1497937},
    Limoge: {lat: 45.854951, lng: 1.333545}
}

function initMap() {

    map = new google.maps.Map(document.querySelector('.map--map'), {
        center: { lat: 47.1390377, lng: 3},
        zoom: 5,
        mapId: 'd8ee60720f7b80fa'
    })
    for (let i in tabCoord) {
        const marker = new google.maps.Marker({
            position: tabCoord[i],
            icon: 'img/svg/pointer.svg',
            map: map
        })
    }
}

initMap();