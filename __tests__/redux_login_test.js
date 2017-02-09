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
        firstName: '',
        lastName: '',
        position: '',
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
        firstName: 'John',
        lastName: 'Doe',
        position: 'Student',
      }),
    ).toEqual(
      {
        firstName: 'John',
        lastName: 'Doe',
        position: 'Student',
      },
    );
  });
  it('should handle ADD_USER', () => {
    expect(
      reducer([], {
        type: ADD_USER,
        username: 'Johnny5',
        email: 'john_doe@gmail.com',
        firstName: 'John',
        lastName: 'Doe',
        position: 'Student',
      }),
    ).toEqual(
      {
        username: 'Johnny5',
        email: 'john_doe@gmail.com',
        firstName: 'John',
        lastName: 'Doe',
        position: 'Student',
      },
    );
  });
});
