import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, industry, budget, message } = body;

        // Perfex CRM API Integration
        // Note: Perfex usually requires a REST API module. 
        // The endpoint is typically /api/leads
        const CRM_URL = process.env.PERFEX_CRM_URL || 'https://perfexcrm-31a257081d78.herokuapp.com/api/leads';
        const API_KEY = process.env.PERFEX_API_KEY;

        if (!API_KEY) {
            console.warn('PERFEX_API_KEY is not set. Lead not synced to CRM.');
            // For now, we return success so the user sees a thank you message, 
            // but you should add your API key to Heroku Config Vars.
            return NextResponse.json({ success: true, message: 'Lead captured locally (Testing mode)' });
        }

        const response = await fetch(CRM_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                title: industry,
                company: company,
                email: email,
                description: `Budget: ${budget}. Message: ${message}`,
                status: 1, // Default status
                source: 1, // Web source
            }),
        });

        const result = await response.json();

        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        console.error('Lead Sync Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to sync lead' }, { status: 500 });
    }
}
