import { db } from "@/app/lib/db";
import AddProjectForm from "./AddProjectForm";
import DeleteButton from "./DeleteButton";
import { revalidatePath } from "next/cache";

const page = async () => {

    const [project] = await db.execute("SELECT * FROM project order by created_at desc");


    const deleteMessage = async (id) => {
        "use server";
        await db.execute("delete from project where id = ? ", [id]);

        revalidatePath("/admin/project");
    }



    return (
        <div className="min-h-screen bg-gray-100 md:p-5 text-black">
            {/* <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <h1 className="text-2xl font-bold mb-6 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 cursor-pointer" onClick={<AddProjectForm/>} >Add Project</h1>

      </div> */}

            <AddProjectForm />

            {project.map((p) => (
                <div key={p.id} className="border p-4 mb-4 rounded-lg">
                    <h2 className="text-xl font-bold">{p.title}</h2>
                    <p>{p.description}</p>
                    <p className="text-sm text-gray-500">{p.technology}</p>

                    <div className="flex gap-4 mt-2">
                        <a href={p.github_link} target="_blank" className="text-blue-500">GitHub</a>
                        <a href={p.live_link} target="_blank" className="text-green-500">Live</a>
                        <span>{<DeleteButton id={p.id} action={deleteMessage} />}</span>
                    </div>
                </div>



            ))}
        </div>
    );
};

export default page;