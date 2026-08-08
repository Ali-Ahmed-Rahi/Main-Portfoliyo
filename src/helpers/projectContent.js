export const parseProjectContent = (contentLine) => {
  const titleMatch = contentLine.match(/^(\*\*.*?\*\*)/);

  return {
    title: titleMatch ? titleMatch[1].replace(/\*\*/g, "") : "",
    htmlContent: contentLine.replace(
      /\*\*(.*?)\*\*/g,
      "<strong class='font-bold'>$1</strong>",
    ),
  };
};
