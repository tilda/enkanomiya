<template>
    <div id="app">
        <Navbar/>
        <div class="hero is-info is-fullheight-with-navbar">
            <div class="hero-body container">
                <div class="card">
                    <div class="card-content">
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/Navbar"

export default {
    name: "App",
    components: {
        Navbar,
    },
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
    margin-left: 12px !important;
}

.z-indexfix {
    /* same as above LOL */
    z-index: 9999 !important;
}
</style>
