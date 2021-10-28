<template>
    <div>
        Going from AR{{ currentAR }} to AR{{ goalAR }} would require {{ getTotalXP }} Adventure XP.
        <br/>This would take approximately {{ convertToDays() }} days.
    </div>
</template>

<script>
import { default as table } from '../utils/ARTotalTable'

export default {
    computed: {
        getTotalXP: function() {
            return (table[this.goalAR] - table[this.currentAR] - this.currentXP).toLocaleString()
        }
    }, 
    methods: {
        convertToDays: function() {
            let resinXP = this.resinUsed / 20 * 100
            const commsXP = 1500
            let gainPerDay = resinXP + commsXP
            return ((table[this.goalAR] - table[this.currentAR] - this.currentXP) / gainPerDay).toLocaleString()
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