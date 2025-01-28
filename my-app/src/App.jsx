import { useState, memo, useCallback } from "react"
import { Child1 } from "./components/Child"
import { Child4 } from "./components/Child4"

export const App = memo(() => {
    // stateの定義
    console.log("Appレンダリング")
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        alert();
        setNum(num + 1);
    };

    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);
    return(
    <>
        <button onClick={onClickButton}>ボタン</button>
        <p>{num}</p>
        <Child1 onClickReset={onClickReset}></Child1>
        <Child4></Child4>
    </>
    )
});