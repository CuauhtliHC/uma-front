export async function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('User', serializedState);
  } catch (e) {
    console.error(e);
  }
}

export function loadState() {
  try {
    const serializedState = localStorage.getItem('User');
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export function saveToken(token) {
  try {
    localStorage.setItem('token', token);
  } catch (e) {
    console.error(e);
  }
}
