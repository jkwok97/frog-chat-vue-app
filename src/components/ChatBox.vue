<template>
    <div class="message-container">
        <div class="brothers-container">
            <app-brothers
                :brothers="brothers"
            ></app-brothers>
        </div>
        <div class="chat-container">
            <app-chat-view
                v-if="brotherSelected"
                :messages="messages"
            ></app-chat-view>
            <div v-if="!brotherSelected">
                <h3 class="select">Select A Brother To Send A Message</h3>
            </div>
        </div>
    </div>
</template>

<script>
import ChatView from './ChatView.vue';
import Brothers from './Brothers.vue';
import { eventBus } from '../main';

export default {
    props: ['newMessage'],
    created() {
        eventBus.$on('brotherWasSelected', (data) => {
                this.data = data;
                this.messages = data.messages;
                this.brotherSelected = true;
            });
    },
    data() {
        return {
            brothers: [
                { name: 'Sonny', messages: [] },
                { name: 'Fredo', messages: [] },
                { name: 'Michael', messages: [] },
                ],
            brotherChosen: {},
            data: {},
            messages: [],
            brotherSelected: false
        }
    },
    components: {
        'app-chat-view': ChatView,
        'app-brothers': Brothers
    },
    methods: {

    }
}
</script>

<style>
    .message-container {
        height: 65vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .brothers-container {
        width: 25%;
        height: 95%;
    }
    .chat-container {
        width: 70%;
        height: 95%;
    }
    .select {
        font-weight: 200;
    }
</style>