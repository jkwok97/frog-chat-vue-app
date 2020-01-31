<template>
    <div class="chat-view-container">
        <div class="chat-messages" id="scroll">
            <h2 class="chat-message-header">Messages</h2>
            <div class="messages" v-for="(message, index) in messages" :key="index">
                <hr>
                <p><span class="green"><i><strong>Date: </strong></i></span> {{ message.date }}</p>
                <p><span class="green"><i><strong>Message: </strong></i></span> {{ message.message }}</p>
                <hr>
            </div>
            <div class="no-messages" v-if="messages.length === 0">
                <p>There are no messages</p>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main'

export default {
    props: ['messages'],
    data() {
        return {
            
        }
    },
    created() {
        eventBus.$on('messageWasAdded', (data) => {
            this.messages.push(data);
            setTimeout(() => {
                let items = document.querySelectorAll(".messages");
                let last = items[items.length-1];
                last.scrollIntoView();
            }, 250);
        });
    }
}
</script>

<style>
    .chat-view-container {
        border: 1px solid darkgreen;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        display: flex;
        overflow-y: auto;
    }
    .chat-messages {
        width: 95%;
        height: 95%;
    }
    .chat-message-header {
        font-weight: 200;
        text-align: center;
        width: 100%;
    }
    .messages {
        width: 100%;
        display: block;
        padding: 5px 5px;
    }
    .messages p {
        margin: 0;
    }
    .green {
        color: lightgreen;
    }
</style>