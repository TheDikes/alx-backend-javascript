const sinon = require('sinon');
const { expect } = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('validate the usage of the Utils function', () => {
    const spyConsole = sinon.spy(console, 'log');
    const stubUtils = sinon.stub(Utils, 'calculateNumber');

   stubUtils.withArgs('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(spyConsole.calledOnce).to.be.true;
    expect(spyConsole.calledWith('The total is: 10')).to.be.true;
    stubUtils.restore()
    spyConsole.restore();
  });
});
