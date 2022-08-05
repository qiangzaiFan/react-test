import TinyReact from "./TinyReact";

const virtualDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
);

const modifyDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test124">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段被修改过的内容</span>
    <button onClick={() => alert("你好!!!!!")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
);

const container = document.getElementById("root");

TinyReact.render(virtualDOM, container);
setTimeout(() => {
  TinyReact.render(modifyDOM, container);
}, 2000);

function Demo() {
  return <div>Hello</div>;
}

function Heart(props) {
  return (
    <div>
      {props.title}
      hearts <Demo />
    </div>
  );
  // return <Demo />;
}

// TinyReact.render(<Heart title="Hello React " />, container);

// TinyReact.render(virtualDOM, container);

// class Alert extends TinyReact.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         {this.props.name}
//         {this.props.age}
//         Hello React
//       </div>
//     );
//   }
// }

// TinyReact.render(<Alert name="张三" age="21" />, container);
