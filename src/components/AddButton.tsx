"use client";

import CustomButton from "./CustomButton";

const AddButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <CustomButton
      type="button"
      className="rounded-md bg-blue-500 px-4 py-2 text-white"
      onClick={onClick}
    >
      추가
    </CustomButton>
  );
};

export default AddButton;
