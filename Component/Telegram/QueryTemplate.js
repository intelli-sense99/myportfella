/**
 * Helper to escape HTML characters to prevent Telegram API parse errors.
 * This is crucial as raw '<', '>', and '&' will cause Telegram to reject the message.
 */
function escapeHtml(text) {
    if (!text) return "";
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

/**
 * Formats contact query details into a beautiful HTML string for Telegram.
 * 
 * @param {Object} query - The contact query details
 * @param {string} query.name - Name of the sender
 * @param {string} query.email - Email of the sender
 * @param {string} query.message - The message content
 * @returns {string} The formatted HTML message
 */
export function formatTelegramMessage({ name, email, phone, message }) {
    return `<b>🔔 New Contact Query Received</b>

--------------------------------------------

<b>👤 Name:</b> ${escapeHtml(name)}
<b>📧 Email:</b> ${escapeHtml(email)}
<b>📞 Phone:</b> ${escapeHtml(phone)}
<b>💬 Message:</b>
<i>${escapeHtml(message)}</i>

--------------------------------------------

📅 <i>Sent on: ${new Date().toLocaleString('en-US', { timeZoneName: 'short' })}</i>`;
}
