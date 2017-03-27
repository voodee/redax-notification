# Redux notification

Wraps [react-notifications](https://github.com/voodee/react-notifications) into a component and exposes actions and reducer.

## Installing
This component is available as CommonJS and UMD module. Install via NPM running:

`npm i https://github.com/voodee/redux-notification/tarball/master --save`

## Using
##### 1. You need to do is to add the redux-notifications reducer to Redux.
```js
import { combineReducers } from 'redux'
import { reducers as notifications } from 'redux-notification'

export default combineReducers({
    notifications
})
```

#### 2. Add the Notifs component at the root of your app
```js
import { Provider }  from 'react-redux'
import { Notifications } from 'redux-notifications';

<Provider store={store}>
  <div>
    // ... other things like router ...
    <Notifications />
  </div>
</Provider>
```

#### 3. Sending notifications
```js
import { showNotification } from 'redux-notifications'

class Demo extends React.Component {
  send() {
    this.props.dispatch(showNotification({
      message: 'hello world'
    }))
  }

  render() {
    <button onClick={this.send}>Send Notification</button>
  }
}
```
