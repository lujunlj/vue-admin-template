import { initData } from '@/api/data'

export default {
  data() {
    return {
      loading: true,
      data: [],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      url: '',
      params: {},
      query: {},
      time: 170
    }
  },
  methods: {
    async init() {
      if (!(await this.beforeInit())) {
        return
      }
      return new Promise((resolve, reject) => {
        this.loading = true
        initData(this.url, this.params)
          .then(res => {
            this.total = res.totalElements
            this.data = res.content
            setTimeout(() => {
              this.loading = false
            }, this.time)
            resolve(res)
          })
          .catch(err => {
            this.loading = false
            reject(err)
          })
      })
    },
    beforeInit() {
      return true
    },
    pageChange(e) {
      this.pageNum = e
      this.init()
    },
    sizeChange(e) {
      // 分页控件切换每页页数 不初始化页数 所以注释掉
      // this.pageNum = 1
      this.pageSize = e
      this.init()
    }
  }
}
