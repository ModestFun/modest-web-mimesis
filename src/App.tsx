import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './sass/index.scss'
import Header from './component/Header';

function App() {
  return (
    <Router>
      <div className="background-cover">
        <Header></Header>
        <div className="content">
          <Switch>
            {/* <Redirect exact path="/" to="/projectList" /> */}
            {/* <Route exact path="/projectList" render={() => <ProjectList />} />
          <Route exact path="/createProject" render={() => <CreateProject />} />
          <Route exact path="/projectItem/:id" render={() => <ProjectItem />} />
          <Route exact path="/editProject/:id" render={() => <EditProject />} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
