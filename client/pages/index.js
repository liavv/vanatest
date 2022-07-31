import styled from 'styled-components';
import SortableList from "./components/SortableList";
const Index = (props)=>{
  const {data} = props;
  console.log('data',data);
  const list = data.data.data;
  const formType='dfdfdf';
  // const list = [{ id: "1", text: "Item 1" },
  //   { id: "2", text: `סוג טופס ${formType}: ` },
  //   { id: "3", text: "Item 3" },
  //   { id: "4", text: "Item 4" }];
  return (
  <Wrapper>
    <SortableList list={list} />
  </Wrapper>);
};

Index.getInitialProps = async (ctx) => {
  return {data: ctx.res.data}
}
const Wrapper = styled.div``;

export default Index;