<template>
    <div>
        <span v-if="currentAR === goalAR || currentAR > goalAR">
            <span class="is-size-4">Seems that you're already at your goal!</span>
            <br/>If you're not, simply just adjust the sliders above. No worries.
        </span>
        <span v-else>
            <span class="is-size-4">Going from AR<b>{{ currentAR }}</b> to AR<b>{{ goalAR }}</b> would:</span>
            <ul class="list">
                <li>require <b>{{ getTotalXP }}</b> Adventure XP.</li>
                <li>take approximately <b>{{ convertToDays() }}</b> days.</li>
            </ul>
        </span>
    </div>
</template>

<style scoped>
    .list {
        list-style-type: disc;
        list-style-position: inside;
    }
</style>

<script>
import { default as table } from '../utils/ARTotalTable'

export default {
    computed: {
        getTotalXP: function() {
            // NOTE: subtracting 300 to get rid of a persistent calculation error
            return ((table[this.goalAR] - table[this.currentAR] - this.currentXP) - 300).toLocaleString()
        }
    }, 
    methods: {
        convertToDays: function() {
            let resinXP = this.resinUsed / 20 * 100
            const commsXP = 1500
            let gainPerDay = resinXP + commsXP
            return (((table[this.goalAR] - table[this.currentAR] - this.currentXP - 300) / gainPerDay)).toLocaleString()
        }
    },
    props: {
        resinUsed: {
            type: Number,
            required: true
        },
        currentXP: {
            type: Number,
            required: true
        },
        currentAR: {
            type: Number,
            required: true
        },
        goalAR: {
            type: Number,
            required: true
        }
    }
}
</script>