<template>
  <!-- You may modify any code above this line -->
  <div class="exercise">
    <!-- Please do not modify the code between these comments! -->
    <div class="exercise__instructions">
      <h2>
        Exercise
      </h2>
      <p>
        For this exercise, you'll create a visualization that takes data from a REST API call and renders it in a way that is meaningful and useful.
      </p>
      <p>
        The <code>SOExample</code> component below has been provided as a starting point to give you access to basic data.  You can use this data to build your visualization or remove that component and add your own API call.
      </p>

      <strong>To complete this exercise, ensure that you have rendered the data in a way that is ...</strong>
      <ul class="instruction-list">
        <li>easy to understand at a glance</li>
        <li>easy to navigate and drill down into</li>
        <li>performant and loads quickly</li>
      </ul>

      <InfoBox>
        <em>Note:</em> This exercise is open-ended and is intended as an opportunity to show off your design chops and data visualization skills!
      </InfoBox>

      <p>
        Modify the following component as you see fit to accomplish the above stories.
      </p>
    </div>
    <!-- Please do not modify the code between these comments! -->

    <!-- You may modify any code beneath this line -->
    <div class="exercise__results">
      <SOExample />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import SOExample from '@/components/Exercise/SOExample.vue'
  import InfoBox from '@/components/InfoBox.vue'
</script>

<style lang="scss">
.exercise__results {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12) !important;
}
</style>
