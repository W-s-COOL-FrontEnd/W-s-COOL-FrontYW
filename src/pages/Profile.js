import { useParams } from 'react-router-dom';

const data = {
  velopert: {
    name: '쓰레기 게시판',
    description: '조언을 묻는다. ',
  },
  gildong: {
    name: '좋은말 게시판',
    description: '좋은 말들을 나눈다.',
  },
};
const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>게시판</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>또 무슨 페이지 만들기로 했지...</p>
      )}
    </div>
  );
};

export default Profile;