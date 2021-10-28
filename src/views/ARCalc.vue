<template>
    <div>
        <b-field label="Current AR">
            <b-slider v-model="currentAR" class="z-indexfix" :min="1" :max="60" :step="1"/>
            <b-numberinput v-model="currentAR" class="weirdassfix" :controls="false" :min="1" :max="60" :step="1"/>
        </b-field>
        <b-field label="Current XP">
            <b-slider v-model="currentXP" class="z-indexfix" :min="0" :max="retrieveLevelCap(currentAR)" :step="1"/>
            <b-numberinput v-model="currentXP" class="weirdassfix" :controls="false" :min="0" :max="retrieveLevelCap(currentAR)" :step="1"/>
        </b-field>
        <b-field label="Desired AR">
            <b-slider v-model="goalAR" class="z-indexfix" :min="1" :max="60" :step="1"/>
            <b-numberinput v-model="goalAR" class="weirdassfix" :controls="false" :min="1" :max="60" :step="1"/>
        </b-field>
        <b-field label="Resin Used Per Day">
            <b-slider v-model="resinUsed" class="z-indexfix" :min="1" :max="180" :step="1"/>
            <b-numberinput v-model="resinUsed" class="weirdassfix" :controls="false" :min="1" :max="60" :step="1"/>
        </b-field>
        <hr/>
        <TotalARDays :currentAR="currentAR" :currentXP="currentXP" :goalAR="goalAR" :resinUsed="resinUsed"/>
    </div>
</template>

<script>
import { default as nextAR } from '../utils/NextARLevelTable'
import TotalARDays from '../components/TotalARDays'

export default {
    components: {
        TotalARDays
    },
    methods: {
        retrieveLevelCap: function(ar) {
            return nextAR[ar]
        }
    },
    data() {
        return {
            currentAR: 1,
            currentXP: 0,
            goalAR: 60,
            resinUsed: 160,
        }
    }
}
</script>