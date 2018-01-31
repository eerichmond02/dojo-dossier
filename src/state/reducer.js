import {SWITCH_TAB, ADD_TAB, ADD_ITEM} from './types'

const genId = (str1, str2, str3) => {
  const megaStr = '' + str1 + str2 + str3;
  const chars = [];
  for(let i = 0; i < megaStr.length; i++) {
    const randomVal = Math.floor(Math.random() * 3 * megaStr.charCodeAt(i));
    if (randomVal % 3 === 0) {
      chars.push(i);
    } else {
      chars.push(String.fromCharCode(randomVal));
    } if(i === str1.length || i === str2.length) chars.push('-')
  }
  return chars.join('');
}

class Tab {
  constructor(name, items) {
    this.name = name;
    if (items) { this.items = items; }
    else { this.items = []; }
    this.id = genId(name, (Math.floor(Math.random() * 1000)), (Math.floor(Math.random() * 1000)));
  }
}

const initialState = {
  tabs: [
    new Tab ('Sally', ['Owns a pet dog']),
    new Tab ('Jim', ['JavaScript programmer']),
    new Tab ('Gemma', ['Enjoys yoga']),
    new Tab ('Arthur', ['Has three kids']),
    new Tab ('Heath', ['Great listener', 'Owns a pet python', 'Played volleyball in college'])
  ],
  currentTab: undefined,
}

const selectTab = (tabs, id) => {
  let selectedTab;
  tabs.forEach(tab => {
    if(tab.id === id) selectedTab = tab;
  });
  return selectedTab;
}

const addItem = (tabs, info) => {
  let newTabs = tabs.slice();
  newTabs.forEach(tab => {
    if(tab.id === info.id) {
      tab.items.push(info.text);
    }
  })
  return newTabs;
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case SWITCH_TAB:
      return {
        ...state,
        currentTab: selectTab(state.tabs, action.payload)
      }
    case ADD_TAB:
      return {
        ...state,
        tabs: state.tabs.concat(new Tab(action.payload))
      }
    case ADD_ITEM:
      return {
        ...state,
        tabs: addItem(state.tabs, action.payload)
      }
    default:
      return state;
  }
}

export default reducer;