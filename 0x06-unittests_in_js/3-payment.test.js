const sinon = require('sinon');
const { expect } = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('validates the usage of the Utils function', () => {
    const spyUtil = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(spyUtil.callOnce).to.be.true;
    expect(spyUtil.calledWith('SUM', 100, 20)).to.be.true;
    spyUtil.restore();
  });
});
