export function mood(moodMap = {}, month, year) {
  const weeks = {};

  const emojiMap = {
    '😊': 'happy',
    '😢': 'sad',
    '😐': 'neutral',
  };

  Object.entries(moodMap).forEach(([day, emoji]) => {
    if (!emojiMap[emoji]) return;

    const d = new Date(day);
    if (d.getMonth() !== month || d.getFullYear() !== year) return;

    const week = Math.floor((d.getDate() - 1) / 7);
    if (!weeks[week]) weeks[week] = { happy: 0, sad: 0, neutral: 0 };
    weeks[week][emojiMap[emoji]]++;
  });

  const totalDays = new Date(year, month + 1, 0).getDate();
  const numWeeks = Math.ceil(totalDays / 7);

  return Array.from({ length: numWeeks }, (_, i) => weeks[i] || { happy: 0, sad: 0, neutral: 0 });
}
