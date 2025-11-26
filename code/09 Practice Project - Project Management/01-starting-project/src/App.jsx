import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    project: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevProject) => {
      return {
        ...prevProject,
        selectedProject: null,
      };
    });
  }

  let content;

  if (projectsState.selectedProject === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
