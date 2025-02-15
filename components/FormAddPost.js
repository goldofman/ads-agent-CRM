"use client";

import { content } from "@/tailwind.config";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const FormAddPost = ({ boardId }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      await axios.post(`/api/post?boardId=${boardId}`, { title, description });

      setTitle("");
      setDescription("");

      toast.success("Post added!");

      router.refresh();
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8 w-full md:w-96 shrink-0 md:sticky md:top-4"
      onSubmit={handleSubmit}
    >
      <p className="font-bold text-lg">Suggest a feature</p>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Short, descriptive title</span>
        </div>
        <input
          required
          type="text"
          placeholder="Bigger buttons for better UX 🚀"
          className="input input-bordered w-full"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          maxLength={100}
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <textarea
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          maxLength={1000}
          className="textarea textarea-bordered h-24"
          placeholder="The buttons should be bigger to improve usability. For now they're too small and hard to click. 🙃"
        ></textarea>
      </label>
      <button className="btn btn-primary btn-block" type="submit">
        Add Post
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
      </button>
    </form>
  );
};

export default FormAddPost;
