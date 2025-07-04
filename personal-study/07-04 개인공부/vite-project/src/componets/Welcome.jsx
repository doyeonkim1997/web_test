

const Welcome = ({ name, isMember}) => {

  return (
    <>
     {isMember ? 
     `${name}님, 다시 오셨군요!` : 
     `${name}님, 가입하시겠어요?`}
    </>
  );
};

export default Welcome;

// props로 name과 isMember을 받음
// 조건부 렌더링은 삼항 연산자를 사용
