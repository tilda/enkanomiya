<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="div">
                enkanomiya
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item><router-link to="/">Home</router-link></b-navbar-item>
            <b-navbar-item><router-link to="/about">About</router-link></b-navbar-item>
            <b-navbar-item><router-link to="/ar">AR Est. Days Calc</router-link></b-navbar-item>
            <b-navbar-item><router-link to="/cv">CV Calc</router-link></b-navbar-item>
        </template>
        <template #end>
            <b-navbar-item href="https://stairway.cf">
                <img src="https://f000.backblazeb2.com/file/stairway-cdn/stairway.svg" width="32" height="32" class="dorchadas"> a stairway service
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style scoped>
    .dorchadas {
        margin-right: 5px;
    }
</style>