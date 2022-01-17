new Vue({
    el:'#vue-app',
    data:{
        name:'Ismoil',
        job:'Programmer',
        website:'https://www.thenetninja.co.uk',
        websiteTag:'<a href="https://www.thenetninja.co.uk">The Net Ninja Website</a>'
    },
    methods:{
        greet:function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
});