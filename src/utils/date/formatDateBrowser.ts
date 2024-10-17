export default function formatDateBrowser(date: Date) {
  const defaultLanguage = "pt-BR";
  const currentTime = new Intl.DateTimeFormat(
    navigator.language || defaultLanguage,
    {
      dateStyle: "short",
    }
  ).format(date);
  return currentTime;
}
