import { ColoredMessage } from "./components/ColoredMessage"
export const App = () => {
    return(
    <>
        <h1>こんにちは！</h1>;
        <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
        <ColoredMessage color="pink">元気です</ColoredMessage>
    </>
    )
}