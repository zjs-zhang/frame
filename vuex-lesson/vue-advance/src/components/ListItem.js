export default {
  render(h) {
    return (
      <li style="font-size:20px">
        {this.render ? this.render(h, this.item) : <span>{this.item}</span>}
      </li>
    )
  },
  props: {
    item: {
      type: String,
      //必填项
      required: true,
    },
    render: {
      type: Function,
    },
  },
}
