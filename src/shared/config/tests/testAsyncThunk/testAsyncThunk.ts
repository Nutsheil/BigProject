import type { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';

type ActionCreator<Return, Arg, RejectValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>;

export class TestAsyncThunk<Return, Arg, RejectValue> {
  dispatch: jest.MockedFunction<Dispatch>;

  getState: () => StateSchema;

  actionCreator: ActionCreator<Return, Arg, RejectValue>;

  constructor(actionCreator: ActionCreator<Return, Arg, RejectValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async call(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
