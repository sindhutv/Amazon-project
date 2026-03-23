import { formatCurrency } from "../../scripts/utils/money.js";

describe('formatCurrency', function () {

  it('converts cents into dollars', function () {
    expect(formatCurrency(2095)).toBe('20.95');
  });

  it('works with 0', function () {
    expect(formatCurrency(0)).toBe('0.00');
  });

  it('rounds up to the nearest cent', function () {
    expect(formatCurrency(2000.5)).toBe('20.01');
  });

});