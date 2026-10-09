import dayjs from "dayjs";
import "dayjs/locale/ja.js"; // NodeNext では .js 拡張子の記述が必要です

dayjs.locale("ja");

const deadline: Date = new Date(2026, 9, 2, 14, 15);
const createdAt: Date = new Date(2026, 8, 25, 9, 45);

const str =
  `期限 ${dayjs(deadline).format("YYYY/MM/DD(dd) HH:mm")}` +
  `(登録日 ${dayjs(createdAt).format("YYYY/MM/DD(dd) HH:mm")})`;

console.log(str);