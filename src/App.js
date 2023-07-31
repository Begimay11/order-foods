import { Header } from './components/meals/Header';
import { MealItem } from './components/meals/MealItem';
import { MealsSummary } from './components/meals/MealsSummary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <MealsSummary/>
      <MealItem/>
    </div>
  );
}

export default App;

