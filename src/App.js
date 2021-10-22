
import './App.css';
import {useForm} from "react-hook-form";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Step1 from "./ Step1";

const Step2 = () => <div>Step2</div>
const Step3 = () => <div>Step3</div>
const Result = () => <div>Result</div>


function App() {


  return (
      <div>
          <Header/>

          <Router>
              <Switch>
                  <Route exact path='/' component={Step1}/>
                  <Route exact path='/step2' component={Step2}/>
                  <Route exact path='/step3' component={Step3}/>
                  <Route exact path='/result' component={Result}/>
              </Switch>
          </Router>

      </div>
  );
}

export default App;
