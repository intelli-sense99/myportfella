import connectDB from "@/app/lib/dbconnect";
import Queries from "@/app/models/Queries";
import { sendTelegramNotification } from "@/app/lib/telegram";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Parse request body
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validate required fields
        if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const cleanData = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            message: message.trim()
        };

        // 1. Send Telegram notification
        let tgSuccess = false;
        try {
            tgSuccess = await sendTelegramNotification(cleanData);
        } catch (tgError) {
            console.error("Telegram notification error:", tgError);
        }

        // 2. Optionally save to MongoDB if MONGODB_URI is provided
        let dbQueryId = null;
        if (process.env.MONGODB_URI) {
            try {
                await connectDB();
                const newQuery = await Queries.create(cleanData);
                dbQueryId = newQuery._id;
                console.log('Query saved to MongoDB:', dbQueryId);
            } catch (dbError) {
                console.warn("MongoDB save skipped/failed:", dbError.message);
            }
        }

        // Return success if Telegram succeeded or data was received
        if (tgSuccess || dbQueryId || process.env.TELEGRAM_BOT_TOKEN) {
            return NextResponse.json(
                {
                    success: true,
                    message: "Message sent successfully! We'll get back to you soon.",
                    queryId: dbQueryId || "telegram-dispatched"
                },
                { status: 200 }
            );
        }

        return NextResponse.json(
            { error: "Failed to send message. Please check notification configuration." },
            { status: 500 }
        );

    } catch (error) {
        console.error("Error processing query:", error);

        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
