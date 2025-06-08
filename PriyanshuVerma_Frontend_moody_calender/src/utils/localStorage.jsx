export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error('Error saving to localStorage', err);
  }
}

export function getItem(key, defaultValue) {
  try {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : defaultValue;
  } catch (err) {
    console.error('Error reading from localStorage', err);
    return defaultValue;
  }
}

