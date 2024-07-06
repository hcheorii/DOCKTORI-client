import styled from 'styled-components';
import { useState } from 'react';

interface Props {
  placeholder: string;
  onSubmit: (content: string) => void;
  value?: string;
}

export default function BookDetailForm({
  placeholder,
  onSubmit,
  value,
}: Props) {
  const [content, setContent] = useState(value || '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content || !content.trim()) {
      setContent('');
      return;
    }

    onSubmit(content);

    setContent('');
  };
  return (
    <ReviewFormStyle onSubmit={handleSubmit}>
      <textarea
        placeholder={placeholder}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button>등록</button>
    </ReviewFormStyle>
  );
}

const ReviewFormStyle = styled.form`
  width: 60%;
  display: flex;
  justify-content: center;
  gap: 2px;

  textarea {
    resize: none;
    flex: 1;
    padding: 25px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.second};
    border-radius: ${({ theme }) => theme.borderRadius.default};

    &:focus {
      border-color: ${({ theme }) => theme.color.third};
      outline: 1px solid ${({ theme }) => theme.color.third};
    }
  }
  button {
    width: 50px;
    border: none;
    background: none;
    outline: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.first};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.color.second};
    }
  }
`;
