
import { useRef, useState } from 'react';
import './App.css';

function Hello({color, name}) {
  
  return(
    <div style={{color: color}}>
      저는 {name}입니다!
    </div>
  );
}

Hello.defaultProps = {
  name:"홍길동"
}

function Counter() {
  const [number, setNumber] = useState(0);
  //const [상태변수, 상태변수의 setter] = useState(상태변수의 초기값);

  const onPlus = ()=> {
    setNumber(number+1);
  }
  const onMinus = ()=> {
    setNumber(number-1);
  }
  return(
    <div>
      <h1>{number}</h1>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
}

function InputSample() {
  // const [text, setText] = useState(""); 한개일때
  const [inputs, setInputs] = useState({
    name:"홍길동", email:"hong@abc.com"
  });

  const nameInput = useRef();

  const {name, email } = inputs;  

  const onChangeInput = (inputT)=>{
    const {value, name} = inputT.target;
    setInputs({
      ...inputs, // spread문법, 기존의 inputs 의 내용 복사!!!!!!
      [name] : value
    });
  }

  const onReset = ()=> {
    setInputs({
      name : "",
      email : ""
    });
    nameInput.current.focus();
  }

  return(
    <div>
      이름:<input name="name" onChange={onChangeInput} value={name}></input><br></br>
      이메일:<input name="email" onChange={onChangeInput} value={email}></input>
      <button onClick={onReset}>초기화</button>
      <div>
        <h1>이름:{name}</h1>
        <h1>이메일:{email}</h1>
      </div>
    </div>
  );
}

function User({user}) {
  return(
    <div>
      <h1>이름 : {user.username}</h1>
      <h1>이메일 : {user.email}</h1>
    </div>
  );
}

function UserList() {

  const users =[
    {id:1, username:"홍길동", email:'hong@abc.com'},
    {id:2, username:"이순신", email:'lee@gubuk.com'}
  ];

  return (
    <div>
      {/* <User user={users[0]}></User>
      <User user={users[1]}></User> */}
      {users.map(user => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* <Hello name="리액트" color="red"></Hello>
      <Hello color="blue"></Hello> 
      <Counter></Counter> */}
      {/* <InputSample></InputSample> */}
      <UserList></UserList>
    </div>
  );
}

export default App;
