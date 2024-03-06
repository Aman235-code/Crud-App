import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to Fetch Topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error");
  }
};

export default async function TopicsList() {
  const topics = await getTopics();
  return (
    <>
      {topics.result.map((item, i) => (
        <div
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          id={i}
        >
          <div>
            <h2 className="font-bold text-2xl">{item.title}</h2>
            <div>{item.body}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={item._id} />
            <Link href={`/editTopic/${item._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
