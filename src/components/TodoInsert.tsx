import { ChangeEvent, FormEvent, useState } from 'react';

type TodoInsertProps = {
	onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
	const [value, setValue] = useState('');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (value === '') {
			alert('투두를 입력해주세요');
			return;
		}
		onInsert(value);
		setValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input placeholder='투두 입력바람' value={value} onChange={onChange} />
			<button type='submit'>등록</button>
		</form>
	);
}

export default TodoInsert;
