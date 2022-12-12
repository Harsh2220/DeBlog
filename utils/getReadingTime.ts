function readingTime(blog: string) {
  const text = blog;
  const wpm = 150;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
export default readingTime;
