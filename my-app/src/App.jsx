import { useState, memo } from "react"
import { Card } from "./components/Card";

export const App = memo(() => {
    // 管理者フラグ
    const [isAdmin, setIsAdmin] = useState(false);

    //  切り替え押下時
    const onClickSwitch = () => setIsAdmin(!isAdmin);
    return(
        <div>
            {/* 管理者がフラグTRUEの時とそれ以外で文字だしわけ */}
            { isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
            <button onClick={onClickSwitch}>切り替え</button>
            <Card isAdmin={isAdmin} />
        </div>
    )
});