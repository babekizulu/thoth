//components
import Header from './components/Header';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import Tray from './components/Tray';
//pages
import Feed from './components/Feed/Feed';
import Policies from './components/Policies/Policies';
import Create from './components/Create/Create';
import Search from './components/Search/Search';
import Network from './components/Network/Network';


function App() {
    return (
        <div className='app'>
            <Header/>
            <Route path='/'>
                <Feed/>
            </Route>
            <Route path='/policies'>
                <Policies/>
            </Route>
            <Route path='/create'>
                <Create/>
            </Route>
            <Route path='/search'>
                <Search/>
            </Route>
            <Route path='/network'>
                <Network/>
            </Route>
            <Sidebar/>
            <Tray/>
        </div>
    );
}

export default App;