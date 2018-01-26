<template>
    <page>
        <action-bar :title="$route.path">
            <navigation-button text="Back!" android.system-icon="ic_menu_back" @tap="$router.back()"></navigation-button>
        </action-bar>
        <stack-layout>
            <label style="text-align: center; color: #41b883; font-size: 30">New Page</label>
        </stack-layout>
    </page>
</template>

<script>
export default {
  data: () => {
    return {
      val: 'Vue.js',
    };
  },
};
</script>

<style>

</style>