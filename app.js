new Vue({
    el:'#vue-app',
    data:{
       name:'' ,
       age:''
    },
    methods:{
        logName:function(){
            console.log('entered name');
        },
        logAge:function(){
            console.log('entered age');
        }
    }
});