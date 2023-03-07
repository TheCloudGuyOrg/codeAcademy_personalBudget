//Import Assert
const assert = require('assert')

//Import Envelope Queries
const {
    getEnvelopes,
    getEnvelopesById,
    addEnvelope,
    updateEnvelope,
    deleteEnvelope,
    addEnvelopeTransaction,
    getEnvelopeTransactions
} = require('../database/envelopeQueries.js');

//Import Transaction Queries
const {
	getTransactions,
	getTransactionById,
	deleteTransaction,
	updateTransaction
} = require('../database/transactionQueries.js');

//Test getEnvelopes
describe('Test Get Envelopes', () => {
    it('Validate getEnvelopes', () => {
        // Setup
        // Exercise
        // Verify
    });
});

//Test getEnvelopes by Id
describe('Test Get Envelopes by Id', () => {
    it('Validate getEnvelopesById', () => {
        // Setup
        // Exercise
        // Verify
    });
});

//Test addEnvelopes
describe('Test Add Envelopes', () => {
    it('Validate addEnvelope', () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    });
});

//Test updateEnvelopes
describe('Test Update Envelopes', () => {
    it('Validate updateEnvelope', () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    });
});

//Test deleteEnvelopes
describe('Test Delete Envelopes', () => {
    it('Validate deleteEnvelope', () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    });
});

//Test addEnvelopeTransaction
describe('Test Add Envelopes by Transaction', () => {
    it('Validate addEnvelopeTransaction', () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    });
    it('Validate Envelope Budget Updated', () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    });
});

//Test getEnvelopeTransaction
describe('Test Get Envelopes by Transaction', () => {
    it('Validate getEnvelopeTransactions', () => {
        // Setup
        // Exercise
        // Verify
    });
});

//Test getTransactions
describe('Test Get Transactions', () => {
    it('Validate getTransactions', () => {
        // Setup
        // Exercise
        // Verify
    });
});

//Test getTransactions by Id
describe('Test Get Transactions by Id', () => {
    it('Validate getTransactionById', () => {
        // Setup
        // Exercise
        // Verify
    });
});

//Test updateTransactions
describe('Test Update Transactions', () => {
    it('Validate updateTransaction', () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    });
    it('Validate Envelope Budget Updated', () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    });
});

//Test deleteTransactions
describe('Test Delete Transactions', () => {
    it('Validate deleteTransaction', () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    });
    it('Validate Envelope Budget Updated', () => {
        // Setup
        // Exercise
        // Verify
        // Teardown
    });
});