import DeleteButton from "@/app/component/DeleteButton";
import { db } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import { MdDelete } from "react-icons/md";

const page = async () => {

    const [message] = await db.execute('select * from message order by created_at desc');
    console.log(message);


    const deleteMessage = async (id) => {
        "use server";
        await db.execute("delete from message where id = ? ", [id]);

        revalidatePath("/admin/message");
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-4 md:p-10">

                <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 underline">
                    Messages
                </h1>

                <div className="overflow-x-auto bg-white shadow-lg rounded-xl">

                    <table className="w-full text-left border-collapse">

                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="p-3">Name</th>
                                <th className="p-3">Gmail</th>
                                <th className="p-3">Message</th>
                                <th className="p-3">Time</th>
                                <th className="p-3">Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {message.map((m) => (
                                <tr key={m.id} className="border-b hover:bg-gray-100">
                                    <td className="p-3 text-black">{m.name}</td>
                                    <td className="p-3 text-blue-600">{m.email}</td>
                                    <td className="p-3 text-black">{m.message}</td>
                                    <td className="p-3 text-black">{new Date(m.created_at).toLocaleString()}</td>
                                    <td className="p-3 text-red-500 hover:text-red-600  text-xl">
                                        <DeleteButton
                                            id={m.id}
                                            action={deleteMessage}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>


                    </table>


                </div>
            </div>

        </>
    )
}

export default page;

