<template>
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    :border="true"
    style="width: 100%"
  >
    <el-table-column prop="id" width="50" label="ID" align="center">
    </el-table-column>
    <el-table-column
      property="author"
      label="Author"
      width="180"
      align="center"
    >
    </el-table-column>
    <el-table-column label="Importance" width="120">
      <template slot-scope="scope">
        <i
          v-for="i in scope.row.importance"
          :key="i"
          class="el-icon-star-on"
          style="font-size: 18px"
        ></i>
      </template>
    </el-table-column>
    <el-table-column width="120" label="Status" align="center">
      <template slot-scope="scope">
        <el-tag
          size="medium"
          :type="
            scope.row.status === 'published'
              ? 'success'
              : scope.row.status === 'deleted'
              ? 'danger'
              : 'info'
          "
          >{{ scope.row.status }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column label="Title">
      <template slot-scope="scope">
        <div v-if="scope.row.isEdit">
          <el-input
            v-model.lazy="scope.row.title"
            style="width: 260px; margin-right: 10px"
            size="small"
          ></el-input>
          <el-button
            size="small"
            icon="el-icon-refresh"
            type="warning"
            @click="cancel(scope.$index, scope.row)"
            >cancel</el-button
          >
        </div>
        <span v-else>{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Actions" width="130" align="center">
      <template slot-scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)"
          icon="el-icon-edit"
          type="primary"
          v-if="!scope.row.isEdit"
          >Edit
        </el-button>
        <el-button
          v-else
          type="success"
          size="small"
          @click="finishEdit(scope.$index, scope.row)"
          >Ok</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import axios from 'axios'
export default {
  name: 'EditTable',
  data() {
    return {
      tableData: [],
      // currentRow: null,
      // isEdit: false,
      currentTitle: ''
    }
  },
  created() {
    axios.get('http://localhost:3000/books').then((res) => {
      setTimeout(() => {
        this.tableData = res.data
      }, 1000)
    })
  },

  methods: {
    handleEdit(index, row) {
      row.isEdit = true
      this.currentTitle = row.title
      console.log(this.tableData)
      // this.input = row.title;
    },
    finishEdit(index, row) {
      row.isEdit = false
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
      console.log(row)
      axios.patch(`http://localhost:3000/books/${row.id}`, row).then(() => {})
    },
    cancel(index, row) {
      row.isEdit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
      row.title = this.currentTitle
    }
  }
}
</script>
<style>
.el-table {
  width: 80% !important;
  margin-top: 50px;
}
.el-table--border {
  border: 1px solid #dfe6ec !important;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #dfe6ec !important;
}
.el-table--border td,
.el-table--border th {
  border-right: 1px solid #dfe6ec !important;
}
</style>
