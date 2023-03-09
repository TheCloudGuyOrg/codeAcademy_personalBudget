//Import Modules
const request = require('supertest')
const assert = require('assert');
const app = require('../server.js')

//Test addEnvelopes
describe('Test Add Envelopes', () => {
    it('Validate addEnvelope Status Code', async () => {
        // Setup
        const expected = 200

        const id = 9999
        const title = 'test'
        const budget = 999

        // Exercise
        const response = await request(app)
            .post('/api/v1/envelopes')
            .send({id, title, budget});

        // Verify
        assert.equal(response.status, expected)

        // Teardown
    })

    it('Validate addEnvelope Content', async () => {
        // Setup
        // Exercise
        const response = await request(app)
           .post('/api/v1/envelopes')
        // Verify
        //console.log(response.text)
        // Teardown
    })
});


//Test updateEnvelopes
describe('Test Update Envelopes', () => {
    it('Validate updateEnvelope Status Code', async () => {
        // Setup
        const expected = 200

        const id = 9999
        const title = 'test'
        const budget = 999

        // Exercise
        const response = await request(app)
            .put('/api/v1/envelopes/9999')
            .type('form')
            .send({id, title, budget})

        // Verify

        assert.equal(response.status, expected)
        // Teardown
    })

    it('Validate updateEnvelope Content', async () => {
        // Setup
        // Exercise
        const response = await request(app)
            .put('/api/v1/envelopes/9999')
        // Verify
       // console.log(response.text)
        // Teardown
    })
});

//Test getEnvelopes
describe('Test Get Envelopes', () => {
    it('Validate getEnvelopes Status Code', async () => {
        // Setup
        const expected = 200
        // Exercise
        const response = await request(app)
            .get('/api/v1/envelopes')
        // Verify
        assert.equal(response.status, expected)
    })

    it('Validate getEnvelopes Content', async () => {
        // Setup
        // Exercise
        const response = await request(app)
            .get('/api/v1/envelopes')
        // Verify
        //console.log(response.text)
        //assert.include('status":"Success')
    })
});

//Test getEnvelopes by Id
describe('Test Get Envelopes by Id', () => {
    it('Validate getEnvelopesById Status Code', async () => {
        // Setup
        const expected = 200
        // Exercise
        const response = await request(app)
            .get('/api/v1/envelopes/9999')
        // Verify
        assert.equal(response.status, expected)
    })

    it('Validate getEnvelopesById Content', async () => {
        // Setup
        // Exercise
        const response = await request(app)
            .get('/api/v1/envelopes/9999')
        // Verify
       // console.log(response.text)
    })
});

//Test deleteEnvelopes
describe('Test Delete Envelopes', () => {
    it('Validate deleteEnvelop Status Code', async () => {
        // Setup
        const expected = 200
        // Exercise
        const response = await request(app)
            .delete('/api/v1/envelopes/9999')
        // Verify
        assert.equal(response.status, expected)
        // Teardown
    })

    it('Validate deleteEnvelope Content', async () => {
        // Setup
        // Exercise
        const response = await request(app)
            .delete('/api/v1/envelopes/9999')
        // Verify
        //console.log(response.text)
        // Teardown
    })
});


//Test addEnvelopeTransaction
describe('Test Add Envelopes by Transaction', () => {
    it('Validate addEnvelopeTransaction Status Code', async () => {
        
        // Setup
        const expected = 200
   
        date = '2023-03-01'
        payment_amount = 9999
        payment_reciepient = 'test'
        envelope_id = 1
    
        // Exercise
        const response = await request(app)
            .post('/api/v1/envelopes/9999/transactions')
            .type('form')
            .send({date, payment_amount, payment_reciepient, envelope_id})
        
        // Verify
        assert.equal(response.status, expected)

        // Teardown
    })

    it('Validate addEnvelopeTransaction Content', async () => {
        // Setup
        // Exercise
        //const response = await request(app)
           // .post('/api/v1/envelopes/1')
        // Verify
        //console.log(response.text)
        // Teardown
    })

    it('Validate Envelope Budget Updated', async () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    })
});

//Test getEnvelopeTransaction
describe('Test Get Envelopes by Transaction', () => {
    it('Validate getEnvelopeTransactions Status Code', async () => {
        // Setup
        const expected = 200
        // Exercise
        const response = await request(app)
            .get('/api/v1/envelopes/9999/transactions')
        // Verify
        assert.equal(response.status, expected)
    })

    it('Validate getEnvelopeTransactions Content', async () => {
        // Setup
        // Exercise
        const response = await request(app)
            .get('/api/v1/envelopes/9999/transactions')
        // Verify
       // console.log(response.test)
    })
});

//Test getTransactions
describe('Test Get Transactions', () => {
    it('Validate getTransactions Status Code', async () => {
        // Setup
        const expected = 200
        // Exercise
        const response = await request(app)
            .get('/api/v1/transactions')
        // Verify
        assert.equal(response.status, expected)
    })

    it('Validate getTransactions Content', async () => {
        // Setup
        // Exercise
        const response = await request(app)
            .get('/api/v1/transactions')
        // Verify
       // console.log(response.text)
    })
});

//Test getTransactions by Id
describe('Test Get Transactions by Id', () => {
    it('Validate getTransactionById Status Code', async () => {
        // Setup
        const expected = 200
        // Exercise
        const response = await request(app)
            .get('/api/v1/transactions/9999')
        // Verify
        assert.equal(response.status, expected)
    })

    it('Validate getTransactionById Content', async () => {
        // Setup
        // Exercise
        const response = await request(app)
            .get('/api/v1/transactions/9999')
        // Verify
       // console.log(response.text)
    })
});

//Test updateTransactions
describe('Test Update Transactions', () => {
    it('Validate updateTransaction Status Code', async () => {
        // Setup
        const expected = 200
        // Exercise
        const response = await request(app)
            .put('/api/v1/envelopes/9999')
        // Verify
        assert.equal(response.status, expected)
        // Teardown
    })

    it('Validate updateTransaction Content', async () => {
        // Setup
        // Exercise
        const response = await request(app)
            .put('/api/v1/envelopes/9999')
        // Verify
      //  console.log(response.text)
        // Teardown
    })

    it('Validate Envelope Budget Updated', async () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    })
});

//Test deleteTransactions
describe('Test Delete Transactions', () => {
    it('Validate deleteTransaction Status Code', async () => {
        // Setup
        const expected = 200
        // Exercise
        const response = await request(app)
            .delete('/api/v1/envelopes/9999')
        // Verify
        console.log(response)
        assert.equal(response.status, expected)
        // Teardown
    })

    it('Validate deleteTransaction Content', async () => {
        // Setup
        // Exercise
        const response = await request(app)
            .delete('/api/v1/envelopes/9999')
        // Verify
       // console.log(response.text)
        // Teardown
    })

    it('Validate Envelope Budget Updated', async () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    })
});