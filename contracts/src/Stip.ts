import { Field, SmartContract, state, State, method } from 'o1js';

export class TradingContract extends SmartContract {
  @state(Field) ticker: State<string>;
  @state(Field) tradeType: State<string>;
  @state(Field) targetPrice: State<Field>;

  init() {
    super.init();
  }

  @method async addTradingAlgorithm(
    ticker: string,
    tradeType: string,
    targetPrice: Field
  ) {
    this.ticker.set(ticker);
    this.tradeType.set(tradeType);
    this.targetPrice.set(targetPrice);
  }

  @method.returns()
  getTradingAlgorithm(): Bool {
    return this.tradingAlgorithms.get();
  }
}
