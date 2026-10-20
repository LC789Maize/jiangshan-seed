/** 客户端可用的纯格式化函数（不引入 node 内置模块） */
export function formatDate(date: string) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}
