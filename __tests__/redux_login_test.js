require('babel-core/register');

import reducer, { SIGN_UP_INFO, ADD_SIGN_UP_INFO, ADD_USER } from '../client/redux/login';


describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        type: '',
      },
    );
  });

  it('should handle SIGN_UP_INFO', () => {
    expect(
      reducer([], {
        type: SIGN_UP_INFO,
        username: 'Johnny5',
        email: 'john_doe@gmail.com',
        password: 'password1',
      }),
    ).toEqual(
      {
        username: 'Johnny5',
        email: 'john_doe@gmail.com',
        password: 'password1',
      },
    );
  });
  it('should handle ADD_SIGN_UP_INFO', () => {
    expect(
      reducer([], {
        type: ADD_SIGN_UP_INFO,
        firstname: 'John',
        lastname: 'Doe',
        position: 'Student',
      }),
    ).toEqual(
      {
        firstname: 'John',
        lastname: 'Doe',
        type: 'Student',
      },
    );
  });
  it('should handle ADD_SIGN_UP_INFO', () => {
    expect(
      reducer([], {
        type: ADD_USER,
        firstname: 'John',
        lastname: 'Doe',
        position: 'Student',
      }),
    ).toEqual(
      {
        firstname: 'John',
        lastname: 'Doe',
        type: 'Student',
      },
    );
  });
});
