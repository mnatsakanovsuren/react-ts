import React, { useState } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    };

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" ) {
            if (title !== '') {
                props.onAdd(title);
                setTitle('');
            } else {
                alert('empty value'.toUpperCase());
            }
        }
    };

    return (
      <div className="input-field mt2">
          <input
              onChange={changeHandler}
              onKeyPress={keyPressHandler}
              value={title}
              type="text"
              id="title" />
          <label htmlFor="title" className="active">Your task title</label>
      </div>
    );
}