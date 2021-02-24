<template>
  <div>
    <div>
      <b-jumbotron>
        <template #lead>
          {{ currentQuestion.question}}
        </template>

        <hr class="my-4" />
  <b-list-group>
    <b-list-group-item 
    v-for="answer in answers" 
    :key="answer"
    >
       {{ answer }}
      </b-list-group-item>
</b-list-group>
        <p >
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
        },
        computed:{
          answers(){
            let answers = [...this.currentQuestion.incorrect_answers]
              answers.push(this.currentQuestion.correct_answer);
            return answers
          }
        }
}
</script>