import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Recipe from "./components/SavedRecipe";
import MealPlanner from "./components/MealPlanner";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="my-recipe" element={<Recipe />} />
            <Route path="meal-planner" element={<MealPlanner />} />
          </Routes>
        </Layout>
      </>
    </Router>
  );
}

export default App;
