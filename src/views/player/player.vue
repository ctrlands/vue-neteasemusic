<template>
  <div>
    <el-button type="primary" @click="getArticle">调用后台接口</el-button>
    <el-input v-model="inpContent"></el-input>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  name: 'player',
  data () {
    return {
      inpContent: 'region data'
    }
  },
  methods: {
    getArticle () {
      this.$http.get('/api', {
        params: {
          params: 'KRVDJGIiWg9M2c2duRFihkt388xZP2MAlB71Y80Yb7vul0FiTGEm2t2rbsOG%2F84bD7fOhNZq3riWB9WTSLJ5L%2BG4FvMu57EDY1rFPD2j7h%2FexFCdxNl7t8nZYjAgIEPwXT8d2Jfq%2FhFSVvD7z7AGGJ8UCIkN6vvXzuJZJyHv2ZZT0o%2BGubeBXp0U8%2B4mpPHU',
          encSecKey: '9011c13d2976d952bdc66cced2a1033aedbca8602043dfaf70f24968ce38abbda6cca99bbb0538d4aa40edd610af1095ba0844dcd42580365a2533ea1d5dabf1fdd608d6808b3c6ae6026e815b51c1ba514a83b73eea5f9100938f5743f7a56cdea063b18e206849c4025c902a616309260643c89b63a3f302ceedc55b06f617'
        }
      })
        .then((res) => {
          console.log('res', res)
          this.inpContent = res.lrc.lyric
        })
    }
  }
}
</script>
