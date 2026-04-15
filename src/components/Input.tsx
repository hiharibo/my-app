"use client";

type InputProps = {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  return (
    <input
      type="text"
      value={props.title}
      onChange={props.onChange}
      placeholder="할 일을 입력하세요"
      className="flex-1 rounded-md border border-gray-300 p-2"
    />
  );
}
