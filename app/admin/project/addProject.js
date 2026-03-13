"use server";

import { db } from "@/app/lib/db";
import { revalidatePath } from "next/cache";


export const addProject = async (formData) => {
    const title = formData.get("title");
    const image = formData.get("image");
    const description = formData.get("description");
    const technology = formData.get("technology");
    const github_link = formData.get("github_link");
    const live_link = formData.get("live_link");

    if(!title || !description) {
        return {
            success: false, message: "Title and description required"
        };
    }
    
    await db.execute(
        "insert into project (title, image, description, technology, github_link, live_link) values(?, ?, ?, ?, ?, ?)", [title, image, description, technology, github_link, live_link]
    );

    revalidatePath("/admin/project")

    return {success: true, message: "Project added successfully"};
}