import React from "react";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";

function App() {
  return (
    <main>
     <ProjectsSidebar />
     <NoProjectSelected />
    </main>
  );
}

export default App;
