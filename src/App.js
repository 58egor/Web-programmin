import logo from './logo.svg';
import './App.css';
import List from './List';
function App() {

const array = [
{id: 1, content: `fistElement`},
{id: 2, content: `secondElement`},
{id: 3, content: `thirdElement`},
];
return (<header className="App-header">
<List value={array}>
</List> 
</header>
);
}
export default App;