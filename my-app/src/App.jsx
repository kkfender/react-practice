import { ColoredMessage } from "./components/ColoredMessage"
export const App = () => {
    return(
    <>
        <h1>こんにちは！</h1>;
        <ColoredMessage color="blue" message="お元気ですか？" />
        <ColoredMessage color="pink" message="元気です" />
    </>
    )
}