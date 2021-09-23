<template>
    <div>
        Your CRIT Value on this artifact is <b>{{ cv }}</b>.<hr/>
        <b-tag v-if="cv < 10" type="is-danger" size="is-large">No upgrades</b-tag>
        <b-tag v-if="cv >= 10 && cv < 20" type="is-warning is-light" size="is-large">Average</b-tag>
        <b-tag v-if="cv >= 20 && cv < 30" type="is-warning" size="is-large">Decent</b-tag>
        <b-tag v-if="cv >= 30 && cv < 40" type="is-success is-light" size="is-large">Very good</b-tag>
        <b-tag v-if="cv >= 40 && cv < 50" type="is-success" size="is-large">Jewel</b-tag>
        <b-tag v-if="cv >= 50 && cv < 70" type="is-success" size="is-large">Unicorn ...?</b-tag>
        <b-tag v-if="cv >= 70" type="is-danger" size="is-large">No cheating. >_></b-tag>
    </div>
</template>

<script>
export default {
    computed: {
        cv: function() {
            return (this.dmg + (this.rate * 2)).toFixed(1)
        }
    },
    props: {
        rate: {
            type: Number,
            required: true
        },
        dmg: {
            type: Number,
            required: true
        }
    },
}
</script>