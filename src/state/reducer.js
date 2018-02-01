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
  tabs: [],
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
      let newTab = new Tab(action.payload);
      return {
        ...state,
        tabs: state.tabs.concat(newTab),
        currentTab: newTab
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