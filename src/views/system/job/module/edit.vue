<template>
  <div>
    <el-button size="mini" type="success" @click="to">编辑</el-button>
    <eForm ref="form" :sup_this="sup_this" :is-add="false" :dicts="dicts" />
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
    dicts: {
      type: Array,
      required: true
    }
  },
  methods: {
    to() {
      const _this = this.$refs.form
      _this.getDepts()
      _this.form = {
        uuid: this.data.uuid,
        name: this.data.name,
        sort: this.data.sort,
        enabled: this.data.enabled.toString(),
        createTime: this.data.createTime,
        dept: { uuid: this.data.dept.uuid }
      }
      _this.deptId = this.data.dept.uuid
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
