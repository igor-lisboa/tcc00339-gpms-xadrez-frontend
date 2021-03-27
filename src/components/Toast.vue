<template>
    <div class="toast" v-if="showToast" @click="close">
        <div role="alert" :class="type ? getClass() : ''"> 
            <div class="toast-icon" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/alert.png') + ')' }"></div>
            <p class="toast-text">{{message}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
              message: null,
              type: null,
              showToast: false,
            }
        },
        name: 'toast',
        methods: {
            
            show(opts = {}) {
                this.message = opts.message;
                this.type = opts.type;
                this.showToast = true;

                setTimeout(() => {
                    this.close();
                }, 6000);
            },

            close() {
                this.showToast = false;
            },

            getClass(){
                console.log('getClass')
                if(this.type == "error"){
                    return 'toast-error';
                }
                return 'toast-success';
            }
        
        }
    }

</script>

<style>
    .toast
    {
        position: fixed;
        top: 20px;
        left: 20px;
        padding: 2em;
        overflow: hidden;
        z-index: 9999999999;
        width: 800px;
        pointer-events: none;
        height: 200px;
        animation-duration: 1000ms;
    }
    .toast-icon
    {
        display: block;
        width: 50px;
        min-width: 27px;
        height: 50px;
        margin-left: 1em;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: right;
    }
    .toast-text
    {
        margin: 0;
        padding: .5em 1em;
        word-break: break-word;
        padding: 0.8em;
        color: #ffff;
        font-size: 1.5em;
        text-align: center;
    }
    .toast-error
    {
        background-color: #f7471c;
        display: inline-flex;
        align-items: center;
        border-radius: .5em;
        min-width: 450px;
    }
    .toast-success
    {
        background-color: #51A351;
        display: inline-flex;
        align-items: center;
        border-radius: .5em;
        min-width: 450px;
    }
</style>
