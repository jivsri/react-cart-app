
import Item from "./Item";
export default function Home(props) {
  return (
    <>
      <Item count={props.cnt}
        setCount={props.setCnt}
        setItemList={props.setItemList}
        itemList={props.itemList}
      />
    </>
  );
}
