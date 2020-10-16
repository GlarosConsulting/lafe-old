import {
  CHANGE_SIDEBAR_VISIBILITY,
  CHANGE_SIDEBAR_POSITION,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  CHANGE_ACTIVE_SIDEBAR_ITEM,
} from '../actions/navigation';

const INITIAL_STATE = {
  sidebarOpened: false,
  activeItem: window.location.pathname,
  sidebarPosition: 'left',
  sidebarVisibility: 'show',
};

export default function runtime(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        sidebarOpened: true,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        sidebarOpened: false,
      };
    case CHANGE_SIDEBAR_POSITION:
      return {
        ...state,
        sidebarPosition: action.payload,
      };
    case CHANGE_SIDEBAR_VISIBILITY:
      return {
        ...state,
        sidebarVisibility: action.payload,
      };
    case CHANGE_ACTIVE_SIDEBAR_ITEM:
      return {
        ...state,
        activeItem: action.activeItem,
      };
    default:
      return state;
  }
}
