import { EditButton } from "./EditButton";

const style = {
    width: "300px",
    height: "200px",
    margin: "8px",
    borderRedius: "8px",
    backgroundColor: "e9bdb0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};

export const Card = () => {
    return (
        <div style={style}>
            <p>山田太郎</p>
            <EditButton />
        </div>
    );
};