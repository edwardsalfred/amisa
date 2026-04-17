const VALID_REQUEST_TYPES = ['Content Change', 'Design Tweak', 'Bug / Issue', 'New Feature', 'Other'];
const VALID_PRIORITIES = ['Low', 'Medium', 'High'];
const MAX_TEXT = 2000;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { businessName, requestType, priority, pageSection, description } = req.body ?? {};

  if (!String(businessName || '').trim() || !String(requestType || '').trim() || !String(description || '').trim()) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!VALID_REQUEST_TYPES.includes(String(requestType))) {
    return res.status(400).json({ error: 'Invalid request type' });
  }
  if (priority && !VALID_PRIORITIES.includes(String(priority))) {
    return res.status(400).json({ error: 'Invalid priority' });
  }

  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          'Business Name': { title: [{ text: { content: String(businessName).trim().slice(0, MAX_TEXT) } }] },
          'Request Type': { select: { name: String(requestType) } },
          'Priority': { select: { name: String(priority || 'Medium') } },
          'Page/Section': { rich_text: [{ text: { content: String(pageSection || '').slice(0, MAX_TEXT) } }] },
          'Description': { rich_text: [{ text: { content: String(description).trim().slice(0, MAX_TEXT) } }] },
          'Status': { status: { name: 'New' } },
          'Dated Submitted': { date: { start: new Date().toISOString().split('T')[0] } },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error('Notion API error:', error);
      throw new Error('Notion API error');
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Feedback submission error:', err);
    return res.status(500).json({ error: 'Failed to submit request' });
  }
}
