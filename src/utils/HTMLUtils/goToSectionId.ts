export function goToSectionId(id: string) {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element with id "${id}" not found.`);
  }
  element.scrollIntoView({ behavior: "smooth" });
}
