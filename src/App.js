import logo from './logo.svg';
import './App.css';
import List from './List';
import React, { useState, useEffect } from 'react';
function App() {
const array = [
{id: 1, content: `firstElement`},
{id: 2, content: `secondElement`},
{id: 3, content: `thirdElement`},
{id: 4, content: `secElement`},
{id: 5, content: `firElement`},
{id: 6, content: `fElement`},
{id: 7, content: `fiElement`},
{id: 8, content: `thirdE`},
{id: 9, content: `seElement`},
];
const [count, setCount] = useState("useEffect hook example");
const [array2, setArray2] = useState(array);
var input;
useEffect(() => {
 // Обновляем заголовок документа с помощью API браузера
document.title = `${count}`;
});
function handleChange(event) {
        if(event.target.value!=""){
        const result=array.filter(content=>{return !content.content.toLowerCase().search(event.target.value.toLowerCase())});
        setArray2(result);
		setCount("Найдено элементов:"+result.length);
        }else{
            setCount("useEffect hook example");
            setArray2(array);
        }
}
return (<header className="App-header">
<List value={array2}>
</List> 
<input type="text" id="inp"  placeholder="Type here" onChange={handleChange}/>
</header>
);
}
export default App;