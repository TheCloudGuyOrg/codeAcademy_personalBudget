//Import Modules
const request = require('supertest')
const assert = require('assert')
const app = require('../server.js')

//Test: GET /api/v1/envelopes
describe('GET /api/v1/envelopes', () => {
    it('status_code: 200', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes'
        const expected = 200

        // Exercise
        const response = await request(app)
            .get(excerciseUrl)

        const result = response.status

        // Verify
        assert.equal(result, expected)
    })

    it('Status: Success', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes'
        const expected = 'Success'

        // Exercise
        const response = await request(app)
            .get(excerciseUrl)
           
        const result = response._body.status

        // Verify
        assert.equal(result, expected)
    })
});

//Test: GET /api/v1/envelopes/:id
describe('GET /api/v1/envelopes/:id', () => {
    it('status_code: 200', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes/9999'
        const setupUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const teardownUrl = '/api/v1/envelopes/9999'
        const expected = 200

        await request(app)
            .post(setupUrl)

        // Exercise
        const response = await request(app)
            .get(excerciseUrl)

        const result = response.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
            .delete(teardownUrl)
    })

    it('Status: Success', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes/9999'
        const setupUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const teardownUrl = '/api/v1/envelopes/9999'
        const expected = 'Success'

        await request(app)
            .post(setupUrl)

        // Exercise
        const response = await request(app)
            .get(excerciseUrl)

        const result = response._body.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
            .delete(teardownUrl)
    })
});

//Test: POST /api/v1/envelopes
describe('POST /api/v1/envelopes', () => {
    it('status_code: 201', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const teardownUrl = '/api/v1/envelopes/9999'
        const expected = 201

        // Exercise
        const response = await request(app)
            .post(excerciseUrl)

        const result = response.status

        // Verify
        assert.equal(result, expected)

        // Teardown
       await request(app)
            .delete(teardownUrl)
    })

    it('Status: Success', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const teardownUrl = '/api/v1/envelopes/9999'
        const expected = 'Success'

        // Exercise
        const response = await request(app)
           .post(excerciseUrl)

        const result = response._body.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
            .delete(teardownUrl)
    })   
});

//Test: PUT /api/v1/envelopes
describe('PUT /api/v1/envelopes/:id', () => {
    it('status_code 200', async () => {
       
        // Setup
        const excerciseUrl = '/api/v1/envelopes/9999?id=9999&budget=111&title=Test'
        const setupUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const teardownUrl = '/api/v1/envelopes/9999'
        const expected = 200

        await request(app)
            .post(setupUrl)

        // Exercise
        const response = await request(app)
            .put(excerciseUrl)

        const result = response.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
            .delete(teardownUrl)
    })
    
    it('Status: Success', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes/9999?id=9999&budget=111&title=Test'
        const setupUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const teardownUrl = '/api/v1/envelopes/9999'
        const expected = 'Success'

        await request(app)
            .post(setupUrl)

        // Exercise
        const response = await request(app)
            .put(excerciseUrl)

        const result = response._body.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
            .delete(teardownUrl)
    })
});

//Test: DELETE /api/v1/envelopes/:id
describe('DELETE /api/v1/envelopes/:id', () => {
    it('status_code 200', async () => {
       
        // Setup
        const excerciseUrl = '/api/v1/envelopes/9999'
        const setupUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const expected = 200

        await request(app)
            .post(setupUrl)

        // Exercise
        const response = await request(app)
            .delete(excerciseUrl)

        const result = response.status

        // Verify
        assert.equal(result, expected)
    })
    
    it('Status: Success', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes/9999'
        const setupUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const expected = 'Success'

        await request(app)
            .post(setupUrl)

        // Exercise
        const response = await request(app)
            .delete(excerciseUrl)

        const result = response._body.status

        // Verify
        assert.equal(result, expected)
    })
});

//Test: GET /api/v1/transactions
describe('GET /api/v1/transactions', () => {
    it('status_code: 200', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/transactions'
        const expected = 200

        // Exercise
        const response = await request(app)
            .get(excerciseUrl)

        const result = response.status

        // Verify
        assert.equal(result, expected)
    })

    it('Status: Success', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/transactions'
        const expected = 'Success'

        // Exercise
        const response = await request(app)
            .get(excerciseUrl)
           
        const result = response._body.status

        // Verify
        assert.equal(result, expected)
    })
});

//Test: GET /api/v1/transactions/:id
describe('GET /api/v1/transactions/:id', () => {
    it('status_code: 200', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes/9999'
        const setupEnvelopeUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const setupTransactionUrl = '/api/v1/envelopes/9999/transactions?envelope_id=9999&payment_amount=999&payment_reciepient=Test&date=2099-12-31'
        const teardownEnvelopeUrl = '/api/v1/envelopes/9999'
        const teardownTransactionUrl = '/api/v1/transactions/9999'
        const expected = 200

        await request(app)
            .post(setupEnvelopeUrl)

        await request(app)
            .post(setupTransactionUrl)

        // Exercise
        const response = await request(app)
           .get(excerciseUrl)

        const result = response.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
           .delete(teardownTransactionUrl)

        await request(app)
            .delete(teardownEnvelopeUrl)
    })

    it('Status: Success', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes/9999'
        const setupEnvelopeUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const setupTransactionUrl = '/api/v1/envelopes/9999/transactions?envelope_id=9999&payment_amount=999&payment_reciepient=Test&date=2099-12-31'
        const teardownEnvelopeUrl = '/api/v1/envelopes/9999'
        const teardownTransactionUrl = '/api/v1/transactions/9999'
        const expected = 'Success'

        await request(app)
            .post(setupEnvelopeUrl)

        await request(app)
            .post(setupTransactionUrl)

        // Exercise
        const response = await request(app)
           .get(excerciseUrl)

        const result = response._body.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
           .delete(teardownTransactionUrl)

        await request(app)
            .delete(teardownEnvelopeUrl)
    })
});

