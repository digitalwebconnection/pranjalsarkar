/**
 * Integration tests for leads API routes.
 * TODO: Implement with supertest and a test MongoDB instance.
 */

describe('Leads Routes', () => {
  it.todo('POST /api/leads — should create a lead from public form');
  it.todo('POST /api/leads — should reject missing name/email');
  it.todo('POST /api/leads — should reject duplicate within 24h');
  it.todo('GET /api/leads — should require admin auth');
  it.todo('GET /api/leads — should return paginated leads');
  it.todo('GET /api/leads/stats — should return status counts');
  it.todo('PUT /api/leads/:id/status — should validate transitions');
  it.todo('PUT /api/leads/:id — should update lead details');
  it.todo('DELETE /api/leads/:id — should delete a lead');
});
