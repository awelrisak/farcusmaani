export async function requestClipboardPermission() {
  try {
    const result = await navigator.permissions.query({ name: 'clipboard-write' });
    if (result.state === 'granted' || result.state === 'prompt') {
      return true; // Permission already granted or user gave permission
    } else {
      return false; // Permission denied by the user
    }
  } catch (error) {
    console.error('Error requesting clipboard permission: ', error);
    return false; // Failed to request permission
  }
}

export async function copyToClipboard(text: string) {
  try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard: ', text);
  } catch (error) {
    console.error('Error copying text to clipboard: ', error);
  }
}
