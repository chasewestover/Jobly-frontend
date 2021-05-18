import JoblyApp from './JoblyApp';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename='/Jobly-frontend'>
      <JoblyApp/>
    </BrowserRouter>
  )
}

export default App;
