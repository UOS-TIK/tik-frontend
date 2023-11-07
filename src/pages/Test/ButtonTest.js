import Button, { Color, Feature } from "../../components/Button/Button";

const ButtonTest = () => {
  return (
    <div
      style={{
        margin: "50px 80px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div>
        <Button feature={Feature.NONE} color={Color.BLUE}>
          이력서 작성하러 가기
        </Button>
      </div>
      <div>
        <Button feature={Feature.NONE} color={Color.GRAY}>
          수정하기
        </Button>
      </div>
      <div style={{ backgroundColor: "#3D4371" }}>
        <Button feature={Feature.LINE} color={Color.WHITE}>
          면접 중단하기
        </Button>
      </div>
      <div>
        <Button feature={Feature.LINE} color={Color.BLUE}>
          실제로 쓰이는 곳이 없네
        </Button>
      </div>
      <div>
        <Button feature={Feature.LINE} color={Color.GRAY}>
          삭제하기
        </Button>
      </div>
      <div>
        <Button feature={Feature.FLEXIBLE} color={Color.GRAY}>
          공고문 보기
        </Button>
      </div>
    </div>
  );
};

export default ButtonTest;
