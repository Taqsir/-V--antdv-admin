<template>
  <div>
    <a-row type="flex" justify="center" align="top" class="exception-page">
<!--      <a-col flex="300px" style="outline:red solid thin">-->
      <a-col flex="300px">
        <div class="img">
          <img :src="config[type].img"/>
        </div>
      </a-col>
<!--      <a-col flex="auto" style="outline:blue solid thin">-->
      <a-col flex="auto">
        <div class="content">
          <h1>
            <a-button class="content-button" type="link" ghost icon="home" size="large" @click="backHome"/>
            {{ config[type].title }}
          </h1>
          <div class="desc">{{ config[type].desc }}</div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Config from './typeConfig'

export default {
  name: 'ExceptionPage',
  props: ['type', 'homeRoute'],
  data(){
    return {
      config: Config,
    }
  },
  methods: {
    backHome(){
      if(this.homeRoute){
        this.$router.push(this.homeRoute)
      }
      this.$emit('backHome', this.type)
    },
  },
}
</script>

<style lang="less" scoped>
@media screen and (min-width: 576px) {
  .img, .content{
    zoom:1.2;
  }
}
@media screen and (min-width: 768px) {
  .img, .content{
    zoom:1.5;
  }
}

.exception-page {
  display: flex;
  height: calc(100vh - 210px);
  justify-content: center;
  align-items: center;
  background-color: @base-bg-color;
  padding:10px 10px 10px 10px;
  .img{
    max-height:300px;
  }
  .content {
    height:290px;
    h1 {
      color: #434e59;
      font-size: 50px;
      font-weight: 600;
      line-height: 50px;
      margin: 10px 0 10px 10px;
      display:flex;
      align-items: center;
    }
    .content-button{
      zoom:1.5;
      color: @primary-color;
    }
    .desc {
      margin-left:10px;
      text-align:left;
      color: @text-color-second;
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 10px;
    }
  }
}

</style>
