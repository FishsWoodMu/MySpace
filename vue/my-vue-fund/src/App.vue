<template>
  <div>
   <FundList></FundList>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FundList from "./components/FundList.vue";

const showAddFund = ref(false);
</script>
