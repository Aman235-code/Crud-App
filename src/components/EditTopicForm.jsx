"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditTopicForm({ id, Ttitle, Bbody }) {
  const [title, setNewTitle] = useState(Ttitle);
  const [body, setNewBody] = useState(Bbody);
  const router = useRouter();

  const handleSUbmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
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
      {" "}
      <form action="" className="flex flex-col gap-3" onSubmit={handleSUbmit}>
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={title}
          className="border border-slate-500 px-8 py-2"
          type="text"
          name=""
          id=""
          placeholder="Topic Title"
        />
        <input
          onChange={(e) => setNewBody(e.target.value)}
          value={body}
          className="border border-slate-500 px-8 py-2"
          type="text"
          name=""
          id=""
          placeholder="Topic Description"
        />
        <button className="bg-green-600 font-bold text-white py-3 px-6  w-fit">
          Update Topic
        </button>
      </form>
    </div>
  );
}
