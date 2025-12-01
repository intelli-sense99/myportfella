import connectDB from "@/app/lib/dbconnect";
import Admin from "@/app/models/Admin";
import { NextResponse } from "next/server";
import { emitWarning } from "process";

export async function POST(request) {
    try {
        // Connect to database
        await connectDB();

        // Parse request body
        const body = await request.json();
        // console.log('Received query form data:', body);
        // return NextResponse.json(body)

         const { name, password } = body;

        // // Validate required fields
         if (!name || !password) {
             return NextResponse.json(
                 { error: "All fields are required" },
                 { status: 400 }
             );
         }

        // // Create new query entry in database
          const admin = await Admin.findOne({ email });
        return NextResponse.json(admin)
  

    

        // return NextResponse.json(
        //     {
        //         success: true,
        //         message: "Message sent successfully! We'll get back to you soon.",
        //         queryId: newQuery._id
        //     },
        //     { status: 200 }
        // );

    } catch (error) {
        console.error("Error saving query message:", error);

        // // Handle validation errors from Mongoose
        // if (error.name === 'ValidationError') {
        //     const errors = Object.values(error.errors).map(err => err.message);
        //     return NextResponse.json(
        //         { error: errors.join(', ') },
        //         { status: 400 }
        //     );
        // }

        // // Handle duplicate email error
        // if (error.code === 11000) {
        //     return NextResponse.json(
        //         { error: "This email has already submitted a query" },
        //         { status: 400 }
        //     );
        // }

        // return NextResponse.json(
        //     { error: "Failed to send message. Please try again later." },
        //     { status: 500 }
        // );
    }
}
