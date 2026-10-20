export type Crop = "玉米" | "水稻" | "小麦" | "大豆";

export interface Variety {
  slug: string;
  name: string;
  crop: Crop;
  badge?: string;
  tagline: string;
  image: string;
  /** 生育期 */
  growthPeriod: string;
  /** 审定编号 */
  approvalNo: string;
  /** 适宜区域 */
  region: string;
  /** 突出特点，列表页展示三条 */
  highlights: string[];
  /** 特征特性 */
  features: string[];
  /** 产量表现 */
  yield: string;
  /** 抗性 */
  resistance: string;
  /** 栽培要点 */
  cultivation: string[];
  /** 包装规格 */
  packing: string;
  /** 是否首页推荐 */
  featured?: boolean;
}

export const crops: Crop[] = ["玉米", "水稻", "小麦", "大豆"];

export const varieties: Variety[] = [
  {
    slug: "liangchun-789",
    name: "良纯 789",
    crop: "玉米",
    badge: "主推品种",
    tagline: "耐密抗倒，稳产广适的中早熟玉米新品种",
    image: "/images/varieties/corn-958.jpg",
    growthPeriod: "夏播 96–100 天",
    approvalNo: "国审玉 20240000",
    region: "黄淮海夏玉米区、京津冀早夏播区",
    highlights: ["耐密植 4500–5000 株/亩", "茎秆坚韧，抗倒伏", "穗大轴细，出籽率高"],
    features: [
      "幼苗叶鞘紫色，叶片深绿，株型紧凑，株高约 268 厘米，穗位高约 102 厘米。",
      "果穗筒型，穗长 19–21 厘米，穗行数 16–18 行，籽粒黄色、半马齿型，千粒重约 356 克。",
      "灌浆速度快，成熟后站秆性好，适宜机械化籽粒收获。",
    ],
    yield: "区域试验平均亩产 682 公斤，较对照增产 7.4%；高产田块可达 800 公斤以上。",
    resistance: "中抗茎腐病、小斑病，抗倒伏，耐高温热害能力较好。",
    cultivation: [
      "适期早播，黄淮海地区建议 6 月上中旬播种，亩保苗 4500–5000 株。",
      "重施基肥，大喇叭口期追施氮肥 15–20 公斤/亩，配合磷钾肥。",
      "注意防治玉米螟与草地贪夜蛾，抽雄前后保证水分供应。",
    ],
    packing: "4000 粒/袋、8000 粒/袋（单粒播种）",
    featured: true,
  },
  {
    slug: "liangchun-168",
    name: "良纯 168",
    crop: "玉米",
    tagline: "早熟脱水快，适合机收籽粒的春播玉米",
    image: "/images/varieties/corn-168.jpg",
    growthPeriod: "春播 118–122 天",
    approvalNo: "国审玉 20230000",
    region: "东北中早熟区、内蒙古东部、山西北部",
    highlights: ["早熟 3–5 天，脱水快", "籽粒角质，商品性好", "适合全程机械化"],
    features: [
      "株型半紧凑，株高约 285 厘米，穗位高约 108 厘米，根系发达。",
      "果穗长筒型，穗长 20 厘米左右，穗行数 16 行，籽粒橙黄、硬粒型。",
      "后期脱水速度快，收获时籽粒含水率低，破损率低。",
    ],
    yield: "区域试验平均亩产 746 公斤，较对照增产 6.1%。",
    resistance: "抗大斑病，中抗丝黑穗病，耐低温出苗能力强。",
    cultivation: [
      "地温稳定通过 10℃ 后播种，东北地区一般 4 月下旬至 5 月上旬。",
      "亩保苗 4000–4500 株，注意种肥隔离，避免烧种。",
      "适期晚收，籽粒乳线消失后机械收获，减少破碎。",
    ],
    packing: "4000 粒/袋、8000 粒/袋",
    featured: true,
  },
  {
    slug: "liangchun-rice-1",
    name: "良纯稻 1 号",
    crop: "水稻",
    badge: "常规粳稻",
    tagline: "抗倒高产，米质达国标二级的粳稻品种",
    image: "/images/varieties/rice-1.jpg",
    growthPeriod: "黄淮粳稻区 150–155 天",
    approvalNo: "国审稻 20240000",
    region: "江苏北部、安徽沿淮、山东南部稻区",
    highlights: ["茎秆粗壮，抗倒性强", "米质国标二级", "穗大粒多，结实率高"],
    features: [
      "株高约 98 厘米，株型紧凑，叶片挺直，群体通风透光好。",
      "每亩有效穗 22–24 万，穗长 16.5 厘米，每穗总粒数 135 粒左右，结实率 91% 以上。",
      "谷粒椭圆，千粒重 27 克，整精米率 68%，垩白度低。",
    ],
    yield: "区域试验平均亩产 665 公斤，生产试验亩产 690 公斤。",
    resistance: "中抗稻瘟病、条纹叶枯病，抗倒伏。",
    cultivation: [
      "手插秧 5 月中下旬移栽，机插秧 5 月下旬至 6 月初。",
      "亩栽 1.8–2.0 万穴，每穴 3–4 苗，氮肥后移，控蘖促穗。",
      "分蘖末期适时晒田，破口期防治稻曲病与稻飞虱。",
    ],
    packing: "2.5 公斤/袋、5 公斤/袋",
    featured: true,
  },
  {
    slug: "liangchun-aroma-rice",
    name: "良纯香稻",
    crop: "水稻",
    tagline: "香味浓郁，适合优质米开发的香稻品种",
    image: "/images/varieties/rice-aroma.jpg",
    growthPeriod: "中稻 138–142 天",
    approvalNo: "省审稻 20230000",
    region: "长江中下游一季稻区",
    highlights: ["天然香味，食味佳", "米粒细长，外观好", "适合订单化种植"],
    features: [
      "株高约 112 厘米，分蘖力中等，穗型较大，着粒均匀。",
      "千粒重 25 克，米粒细长，透明度好，蒸煮时有明显清香。",
      "适合优质米订单收购与品牌化开发。",
    ],
    yield: "平均亩产 580 公斤左右，高产田块 620 公斤。",
    resistance: "中感稻瘟病，需重点做好穗颈瘟预防。",
    cultivation: [
      "适期播种，避免花期遇高温；长江中下游建议 5 月中下旬播种。",
      "控氮增钾，防止倒伏与贪青晚熟。",
      "破口前 5–7 天与齐穗期各防治一次稻瘟病。",
    ],
    packing: "1 公斤/袋、2.5 公斤/袋",
  },
  {
    slug: "liangchun-wheat-12",
    name: "良纯麦 12",
    crop: "小麦",
    tagline: "冬性抗寒，穗大粒饱的高产小麦品种",
    image: "/images/varieties/wheat-12.jpg",
    growthPeriod: "冬小麦 235–240 天",
    approvalNo: "国审麦 20240000",
    region: "黄淮冬麦区北片、山西南部、陕西关中",
    highlights: ["抗寒性好，越冬安全", "成穗率高，穗层整齐", "面筋品质优良"],
    features: [
      "冬性，幼苗半匍匐，分蘖力强，株高约 78 厘米，株型紧凑。",
      "穗纺锤形，长芒，白壳，白粒，角质，千粒重 45 克左右。",
      "容重 810 克/升，蛋白质含量 14.2%，适合制作馒头、面条。",
    ],
    yield: "区域试验平均亩产 596 公斤，较对照增产 5.8%。",
    resistance: "抗寒、抗倒伏，中抗白粉病与条锈病。",
    cultivation: [
      "黄淮北片适宜播期 10 月上中旬，亩基本苗 18–22 万。",
      "施足底肥，返青拔节期结合浇水追施尿素 15 公斤/亩。",
      "抽穗扬花期注意防治赤霉病，结合天气抢晴用药。",
    ],
    packing: "15 公斤/袋",
    featured: true,
  },
  {
    slug: "liangchun-soybean-7",
    name: "良纯豆 7",
    crop: "大豆",
    tagline: "耐密耐荫，适合玉米大豆带状复合种植",
    image: "/images/varieties/soybean-7.jpg",
    growthPeriod: "夏播 105–110 天",
    approvalNo: "国审豆 20230000",
    region: "黄淮海夏大豆区",
    highlights: ["耐荫性好，适合套种", "抗倒伏，底荚高", "蛋白含量 42% 以上"],
    features: [
      "株高约 85 厘米，主茎节数 16 节，分枝 2–3 个，株型收敛。",
      "紫花，灰毛，有限结荚习性，底荚高度 15 厘米以上，适合机收。",
      "籽粒圆形，种皮黄色，脐淡褐色，百粒重 21 克。",
    ],
    yield: "净作平均亩产 218 公斤；带状复合种植下亩产 130 公斤以上。",
    resistance: "抗花叶病毒病，中抗胞囊线虫病，抗倒伏。",
    cultivation: [
      "夏播 6 月中下旬，带状复合种植按 4:2 或 6:4 配置。",
      "亩保苗 1.2–1.5 万株，注意与玉米带保持足够间距。",
      "花荚期保证水分，注意防治点蜂缘蝽与食心虫。",
    ],
    packing: "5 公斤/袋、10 公斤/袋",
  },
];

export function getVariety(slug: string) {
  return varieties.find((v) => v.slug === slug);
}
