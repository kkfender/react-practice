import { useState } from "react"
import { ColoredMessage } from "./components/ColoredMessage"

export const App = () => {
    // stateの定義
    console.log("Appレンダリング")
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        alert();
        setNum(num + 1);
    };

    return(
    <>
        <h1>こんにちは！</h1>;
        <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
        <ColoredMessage color="pink">元気です</ColoredMessage>
        <button onClick={onClickButton}>ボタン</button>
        <p>{num}</p>
    </>
    )
}