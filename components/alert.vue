<template>
  <div class="alerts mx-4 mt-2">
    <v-alert :type="type" dense>
        <p class="my-0" style="font-size: 14px">{{message}}</p>
    </v-alert>
  </div>
</template>

<script>
export default {
    props: ['type', 'message']
};
</script>

<style>
</style>