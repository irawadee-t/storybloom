import React from "react";
// import HomePage from "./pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router";

const App: React.FC = () => {
  return (
    // <div>
    //   <HomePage />
    // </div>
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;

// import Button from "./components/Button";

// function App() {
//   return (
//     <div>
//       {/* <Button color="success" onClick={() => console.log("Clicked")}>
//         My Button
//       </Button> */}
//     </div>
//   );
// }

// export default App;
