
import {react} from 
import { ChangeEvent, useState, FC } from "react"
import styled from "styled-components";

export const App: FC = () => {
	const [text, setText] = useState<string>("")
	const [memos, setMemos] = useState<string[]>([])
	const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
		setText(e.target.value)
	const onClickAdd = () => {
		const newMemos = [...memos];
		newMemos.push(text);
		setMemos(nreMemos);
		setText("")
	};

	const onClickDelete = (index: number) =>{
		const newMemos = [...memos];
		newMwmos.splice(index, 1);
		setMemos(newMemos);
	};

	return (
		<div>
			<h1>kantanmemoapuri</h1>
			<input type="text" value={text} onChange={onChangeText} />
			<SButton onClick={onClickAdd}>tuika</SButton>
			<ul>
				{memos.map((memo, index) => (
					<li key={memo}>
						<SMemoWrapper>
							<p>{memo}</p>
							<SButton onClick={() => onClickDelete(index)}>sakujyo</SButton>
						</SMemoWrapper>
					</li>
				))}
			</ul>
		</div>
	)
}