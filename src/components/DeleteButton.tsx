"use client";

import CustomButton from "./CustomButton";

const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <CustomButton type="button" className="text-red-500" onClick={onClick}>
      삭제
    </CustomButton>
  );
};

export default DeleteButton;
