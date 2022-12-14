class Dep{
    constructor(){
        this.subscribers = new Set()
    }

    addEffect(effect){
        this.subscribers.add(effect)
    }
    depend(){
        if(activeEffect){
            this.addEffect(activeEffect)
        }
    }
    notify(){
        this.subscribers.forEach(effect=>{
            effect()
        })
    }
}

let activeEffect = null
function watchEffect(effect) {
    activeEffect = effect
    dep.depend()
    effect()
    activeEffect = null
}
const info = {counter:200}
const dep = new Dep()

watchEffect(function(){
    console.log(info.counter*2)
})
watchEffect(function(){
    console.log(info.counter*info.counter )

})

info.counter++
dep.notify()
