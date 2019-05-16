<template>
  <div>
    <el-button size="mini"
               type="success"
               @click="to">编辑</el-button>
    <eForm ref="form"
           :sup_this="sup_this"
           :is-add="false"
           :dicts="dicts" />
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
    // index.vue 的this 可用于刷新数据
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
      _this.getRoles()
      _this.getDepts()
      _this.roleIds = []
      _this.form = { uuid: this.data.uuid, name: this.data.name, username: this.data.username, phone: this.data.phone, email: this.data.email, enabled: this.data.enabled.toString(), roles: [], dept: { id: this.data.dept.uuid }, job: { id: this.data.job.uuid }}
      this.data.roles.forEach(function(data, index) {
        _this.roleIds.push(data.uuid)
      })
      _this.deptId = this.data.dept.uuid
      _this.jobId = this.data.job.uuid
      _this.getJobs(_this.deptId)
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
