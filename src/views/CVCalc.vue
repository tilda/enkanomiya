<template>
    <div>
        <b-field label="CRIT Rate">
            <b-slider v-model="rate" class="z-indexfix" :min="0" :max="22.8" :step="0.1"/>
            <b-numberinput v-model="rate" class="weirdassfix" :controls="false" :min="0" :max="22.8" :step="0.1"/>
        </b-field>
        <b-field label="CRIT DMG">
            <b-slider v-model="dmg" class="z-indexfix" :min="0" :max="46.8" :step="0.1"/>
            <b-numberinput v-model="dmg" class="weirdassfix" :controls="false" :min="0" :max="46.8" :step="0.1"/>
        </b-field>
        <TotalCV :rate="rate" :dmg="dmg"/>
    </div>
</template>

<script>
import TotalCV from "../components/TotalCV"

export default {
    components: {
        TotalCV
    },
    data() {
        return {
            rate: 0,
            dmg: 0
        }
    }
}
</script>