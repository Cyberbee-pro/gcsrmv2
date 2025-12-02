/**
 * API Configuration for GitHub Community SRM
 * 
 * Base URL: https://octacore.githubsrmist.in
 * Documentation: https://octacore.githubsrmist.in/api-docs/
 */

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://octacore.githubsrmist.in";

export const API_ENDPOINTS = {
    CONTACT: {
        SEND_MESSAGE: `${API_BASE_URL}/api/contact`, // POST - Send a contact message
    },
    EVENTS: {
        GET_ALL: `${API_BASE_URL}/api/events`, // GET - Retrieve all events
        GET_BY_ID: (id) => `${API_BASE_URL}/api/events/${id}`, // GET - Retrieve a single event by ID
        GET_BY_SLUG: (slug) => `${API_BASE_URL}/api/events/slug/${slug}`, // GET - Retrieve a single event by slug
        REGISTER: `${API_BASE_URL}/api/events/register`, // POST - Register for an event
    },
    SPONSORS: {
        GET_ALL: `${API_BASE_URL}/api/sponsors`, // GET - Retrieve all sponsors
    },
    TEAM: {
        GET_ALL: `${API_BASE_URL}/api/team`, // GET - Retrieve all team members
    },
    CERTIFICATES: {
        GENERATE: `${API_BASE_URL}/api/certificate/generate`, // POST - Generate a certificate for an event participant
        DOWNLOAD: (certificateId) => `${API_BASE_URL}/api/certificate/download/${certificateId}?format=pdf`, // GET - Download a verified certificate (External)
    },
};
export const API_CONFIG = {
    TIMEOUT: 30000, // 30 seconds
    HEADERS: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
export const CONTACT_INFO = {
    EMAIL: "community@githubsrmist.in",
    WEBSITE: "https://githubsrmist.in",
};

export default {
    API_BASE_URL,
    API_ENDPOINTS,
    API_CONFIG,
    CONTACT_INFO,
};
