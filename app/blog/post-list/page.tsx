import Link from "next/link";

interface Post {
  id: number;
  title: string;
}

async function PostList() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 5 },
  });
  let data: Post[] = await response.json();
  data = data.splice(0, 10);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <ul className="p-5">
        <li>
          <Link
            target={"_blank"}
            className="bg-purple-800 text-slate-200 px-4 py-2 rounded-md transition-all duration-100 hover:bg-purple-400"
            href={"/shop"}
          >
      Go to Shop
          </Link>
        </li>
      </ul>

      <ul className="p-5">
        <li>
          <Link
            target={"_blank"}
            className="bg-purple-300 text-slate-200 px-4 py-2 rounded-md transition-all duration-100 hover:bg-purple-400"
            href={"https://www.apple.com/"}
          >
      Go to Apple
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PostList;
