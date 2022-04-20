<template>
  <div>
    <div class="text-center p-2 pt-3">
      <h6>Go everywhere</h6>
      <GmapAutocomplete @place_changed="setPlace" class="form-control" />
      <button @click="addMarker" class="btn btn-primary locate">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
      </button>
    </div>
    <br />
    <iframe
      src="https://maps.google.com/maps?width=520&amp;height=508&amp;hl=en&amp;q=%20atani+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      width="100%"
      height="550"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
      allowfullscreen
      id="gmap_canvas"
    ></iframe>

    <GmapMap
      :center="center"
      :zoom="12"
      style="width: 100%; height: 500px"
      map-type-id="terrain"
      class="d-none"
      :options="{
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUi: false,
      }"
    >
      <GmapMarker
        class="d-none"
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
        :clickable="true"
        :draggable="true"
      />
    </GmapMap>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBnsMuImeuWb7QdT5yaeMLGDGCxitMSK28',
    libraries: 'places,drawing,visualization',
  },
})
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 10, lng: 10 },
      currentPlace: null,
      markers: [],
      places: [],
    }
  },
  mounted() {
    this.geolocate()
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    },
  },
}
</script>

<style>
.locate {
  position: absolute;
  top: 43px;
  right: 0px;
}
</style>
