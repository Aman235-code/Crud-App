"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [body, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("Required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to Create a Topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-slate-500 px-8 py-2"
          type="text"
          name=""
          id=""
          placeholder="Topic Title"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={body}
          className="border border-slate-500 px-8 py-2"
          type="text"
          name=""
          id=""
          placeholder="Topic Description"
        />
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6  w-fit"
        >
          Add Topic
        </button>
      </form>
    </div>
  );
}
