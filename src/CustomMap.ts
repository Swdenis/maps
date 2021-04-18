interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}

export class CustomMap {

    private googleMap: google.maps.Map

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

    }
    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id),{
            zoom:1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }
    
}