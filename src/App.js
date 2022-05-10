import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import Login from './pages/LoginPage';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/RegisterPage';
import Post1 from './pages/TrashPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/trashPage" element={<Post1 />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/loginPage" element={<Login />} />
      <Route path="/registerPage" element={<Register />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;