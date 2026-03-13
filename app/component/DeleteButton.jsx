"use client";

import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

export default function DeleteButton({ id, action }) {

  const handleDelete = async () => {

    const result = await Swal.fire({
      title: "Delete Message?",
      text: "This message will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it"
    });

    if (result.isConfirmed) {
      await action(id);

      Swal.fire(
        "Deleted!",
        "Message deleted successfully.",
        "success"
      );
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 text-xl hover:text-red-800 hover:cursor-pointer"
    >
      <MdDelete />
    </button>
  );
}