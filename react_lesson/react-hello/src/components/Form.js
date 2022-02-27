import { Component } from 'react';
class Form extends Component {
  state = {}
  render() {
    return <div>
      <h4>喜欢的水果</h4>
      苹果<input type="checkbox" />
      香蕉<input type="checkbox" />
      鸭梨<input type="checkbox" />
      草莓<input type="checkbox" />
    </div>
  }
}

export default Form