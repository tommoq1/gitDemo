<template>
    <div class="flex">
        
       <!-- <h2>{{$store.state.sum1}}</h2> -->
       <!-- <h2>{{$store.state.name}}</h2> -->
       <!-- <h2>{{$store.state.title}}</h2> -->
       <!-- <h1>{{$store.getters.bigSum}}</h1> -->
       <h2>{{name1}}</h2>
       <h2>{{name1}}</h2>
       <h2>{{title}}</h2>
       <h1>{{bigSum}}</h1>
       <h1>'ceshi'</h1>
       <h1>'ceshi2'</h1>
       <h1>'FZ01'</h1>
       <h1>'FZ01'</h1>
       <h1>'小a最帅'</h1>
       


       <button @click="add1">+</button>
    </div>
</template>
<script>    
    import { mapState,mapGetters } from 'vuex'
    export default {
        data() {
            return {
                num1: 1,
                sum1: null,
            }
        },
        computed: {
            // sum1() {
            //     return this.$store.state.sum1 
            // },
            // name(){
            //     return this.$store.state.name
            // },
            // title(){
            //     return this.$store.state.title
            // },
            // bigSum(){
            //     return this.$store.getters.bigSum
            // }

            // mapState 辅助函数仅仅是将 store 中的 state 映射到局部计算属性
            // ...mapState({sum1:'sum1',name1:'name1',title:'title'}),            
            ...mapState([
                'sum1',
                'name1',
                'title'
            ]),            
            // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
            // ...mapGetters(['bigSum']),
            ...mapGetters({bigSum:'bigSum'}),
        },
        methods: {
            add1() {
                console.log('11')
                console.log('22')
                console.log('33')
                console.log('44')
                console.log('55')
                console.log('112')
                console.log('113')
                console.log('11')
                console.log('FZ02')
                this.$store.dispatch('step1',this.num1)
            },
            gitAdd(){
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('11')
                console.log('xb1第一天上班提交了代码')
            }
        },
    }
</script>

<style scoped>
.flex{
    display:flex;
    align-items: center;
    justify-content: space-around;
    width:40%
}
</style>