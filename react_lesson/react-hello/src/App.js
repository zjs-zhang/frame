// import logo from './logo.svg';
import './App.css';
import Box from './components/Box'
import Form from './components/Form'
//函数组件
//一个函数返回一个HTML结构，只能返回一个节点
function App() {
  return (
    <div className="App">
      <h2>react-hello</h2>
      <Box />
      <Form />
    </div>
  );
}

export default App;
