import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const { children } = props;

    // 管理フラグ
    const [isAdmin, setIsAdmin] = useState(false)

    // ContextオブジェクトとしてisAdminとsetIsAdinを設定（オブジェクトの省略記法）
    return (
        <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin}}>
            {children}
        </AdminFlagContext.Provider>
    );
};