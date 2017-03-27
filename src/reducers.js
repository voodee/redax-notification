import {SHOW_NOTIFICATION, REMOVE_NOTIFICATION} from './constants'
import { defaultValue } from 'react-notification/lib/constants'
import { List, Map } from 'immutable'

const defaultState = new Map({
    list: new Map(),
    uid: 0
});

export default function Notifications(state = defaultState, action = {}) {
    switch(action.type) {
        case SHOW_NOTIFICATION:
            const newIud = state.get('uid') + 1;

            const _notification = defaultValue
                .merge( Map(action.payload) )
                .merge( Map({uid: newIud}));

            return state
                .setIn(['list', newIud], _notification)
                .set('uid', state.get('uid') + 1 );

        case REMOVE_NOTIFICATION:
            return state.set(
                'list',
                state.get('list').filter( notification => notification.get('uid') !== action.uid )
            )
    }

    return state
}