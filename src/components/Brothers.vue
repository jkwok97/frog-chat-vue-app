<template>
    <div class="brothers-view-container" id="brothers-div">
        <button 
            class="brother-button"
            v-for="(brother, index) in brothers" :key="index"
            @click="selectBrother(index)"
            :id="brother.name+index"
        >
            {{ brother.name }}
        </button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    props: ['brothers'],
    data() {
        return {
        }
    },
    mounted() {
        var header = document.getElementById('brothers-div');
        var btns = header.getElementsByClassName("brother-button");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) { 
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
            });
        }
    }, 
    methods: {
        selectBrother(index) {
            eventBus.selectBrother(this.brothers[index]);
        }
    }
}
</script>

<style>
    .brothers-view-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
        display: flex;
        height: 100%;
        width: 100%;
    }
    .brother-button {
        width: 75%;
        height: 50px;
        font-size: 30px;
        font-weight: 200;
        color: white;
        background-color: darkgreen;
        border-radius: 10px;
        margin: 10px 0;
        border-color: darkgreen;
        outline: none;
    }
    button:hover, button:active {
        background-color: lightgreen;
        color: darkslategray;
        font-weight: 300;
    }
    .active {
        background-color: lightgreen;
        color: darkslategray;
        font-weight: 300;
    }
    .test {
        width: 100%;
    }
   
</style>