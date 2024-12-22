import CreateTask from "../../create/page";

export default async function EditTaskPage({
  params,
}: {
  params: { id: string };
}) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/tasks/${params.id}`;

  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Error fetching task:", errorText);
    throw new Error("Failed to fetch task data");
  }

  const task = await res.json();
  return <CreateTask task={task} />;
}
