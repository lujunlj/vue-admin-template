<template>
  <div>
    <el-button size="mini" type="success" @click="to">编辑</el-button>
    <eForm ref="form" :sup_this="sup_this" :is-add="false" :dict-id="dictId" />
  </div>
</template>
<script>
import eForm from './form'
export default {
  components: { eForm },
  props: {
    data: {
      type: Object,
      required: true
    },
    /* eslint-disable vue/prop-name-casing */
    sup_this: {
      type: Object,
      required: true
    },
    dictId: {
      type: String,
      required: true
    }
  },
  methods: {
    to() {
      const _this = this.$refs.form
      _this.form = {
        uuid: this.data.uuid,
        label: this.data.label,
        value: this.data.value,
        sort: this.data.sort
      }
      _this.dialog = true
    }
  }
}
</script>

<style scoped>
div {
  display: inline-block;
  margin-right: 3px;
}
</style>
