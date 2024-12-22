"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const toggleCompleted = async (id: number, completed: boolean) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
        completed: !completed,
      });
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !completed } : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id: number) => {
    if (confirm("Are you sure you want to delete this task?")) {
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`);
        setTasks(tasks.filter((task) => task.id !== id));
        router.push("/"); 
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Todo List</h1>
      <p className="text-lg text-gray-600 mb-6">
        Tasks: {tasks.length} | Completed:{" "}
        {tasks.filter((task) => task.completed).length} of {tasks.length}
      </p>
      <Link
        href="/create"
        className="bg-blue-500 text-white px-6 py-3 rounded-md mb-6 hover:bg-blue-600 transition-all duration-300"
      >
        Create Task
      </Link>
      <ul className="w-full max-w-3xl space-y-4">
        {tasks.map((task) => (
          <Link
            key={task.id}
            href={`/edit/${task.id}`}
            className={`flex items-center justify-between p-6 border rounded-md shadow-lg ${
              task.completed ? "bg-green-100" : "bg-white"
            } transition-all duration-300`}
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task.id, task.completed)}
                className="h-6 w-6 rounded-full bg-blue-500 checked:bg-blue-600"
              />
              <span
                className={`flex-1 text-xl font-medium ${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-gray-900"
                }`}
              >
                {task.title}
              </span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

Home;
