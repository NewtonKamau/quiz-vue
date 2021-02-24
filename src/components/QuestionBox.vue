<template>
  <div>
    <div>
      <b-jumbotron>
        <template #lead>
          {{ currentQuestion.question}}
        </template>

        <hr class="my-4" />

        <p>
      List of answers
        </p>

        <b-button variant="primary" href="#">Submit</b-button>
        <b-button @click="next" variant="success" href="#">Next Question</b-button>
      </b-jumbotron>
    </div>
  </div>
</template>
<script>
export default {
    props: {
          currentQuestion:Object,
          next:Function
        }
}
</script>