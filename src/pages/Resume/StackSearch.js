import { useEffect, useState } from "react";
import api from "../../api/api";
import { ModalText, StackBox } from "./style";
import Input, { InputColor } from "../../components/Input/Input";
import Button, { ButtonFeature } from "../../components/Button/Button";

const SearchStack = (props) => {
  const { setModalOn } = props;

  const [string, setString] = useState("");
  const [searchList, setSearchList] = useState([]);

  const search = async (event) => {
    try {
      const res = await api.get(`/techStack?text=${event.target.value}`);
      if (res.status === 200) {
        setSearchList(res.data.data);
        console.log("검색 결과", res.data.data);
      }
    } catch (e) {
      if (e.response && e.response.data && e.response.data.data) {
        // 오류 처리 로직
        alert(e.response.data.data);
      }
    }
  };

  return (
    <>
      <Input
        label="선택할 스택을 검색해주세요"
        color={InputColor.WHITE}
        value={string}
        onChange={search}
      />
      <ModalText>검색 결과</ModalText>
      <StackBox></StackBox>
      <div
        style={{
          display: "flex",
          width: "100%",
          paddingTop: "8px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          alignSelf: "stretch",
        }}
      >
        <Button
          feature={ButtonFeature.FLEXIBLE}
          handler={() => setModalOn(false)}
        >
          닫기
        </Button>
      </div>
    </>
  );
};

export default SearchStack;
