import styled from 'styled-components';
import SortableList from "./components/SortableList";
const Index = ()=>{
  const list = [{ id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
    { id: "4", text: "Item 4" }];
  return (
  <Wrapper>
    <SortableList list={list} />
  </Wrapper>);
};

const Wrapper = styled.div``;

export default Index;