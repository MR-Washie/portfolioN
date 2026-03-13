"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { addProject } from "./addProject";

export default function AddProjectForm() {

  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const result = await addProject(formData);

    if (result.success) {
      Swal.fire("Success", "Project added successfully", "success");
      e.target.reset();
      setOpen(false);
    } else {
      Swal.fire("Error", result.message, "error");
    }
  };

  return (
    <div className="p-5">

      {/* Header */}
      <div className="flex justify-between items-center mb-3">

        <h1 className="text-3xl font-bold">Projects</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
        >
          Add Project
        </button>

      </div>

      {/* Form Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">

          <div className="bg-white text-black p-8 rounded-xl w-full max-w-md shadow-xl">

            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Add New Project</h2>

              <button
                onClick={() => setOpen(false)}
                className="text-red-500 text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="title"
                placeholder="Project Title"
                className="border p-2 w-full rounded"
              />

              <input
                name="image"
                placeholder="Image URL"
                className="border p-2 w-full rounded"
              />

              

              <textarea
                name="description"
                placeholder="Description"
                className="border p-2 w-full rounded"
              />

              <input
                name="technology"
                placeholder="Technology"
                className="border p-2 w-full rounded"
              />

              <input
                name="github_link"
                placeholder="GitHub Link"
                className="border p-2 w-full rounded"
              />

              <input
                name="live_link"
                placeholder="Live Link"
                className="border p-2 w-full rounded"
              />

              <button className="bg-green-600 text-white px-4 py-2 rounded w-full cursor-pointer">
                Add Project
              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}