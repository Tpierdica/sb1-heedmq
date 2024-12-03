export function scrollToElement(elementId: string) {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100); // Small delay to ensure DOM is updated
}