//Test: POST /api/v1/envelopes/:id/transactions
describe('POST /api/v1/envelopes/:id/transactions', () => {
    it('status_code: 201', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes/9999/transactions?envelope_id=9999&payment_amount=999&payment_reciepient=Test&date=2099-12-31'
        const setupEnvelopeUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const teardownEnvelopeUrl = '/api/v1/envelopes/9999'
        const teardownTransactionUrl = '/api/v1/transactions/9999'
        const expected = 201

        await request(app)
            .post(setupEnvelopeUrl)
    
        // Exercise
        const response = await request(app)
            .post(excerciseUrl)
        
        const result = response.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
            .delete(teardownTransactionUrl)

        await request(app)
            .delete(teardownEnvelopeUrl)
    })

    it('Status: Success', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/envelopes/9999/transactions?envelope_id=9999&payment_amount=999&payment_reciepient=Test&date=2099-12-31'
        const setupEnvelopeUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const teardownEnvelopeUrl = '/api/v1/envelopes/9999'
        const teardownTransactionUrl = '/api/v1/transactions/9999'
        const expected = 'Success'

        await request(app)
            .post(setupEnvelopeUrl)
    
        // Exercise
        const response = await request(app)
            .post(excerciseUrl)
        
        const result = response._body.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
            .delete(teardownTransactionUrl)

        await request(app)
            .delete(teardownEnvelopeUrl)
    })
});

//Test: PUT /api/v1/transactions/
describe('PUT /api/v1/transactions/', () => {
    it('status_code: 200', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/transactions/9999?id=9999&envelope_id=9999&payment_amount=111&payment_reciepient=Test&date=2099-12-31'
        const setupEnvelopeUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const setupTransactionUrl = '/api/v1/envelopes/9999/transactions?envelope_id=9999&payment_amount=999&payment_reciepient=Test&date=2099-12-31'
        const teardownEnvelopeUrl = '/api/v1/envelopes/9999'
        const teardownTransactionUrl = '/api/v1/transactions/9999'
        const expected = 200

        await request(app)
            .post(setupEnvelopeUrl)

        await request(app)
            .post(setupTransactionUrl)
    
        // Exercise
        const response = await request(app)
            .put(excerciseUrl)
        
        const result = response.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
            .delete(teardownTransactionUrl)

        await request(app)
            .delete(teardownEnvelopeUrl)
    })

    it('Status: Success', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/transactions/9999?id=9999&envelope_id=9999&payment_amount=111&payment_reciepient=Test&date=2099-12-31'
        const setupEnvelopeUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const setupTransactionUrl = '/api/v1/envelopes/9999/transactions?envelope_id=9999&payment_amount=999&payment_reciepient=Test&date=2099-12-31'
        const teardownEnvelopeUrl = '/api/v1/envelopes/9999'
        const teardownTransactionUrl = '/api/v1/transactions/9999'
        const expected = 'Success'

        await request(app)
            .post(setupEnvelopeUrl)

        await request(app)
            .post(setupTransactionUrl)
    
        // Exercise
        const response = await request(app)
            .put(excerciseUrl)
        
        const result = response._body.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
            .delete(teardownTransactionUrl)

        await request(app)
            .delete(teardownEnvelopeUrl)
    })
});

//Test: DELETE /api/v1/transactions/9999
describe('DELETE /api/v1/transactions/9999', () => {
    it('status_code: 200', async () => {
        
        // Setup
        const excerciseUrl = '/api/v1/transactions/9999'
        const setupEnvelopeUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const setupTransactionUrl = '/api/v1/envelopes/9999/transactions?envelope_id=9999&payment_amount=999&payment_reciepient=Test&date=2099-12-31'
        const teardownEnvelopeUrl = '/api/v1/envelopes/9999'
        const expected = 200

        await request(app)
            .post(setupEnvelopeUrl)

        await request(app)
            .post(setupTransactionUrl)
    
        // Exercise
        const response = await request(app)
            .delete(excerciseUrl)
        
        const result = response.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
            .delete(teardownEnvelopeUrl)
    })

    it('Status: Success', async () => {
        
        //Setup
        const excerciseUrl = '/api/v1/transactions/9999'
        const setupEnvelopeUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
        const setupTransactionUrl = '/api/v1/envelopes/9999/transactions?envelope_id=9999&payment_amount=999&payment_reciepient=Test&date=2099-12-31'
        const teardownEnvelopeUrl = '/api/v1/envelopes/9999'
        const expected = 'Success'

        await request(app)
            .post(setupEnvelopeUrl)

        await request(app)
            .post(setupTransactionUrl)
    
        // Exercise
        const response = await request(app)
            .delete(excerciseUrl)
        
        const result = response._body.status

        // Verify
        assert.equal(result, expected)

        // Teardown
        await request(app)
            .delete(teardownEnvelopeUrl)
    })
});

// Add Spies https://sinonjs.org/releases/latest/spies/