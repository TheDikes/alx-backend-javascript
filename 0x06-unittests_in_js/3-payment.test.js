const sinon = require('sinon');
const { expect } = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('validates the usage of the Utils function', () => {
    const bigBrother = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.calledWith('SUM', 100, 20)).to.be.true;
    expect(bigBrother.callCount).to.be.equal(1);
    bigBrother.restore();
  });
});
