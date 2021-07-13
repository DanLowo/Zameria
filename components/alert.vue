<template>
  <div class="alerts mt-2">
    <v-alert :type="type" dense class="py-3">
        <p class="my-0" style="font-size: 16px">{{message}}</p>
    </v-alert>
  </div>
</template>

<script>
export default {
    props: ['type', 'message'],
    name: "Alert"
};
</script>

<style>
</style>