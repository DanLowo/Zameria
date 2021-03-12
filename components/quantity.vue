<template>
  <span class="quantity mx-1">
    <span>
      <v-icon @click="count('minus')" :class="{counterIsOne: counter===1, counterIsNotOne: counter !== 1}" style="border-radius: 12px">mdi-minus</v-icon>
    </span>
    <span class="font-weight-bold px-2">
      {{counter}}
    </span>
    <span>
      <v-icon @click="count('add')" :class="{counterIsMax: counter===maxCount, counterIsNotMax: counter !== maxCount}" style="border-radius: 12px">mdi-plus</v-icon>
    </span>
  </span>
</template>

<script>
export default {
  data(){
    return{
      counter: 1,
      maxCount: 5
    }
  },
  methods: {
    count(type){
      if(type === 'minus'){
        if(this.counter > 1){
          this.counter -= 1
        }
      } else {
        if(this.counter < this.maxCount){
          this.counter += 1
        }
      }
    }
  }
};
</script>

<style>
.counterIsOne{
  background-color: #E4E6E7;
}
.counterIsNotOne{
  background-color: #A8ACB1;
}
.counterIsMax{
  background-color: #E4E6E7;
}
.counterIsNotMax{
  background-color: #A8ACB1;
}
</style>
