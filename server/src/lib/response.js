export function sendResponse(res, statusCode, message) {

    return res.status(statusCode).json(message);
}