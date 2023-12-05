import { useEffect, useState } from "react";
import api from "../../api/api";
import { ModalText, StackBox } from "./style";
import Input, { InputColor } from "../../components/Input/Input";
import Button, { ButtonFeature } from "../../components/Button/Button";
import StackChip from "../../components/StackChip/StackChip";

const SearchStack = ({ setModalOn, techStack, setTechStack }) => {
  const [string, setString] = useState("");
  const [allstackList, setAllStackList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    getStackList();
  }, []);

  useEffect(() => {
    setSearchList(allstackList);
  }, [allstackList]);

  function onClickStack(stack) {
    if (!techStack.some((item) => item.id === stack.id)) {
      setTechStack([...techStack, stack]);
    }

    setModalOn(false);
  }

  const getStackList = async () => {
    try {
      const res = await api.get("/techStack/all");
      if (res.status === 200) {
        setAllStackList(res.data.data);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) console.log("getStackList", e.response.data.data);
    }
  };

  const search = async (string) => {
    if (string === "") {
      setSearchList(allstackList);
      return;
    }
    try {
      const res = await api.get(`/techStack?text=${string}`);
      if (res.status === 200) {
        setSearchList(res.data.data);
      }
    } catch (e) {
      if (e.response && e.response.data && e.response.data.data) {
        console.log("search", e.response.data.data);
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
      <StackBox>
        {searchList.map((stack, index) => (
          <StackChip
            key={index}
            id={stack.id}
            handler={() => onClickStack(stack)}
          >
            {stack.name}
          </StackChip>
        ))}
      </StackBox>
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
