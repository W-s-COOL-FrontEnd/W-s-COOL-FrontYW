import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>메인 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">쓰레기 게시판</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">좋은 말 게시판</Link>
        </li>
        <li>
          <Link to="/profiles/void">추가 페이지</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;