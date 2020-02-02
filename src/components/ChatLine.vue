<template>
    <div class="chat-line-container">
        <div class="dummy"></div>
        <div class="chat-line-input">
            <input 
                class="chat-line"
                placeholder="Message..."
                v-model="message"
                @keyup.enter="addMessage"
            >
            <button 
                class="send-button"
                @click="addMessage"
            >
                Send
            </button>
        </div>
        
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    data() {
        return {
            message: ''
        };
    },
    methods: {
        addMessage() {
            let d = new Date();
            let datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
            let newMessage = {date: datestring, message: this.message};
            eventBus.addMessage(newMessage)
            this.message = '';
        }
    }
}
</script>

<style>
    .chat-line-container {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .dummy {
        width: 25%;
    }
    .chat-line-input {
        width: 70%;
        display: flex;
        height: 90%;
        justify-content: space-evenly;
        align-items: center;
    }
    .chat-line {
        width: 85%;
        height: 90%;
        padding: 12px 20px;
        margin: 8px 10px 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-sizing: border-box;
    }
    .send-button {
        border-color: darkgreen;
        border-radius: 5px;
        background-color: darkgreen;
        width: 100px;
        height: 35px;
        color: white;
        outline: none;
        font-size: 20px;
        font-weight: 200;
    }
</style>