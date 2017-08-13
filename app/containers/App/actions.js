import { DRAWER_TOGGLE } from './constants';

export function toggleDrawer(drawerToggle) {
  return {
    type: DRAWER_TOGGLE,
    drawerToggle
  }
}