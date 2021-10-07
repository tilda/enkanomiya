<template>
    <div id="app">
        <Navbar/>
        <div class="hero is-info is-fullheight-with-navbar">
            <div class="hero-body container">
                <div class="card">
                    <div class="card-content">
                        <AboutApp/>
                        <hr/>
                        <b-field label="CRIT Rate">
                            <b-slider v-model="rate" :min="0" :max="22.8" :step="0.1" tooltip-always/>
                        </b-field>
                        <b-field label="CRIT DMG">
                            <b-slider v-model="dmg" :min="0" :max="46.8" :step="0.1" tooltip-always/>
                        </b-field>
                        <TotalCV :rate="rate" :dmg="dmg"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/Navbar"
import TotalCV from "./components/TotalCV"
import AboutApp from "./components/AboutApp"

export default {
    name: "App",
    components: {
        Navbar,
        TotalCV,
        AboutApp
    },
    data() {
        return {
            rate: 0,
            dmg: 0
        }
    },
    methods: {
        aboutApp: function() {
            this.$buefy.dialog.alert({
                title: 'About enkanomiya',
                message: "Hello there! This website is intended to be a community resource for the game <a href='https://genshin.mihoyo.com'>Genshin Impact</a>. It calculates the 'CRIT Value' of an artifact so you don't have to do all that pesky 'mental math' yourself."
            })
        }
    }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
