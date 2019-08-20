import { Actions } from '../../app/redux/modules/user';
import counter from '../../app/redux/modules/user';

describe('reducers', () => {
  describe('counter', () => {
    it('should handle INCREMENT_COUNTER', () => {
      expect(
        counter({counter: 1}, {
          type: Actions.INCREMENT_COUNTER
        })
      ).toMatchSnapshot();
    });

    it('should handle DECREMENT_COUNTER', () => {
      expect(
        counter({counter: 1}, {
          type: Actions.DECREMENT_COUNTER
        })
      ).toMatchSnapshot();
    });
  });
});
