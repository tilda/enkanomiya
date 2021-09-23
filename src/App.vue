<template>
    <div id="app">
        <Navbar/>
        <div class="hero is-info is-fullheight-with-navbar">
            <div class="hero-body container">
                <div class="card">
                    <div class="card-content">
                        <b-collapse :open="false" aria-id="AboutApp">
                            <template #trigger>
                                <b-button label="What is this?" type="is-primary" outlined aria-controls="AboutApp"/>
                            </template>
                            <div class="notification mt-4">
                                <div class="content">
                                    This is <b>enkanomiya</b>, an online tool for the game <a href="https://genshin.mihoyo.com">Genshin Impact</a>.
                                    <br/>It intends to improve the understanding of the "Artifact" system in the game,<br/> by providing an objective way to decide what's possibly valuable and what's not.
                                    <br/>This is achieved through <a href="https://www.reddit.com/r/Genshin_Impact/comments/o5xuc4/simple_infographic_about_critical_value/">a simple "CRIT Value" formula</a>.
                                    <hr/><b>"Why would you make this?"</b> Making random web tools is fun.
                                    <br/><b>"What's the name from/why?"</b> <a href="https://genshin-impact.fandom.com/wiki/Enkanomiya">Reference from Genshin itself.</a> I thought it sounded cool.
                                    <br/><b>"Who made the original formula?"</b> Abell (u/Barocchi on reddit) created this formula.
                                    <br/><b>"Is this tool open-source?"</b> <a href="https://github.com/tilda/enkanomiya">It sure is!</a>
                                    <hr/><b>Have other questions about this tool?</b> <a href="https://squiggle.cf/contact">Feel free to drop a message</a>.
                                </div>
                            </div>
                        </b-collapse>
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

export default {
    name: "App",
    components: {
        Navbar,
        TotalCV
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
