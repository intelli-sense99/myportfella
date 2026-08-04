import { formatTelegramMessage } from "@/Component/Telegram/QueryTemplate";

/**
 * Sends a beautifully formatted HTML notification to a Telegram Chat/Channel.
 * 
 * @param {Object} query - The contact query details
 * @param {string} query.name - Name of the sender
 * @param {string} query.email - Email of the sender
 * @param {string} query.message - The message content
 * @returns {Promise<boolean>} Resolves to true if successful, false otherwise
 */
export async function sendTelegramNotification({ name, email, message }) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        console.warn("Telegram notification skipped: Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in environment variables.");
        return false;
    }

    // Generate the HTML message using our modular template
    const htmlMessage = formatTelegramMessage({ name, email, message });

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: htmlMessage,
                parse_mode: 'HTML',
            }),
        });

        const data = await response.json();
        if (!response.ok || !data.ok) {
            throw new Error(data.description || `HTTP error! status: ${response.status}`);
        }

        console.log("Telegram notification sent successfully.");
        return true;
    } catch (error) {
        console.error("Failed to send Telegram notification:", error);
        return false;
    }
}
