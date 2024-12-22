"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

interface CreateTaskProps {
  task?: Task;
}

const CreateTask: React.FC<CreateTaskProps> = ({ task }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [color, setColor] = useState(task?.color || "red");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (task) {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${task.id}`, {
          title,
          color,
        });
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
          title,
          color,
        });
      }
      router.push("/");
    } catch (error) {
      console.error("Error creating or updating task:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        {task ? "Edit Task" : "Create Task"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6 bg-white p-8 rounded-md shadow-lg"
      >
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-semibold text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="color"
            className="block text-lg font-semibold text-gray-700"
          >
            Color
          </label>
          <select
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-md w-full hover:bg-blue-600 transition-all duration-300"
        >
          {task ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
