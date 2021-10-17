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
                            <b-slider v-model="rate" :min="0" :max="22.8" :step="0.1"/>
                            <b-numberinput class="weirdassfix" v-model="rate" :controls="false" :min="0" :max="22.8" :step="0.1"/>
                        </b-field>
                        <b-field label="CRIT DMG">
                            <b-slider v-model="dmg" :min="0" :max="46.8" :step="0.1"/>
                            <b-numberinput class="weirdassfix" v-model="dmg" :controls="false" :min="0" :max="46.8" :step="0.1"/>
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
    }
}
</script>

<style>
#app {
  text-align: center;
}

.weirdassfix {
    /* about this:
     * when implementing the number input control next to the slider,
     * there were some cases (namely, dragging one of the sliders all the way to the right),
     * where the slider would actually be *under* the number input. this does not look good,
     * so here's a really fucking stupid fix. see, having a whole basically hacked together
     * personal site comes in handy sometimes ;)
     */
    margin-left: 5px;
}
</style>
