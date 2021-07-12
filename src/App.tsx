import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import api from 'services/api';

import 'ui/style/App.css';
import Header from 'components/interface/header/header';
//import { string } from 'yargs';
interface ProjectPros {
  name: string;
  id: string;
  title: string;
}
function App() {
  const [project, setProject] = useState<ProjectPros[]>([]);

  useEffect(
    () => {
      api.get('/project').then((response) => {
        setProject(response.data);
        //console.log(response);
      });
    } /* função disparada */,
    [] /* Quando a função vai ser disparada */
  );

  const handleAddProject = () => {
    setProject([
      ...project,
      { name: 'sddsdf', title: 'kmklnkl', id: 'sdfsfdsfd' },
    ]);
    console.log(project);
  };
  return (
    <div>
      <Header title='Project React' />
      <ul>
        {project.map((project, index) => (
          <li key={index}>
            {project.title + '/ ' + project.name + '/ ' + project.id}
          </li>
        ))}
      </ul>
      <button type='button' onClick={handleAddProject}>
        Add Project
      </button>
    </div>
  );
}

export default App;
