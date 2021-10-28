<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="div">
                enkanomiya by tilda
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item><router-link to="/">Home</router-link></b-navbar-item>
            <b-navbar-item><router-link to="/about">About</router-link></b-navbar-item>
            <b-navbar-item><router-link to="/ar">AR Est. Days Calc</router-link></b-navbar-item>
            <b-navbar-item><router-link to="/cv">CV Calc</router-link></b-navbar-item>
        </template>
        <template #end>
            <b-navbar-item href="https://squiggle.cf">
                ➡️ squiggle.cf
            </b-navbar-item>
        </template>
    </b-navbar>
</template>