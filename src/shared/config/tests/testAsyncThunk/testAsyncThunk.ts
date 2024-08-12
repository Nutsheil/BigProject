import axios from 'axios';
import type { AxiosStatic } from 'axios';
import type { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';

type ActionCreator<Return, Arg, RejectValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectValue> {
  dispatch: jest.MockedFunction<Dispatch>;

  getState: () => StateSchema;

  actionCreator: ActionCreator<Return, Arg, RejectValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreator<Return, Arg, RejectValue>, state?: DeepPartial<StateSchema>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async call(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

    return result;
  }
}
