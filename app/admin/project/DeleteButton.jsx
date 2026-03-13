"use client";

import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

export default function DeleteButton({ id, action }) {

  const handleDelete = async () => {

    const result = await Swal.fire({
      title: "Delete Project?",
      text: "This project will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete"
    });

    if (result.isConfirmed) {
      await action(id);

      Swal.fire("Deleted!", "Project deleted successfully", "success");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 text-xl hover:text-red-800 cursor-pointer"
    >
      <MdDelete />
    </button>
  );
}