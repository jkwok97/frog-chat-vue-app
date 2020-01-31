<template>
    <div class="row">
        <div class="header">
            <h1 class="chat">Frog Brothers Chat</h1>
            <div class="user">
                <img src="../assets/gang-frog.png" class="user-image">
                <h3 class="user-name">Vito Croakleone</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .row {
        width: 100%;
    }
    .header {
        padding: 25px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .chat {
        font-weight: 200;
    }
    .user {
        display: inline-flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
    .user-image {
        height: 40px;
        width: 40px;
        margin-right: 5px;
    }
    .user-name {
        margin: 0;
    }
</style>