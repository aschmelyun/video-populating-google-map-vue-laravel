require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
    load: {
        key: ''
    }
});

const app = new Vue({
    el: '#app',
    data() {
        return {
            restaurants: [],
            infoWindowOptions: {
                pixelOffset: {
                    width: 0,
                    height: -35
                }
            },
            activeRestaurant: {},
            infoWindowOpened: false
        }
    },
    created() {
        axios.get('/api/restaurants')
            .then((response) => this.restaurants = response.data)
            .catch((error) => console.error(error));
    },
    methods: {
        getPosition(r) {
            return {
                lat: parseFloat(r.latitude),
                lng: parseFloat(r.longitude)
            }
        },
        handleMarkerClicked(r) {
            this.activeRestaurant = r;
            this.infoWindowOpened = true;
        },
        handleInfoWindowClose() {
            this.activeRestaurant = {};
            this.infoWindowOpened = false;
        },
        handleMapClick(e) {
            this.restaurants.push({
                name: "Placeholder",
                hours: "00:00am-00:00pm",
                city: "Orlando",
                state: "FL",
                latitude: e.latLng.lat(),
                longitude: e.latLng.lng()
            });
        }
    },
    computed: {
        mapCenter() {
            if (!this.restaurants.length) {
                return {
                    lat: 10,
                    lng: 10
                }
            }

            return {
                lat: parseFloat(this.restaurants[0].latitude),
                lng: parseFloat(this.restaurants[0].longitude)
            }
        },
        infoWindowPosition() {
            return {
                lat: parseFloat(this.activeRestaurant.latitude),
                lng: parseFloat(this.activeRestaurant.longitude)
            };
        },
    }
});
