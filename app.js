new Vue({
    el:'#vue-app',
    data:{
        name:'Ismoil',
        job:'Programmer'
    },
    methods:{
        greet:function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
});