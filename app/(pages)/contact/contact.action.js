"use server";

import { db } from "@/app/lib/db";

export const contactAction = async (previouseState, formData) => {
    const { fullName, email, message } = Object.fromEntries(formData.entries());

    if(!fullName || !email || !message) return {success: false, message: "All fields are required"};

    try {
        await db.execute(`insert into message (name, email, message) values(?, ? , ?)`, 
            [fullName, email, message]
        );
        return {success: true, message: "Message send successfully"}
    } catch (error) {
        console.log("Error in contact action : ", error);
        return {success: false, message: "Error message not send"}
    }
}